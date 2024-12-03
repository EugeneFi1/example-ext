import {
    Job, SubscribeJob
} from '@suppa/sdk';


@Job("test-job-1")
export class TestJobFirst {

    @SubscribeJob()
    public run(): string {
        console.log("------------TEST JOB 1-------")

        return "JOB WORKS";
    }
}