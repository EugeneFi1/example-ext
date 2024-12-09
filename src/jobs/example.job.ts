import { Job, Manager, SubscribeJob } from '@suppa/sdk';
import { Injectable } from '@nestjs/common';

@Job('example-job')
export class ExampleJob {
	@SubscribeJob()
	testJobMethod(manager: Manager) {
		return '===========================';
	}
}
