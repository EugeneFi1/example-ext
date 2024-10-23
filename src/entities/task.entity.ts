import { UserEntity } from './user.entity';
import { EnumEntity } from './enum.entity';
import { ProjectEntity } from './project.entity';
import { BaseEntity } from '@suppa/sdk';

export interface TaskEntity extends BaseEntity {
	title: string;
	description: string;

	status: EnumEntity;

	owner: UserEntity;
	watchers: UserEntity[];

	project: ProjectEntity;
	parent: TaskEntity;

	duration?: number; // seconds
	start_date?: Date;
	end_date?: Date;
}
