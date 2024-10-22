import {
	ComparatorEnum,
	Extension,
	Manager,
	OnEntityUpdate,
	OperatorEnum,
	UpdateParams,
} from '@suppa/sdk';
import { IAccountPayload } from '@suppa/proto-definitions';
import { TaskEntity } from './entities';
import { DateCalculator } from './utils';

export class TaskUpdateExt
	extends Extension
	implements OnEntityUpdate<TaskEntity>
{
	table = 'tasks';

	async beforeUpdate(
		params: UpdateParams,
		manager: Manager,
		account: IAccountPayload,
	): Promise<UpdateParams> {
		await new Promise((resolve) => setTimeout(resolve, 1000));

		const { start_date, duration, end_date } = params.fields;
		if (!start_date && !duration && !end_date) return params;

		const dateCalc = DateCalculator.getInstance();
		const calcResult =
			start_date && end_date
				? dateCalc.calculateDuration(start_date, end_date)
				: start_date
					? dateCalc.calculateEndDate(start_date, duration)
					: dateCalc.calculateStartDate(duration, end_date);

		params.fields.start_date = calcResult.start.toISOString();
		params.fields.end_date = calcResult.end.toISOString();
		params.fields.duration = calcResult.duration;

		return params;
	}

	async afterUpdate(
		records: TaskEntity[],
		manager: Manager,
		account: IAccountPayload,
	): Promise<TaskEntity[]> {
		const [firstTask] = records;
		const projectId = firstTask.project?.id;
		const taskIds = records.map((rec) => rec.id);

		if (projectId)
			new Promise<void>(async (resolve) => {
				const task = await manager.sudo.findOne<TaskEntity>('tasks', {
					select: {
						id: true,
					},
					where: {
						operator: OperatorEnum.And,
						filters: [
							{
								field: 'parent.id',
								comparator: ComparatorEnum.In,
								value: taskIds,
							},
						],
					},
				});

				if (!task) return resolve();

				await manager.sudo.update<TaskEntity>('tasks', {
					fields: {
						project: {
							id: projectId,
						},
					},
					conditions: {
						operator: OperatorEnum.And,
						filters: [
							{
								field: 'parent.id',
								comparator: ComparatorEnum.In,
								value: taskIds,
							},
						],
					},
				});

				return resolve();
			});

		return records;
	}
}
