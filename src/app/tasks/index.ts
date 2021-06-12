import { TasksRepository } from '@database/repositories/tasks'
import { getCustomRepository } from 'typeorm'
import { Request, Response } from 'express'
import { INewTasksData } from './interfaces'

export class Tasks {
	async new(req: Request, res: Response) {
		const { title, description, important, urgent }: INewTasksData = req.body

		const task = await getCustomRepository(TasksRepository).new({
			title,
			description,
			important,
			urgent
		})

		return res.status(201).json(task)
	}
}
