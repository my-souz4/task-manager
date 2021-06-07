import { Tasks } from '@src/app/tasks'
import { Router } from 'express'

const routes = Router()
const tasks = new Tasks()

routes.post('/new', tasks.new)

export { routes }
