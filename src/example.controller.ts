import { Controller, Post } from '@suppa/sdk';

@Controller('test')
export class ExampleController {
	@Post('ent-point')
	testControllerMethod(body: any) {
		return body;
	}
}
