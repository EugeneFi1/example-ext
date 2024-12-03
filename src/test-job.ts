import {
    Job, SubscribeJob
} from '@suppa/sdk';


@Job("test-job")
export class TestJob {

    @SubscribeJob()
    public run(): string {
        console.log("------------TEST JOB-------")

        return "JOB WORKS";
    }
}