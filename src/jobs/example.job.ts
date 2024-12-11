import { Job, Manager, SubscribeJob } from '@suppa/sdk';
import { DiscoveryService } from '@nestjs/core';

@Job('example-job')
export class ExampleJob {
	constructor(
		readonly exampleJob: ExampleJob,
		readonly discoveryService: DiscoveryService,
	) {
		console.log('ExampleJob:', { exampleJob, discoveryService });
	}

	@SubscribeJob()
	testJobMethod(manager: Manager) {
		return '===========================';
	}
}
