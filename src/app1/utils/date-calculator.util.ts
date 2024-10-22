import moment from 'moment';
import 'moment-business-time';

const START_DAY = '09:00:00';
const END_DAY = '17:00:00';

export class DateCalculator {
	private readonly defaultDuration: number = 8 * 3600;

	private static instance: DateCalculator;

	constructor() {
		const day = [START_DAY, END_DAY];

		moment.updateLocale('en', {
			workinghours: {
				0: null,
				1: day,
				2: day,
				3: day,
				4: day,
				5: day,
				6: null,
			},
			// holidays: [],
			// holidayFormat: 'YYYY-MM-DD',
		});
	}

	calculateDuration(start_date: string, end_date: string): CalculateResult {
		const startMoment = moment.utc(start_date);
		const endMoment = moment.utc(end_date);

		const start = startMoment.isWorkingTime()
			? startMoment
			: startMoment.nextWorkingTime();
		const end = endMoment.isWorkingTime()
			? endMoment
			: endMoment.nextWorkingTime();

		return { start, end, duration: end.workingDiff(start, 'seconds') };
	}

	calculateStartDate(duration: number, end_date: string): CalculateResult {
		duration ??= this.defaultDuration;
		const endMoment = moment.utc(end_date);

		const end = endMoment.isWorkingTime()
			? endMoment
			: endMoment.nextWorkingTime();

		const start = end.clone().subtractWorkingTime(duration, 'seconds');

		return { start, end, duration };
	}

	calculateEndDate(start_date: string, duration: number): CalculateResult {
		duration ??= this.defaultDuration;
		const startMoment = moment.utc(start_date);

		const start = startMoment.isWorkingTime()
			? startMoment
			: startMoment.nextWorkingTime();
		const end = start.clone().addWorkingTime(duration, 'seconds');

		return { start, end, duration };
	}

	static getInstance(): DateCalculator {
		return (this.instance ??= new DateCalculator());
	}
}

export interface CalculateResult {
	start: moment.Moment;
	end: moment.Moment;
	duration: number;
}
