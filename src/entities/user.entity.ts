import { BaseEntity } from '@suppa/sdk';

export interface UserEntity extends BaseEntity {
	first_name: string;
	last_name: string;
	boss?: UserEntity;
}
