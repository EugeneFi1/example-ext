import {
    ComparatorEnum,
    Job, Manager, OperatorEnum, SubscribeJob
} from '@suppa/sdk';
import {TaskEntity} from "./entities";


@Job("test-job")
export class TestJob {

    @SubscribeJob()
    public async run(manager: Manager): Promise<void> {
        console.log("------------TEST JOB run-------")
        const result = await manager.sudo.findOneById<TaskEntity>("tasks", 1, {
            id: true,
            title: true
        })

        console.log(" TEST JOB RESULT: ", result)

        return;
    }

    @SubscribeJob()
    public async execute(manager: Manager): Promise<void> {
        console.log("------------TEST JOB execute-------")
        const result = await manager.sudo.findOneById<TaskEntity>("tasks", 2, {
            id: true,
            title: true
        })

        console.log(" TEST JOB execute RESULT: ", result)

        return;
    }
}