import {
    Job, SubscribeJob
} from '@suppa/sdk';


@Job("test-job")
export class TestJob {

    constructor() {
    }

    @SubscribeJob()
    async run(): Promise<void> {
        console.log("------------TEST JOB-------")
    }
}