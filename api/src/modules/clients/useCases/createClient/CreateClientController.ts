import { Request, Response } from 'express';
import { CreateClientUseCase } from './CreateClientUseCase';

export class CreateClientController {
	async handle(request: Request, response: Response) {
		//	#swagger.tags = ['Client']
		//  #swagger.description = 'Endpoint to register a user' */

		//	#swagger.parameters['obj'] = {
		//      in: 'body',
		//    description: 'User information.',
		//  required: true,
		//schema: { username: string, password: string}
		//}

		const createClientUseCase = new CreateClientUseCase();

		const { username, password } = request.body;

		const result = await createClientUseCase.execute({
			username,
			password
		});

		return response.json(result);
	}
}
