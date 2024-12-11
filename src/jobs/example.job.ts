import { Job, Manager, SubscribeJob } from '@suppa/sdk';
import { DiscoveryService } from '@nestjs/core';
import { Injectable } from '@nestjs/common';

// @Job('example-job')
@Injectable()
export class ExampleJob {
	constructor(readonly discoveryService: DiscoveryService) {
		console.log('ExampleJob:', { discoveryService });
	}

	@SubscribeJob()
	testJobMethod(manager: Manager) {
		return '===========================';
	}
}
