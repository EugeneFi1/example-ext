import {
    Job, SubscribeJob
} from '@suppa/sdk';


@Job("test-job")
export class TestJob {

    @SubscribeJob()
    run(): void {
        console.log("------------TEST JOB-------")
    }
}