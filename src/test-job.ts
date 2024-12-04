import {
    ComparatorEnum,
    Job, Manager, OperatorEnum, SubscribeJob
} from '@suppa/sdk';
import {TaskEntity} from "./entities";


@Job("test-job")
export class TestJob {

    @SubscribeJob()
    public async run(manager: Manager): Promise<void> {
        console.log("------------TEST JOB-------", manager)
        const result = await manager.sudo.findOne<TaskEntity>("tasks", {
            where: {
                operator: OperatorEnum.And,
                filters: [

                    {
                        field: 'id',
                        comparator: ComparatorEnum.In,
                        value: 1,
                    },
                ],
            }
        })

        console.log("RESULT: ", result)

        return;
    }
}