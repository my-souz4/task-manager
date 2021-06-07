import request from 'supertest'

import { app } from '@src/app'

describe('Server', () => {
	it('checks if the server is receiving the requests', async () => {
		const response = await request(app).get('/')

		expect(response.status).toBe(200)
		expect(response.body.message).toBe('It Works!')
	})
})
