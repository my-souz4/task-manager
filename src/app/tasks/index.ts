import { Request, Response } from 'express'

export class Tasks {
	async new(req: Request, res: Response) {
		return res.status(201).send()
	}
}
