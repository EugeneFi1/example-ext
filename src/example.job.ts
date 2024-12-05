import { Job, Manager, SubscribeJob } from '@suppa/sdk';

@Job('test')
export class ExampleJob {
	@SubscribeJob()
	testJobMethod(manager: Manager) {
		console.log('========');
	}
}
