import { Job, Manager, SubscribeJob } from '@suppa/sdk';

@Job('test')
export class ExampleController {
	@SubscribeJob()
	testJobMethod(manager: Manager) {
		console.log('========');
	}
}
