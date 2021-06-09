import request from 'supertest'

import { app } from '@src/app'
import { createConnection, getConnection } from 'typeorm'
import { INewTasksData } from '@src/app/tasks/interfaces'
import { build } from 'factory-builder'
import { Task } from '@test/factories'

describe('Task Manager', () => {
	beforeAll(async () => {
		await createConnection()
	})

	afterAll(async () => {
		const connection = getConnection()
		await connection.close()
	})

	it('must be able create a new task', async () => {
		const object: INewTasksData = build('Task', Task)

		const response = await request(app).post('/tasks/new').send(object)

		expect(response.status).toBe(201)
	})
})
