export default class HistogramBin {
	start: number;
	end: number;
	count: number;

	constructor(start: number, end: number, count: number) {
		this.start = start;
		this.end = end;
		this.count = count;
	}
}
