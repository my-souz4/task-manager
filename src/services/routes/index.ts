import { Router } from 'express'

const routes = Router()

routes.get('/', (_req, res) => {
	return res.status(200).json({
		message: 'It Works!'
	})
})

export { routes }
