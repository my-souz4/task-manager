import { Request, Response } from 'express'

class App {
	async index(_req: Request, res: Response) {
		return res.status(200).json({
			message: 'It Works!'
		})
	}
}

export { App }
