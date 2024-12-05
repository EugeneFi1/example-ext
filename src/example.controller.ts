import { Controller, Manager, Post } from '@suppa/sdk';

@Controller('test')
export class ExampleController {
	@Post('ent-point')
	testControllerMethod(request: any, manager: Manager) {
		console.log(request);

		return request;
	}
}
