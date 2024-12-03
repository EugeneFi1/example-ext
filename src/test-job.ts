import {
    Job, SubscribeJob
} from '@suppa/sdk';


@Job("test-job")
export class TestJob {

    @SubscribeJob()
    async run(): Promise<void> {
        console.log("------------TEST JOB-------")

        return Promise.resolve();
    }
}