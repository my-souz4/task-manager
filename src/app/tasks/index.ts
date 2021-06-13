import { TasksRepo } from '@database/repositories/tasks'
import { Request, Response } from 'express'
import { getCustomRepository } from 'typeorm'
import { INewTasksData } from './interfaces'

export class Tasks {
	async new(req: Request, res: Response) {
		const { title, description, important, urgent }: INewTasksData = req.body

		const task = await getCustomRepository(TasksRepo).new({
			title,
			description,
			important,
			urgent
		})

		return res.status(201).json(task)
	}

	async all(_req: Request, res: Response) {
		const tasks = await getCustomRepository(TasksRepo).all()

		return res.status(200).json(tasks)
	}
}
