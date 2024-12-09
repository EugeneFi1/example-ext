import { Job, Manager, SubscribeJob } from '@suppa/sdk';
import { Injectable } from '@nestjs/common';

@Injectable()
@Job('test')
export class ExampleJob {
	@SubscribeJob()
	testJobMethod(manager: Manager) {
		console.log('========');
	}
}
