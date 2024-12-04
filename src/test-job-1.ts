import {
    Job, Manager, SubscribeJob
} from '@suppa/sdk';
import {TaskEntity} from "./entities";


@Job("test-job-1")
export class TestJobFirst {

    @SubscribeJob()
    public async run(manager: Manager): Promise<void>  {
        console.log("------------TEST JOB 1-------")
        const result = await manager.sudo.findOneById<TaskEntity>("tasks", 2, {
            id: true,
            title: true,
        })

        console.log(" TEST JOB 1 RESULT: ", result)

        return;
    }
}