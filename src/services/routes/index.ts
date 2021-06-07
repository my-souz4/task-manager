import { routes as routesTasks } from '@routes/tasks'
import { App } from '@src/app/index'
import { Router } from 'express'

const routes = Router()
const app = new App()

routes.get('/', app.index)

routes.use('/tasks', routesTasks)

export { routes }
