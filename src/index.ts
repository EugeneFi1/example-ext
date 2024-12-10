import { ExampleController } from './controllers';
import { ExampleExtension } from './extensions';
import { ExampleJob } from './jobs';
import { DiscoveryModule } from '@nestjs/core';
import { Module } from '@nestjs/common';

export { ExampleExtension, ExampleController, ExampleJob };

@Module({
	providers: [],
})
export class RelationModule {}

@Module({
	imports: [DiscoveryModule, RelationModule],
	controllers: [ExampleController],
	providers: [ExampleExtension, ExampleJob],
})
export class AppModule {}
