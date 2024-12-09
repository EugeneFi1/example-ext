import { Controller, Post } from '@nestjs/common';
import { Manager } from '@suppa/sdk';

@Controller('example-controller')
export class ExampleController {
	@Post('ent-point')
	testControllerMethod(request: any, manager: Manager) {
		console.log(request);

		return request;
	}
}
