import { ExampleController } from './example.controller';
import { TaskExtension } from './task.extension';
import { ExampleJob } from './example.job';
import { Module } from '@nestjs/common';

export { TaskExtension, ExampleController, ExampleJob };

@Module({
	imports: [],
	controllers: [ExampleController],
	providers: [TaskExtension],
	exports: [],
})
export class AppModule {}
