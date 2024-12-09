import { ExampleController } from './example.controller';
import { TaskExtension } from './task.extension';
import { ExampleJob } from './example.job';
import { Module } from '@nestjs/common';
import { DiscoveryModule } from '@nestjs/core';

export { TaskExtension, ExampleController, ExampleJob };

@Module({
	providers: [ExampleJob],
})
class DiffModule {}

@Module({
	imports: [DiscoveryModule, DiffModule],
	controllers: [ExampleController],
	providers: [TaskExtension],
	exports: [],
})
export class AppModule {}
