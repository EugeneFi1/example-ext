import { Job, Manager, SubscribeJob } from '@suppa/sdk';

@Job('example-job')
export class ExampleJob {
	@SubscribeJob()
	testJobMethod(manager: Manager) {
		return '===========================';
	}
}
