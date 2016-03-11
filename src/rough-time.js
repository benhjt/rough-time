'use strict';

class RoughTime {
	constructor() {}

	getRoughTime(date = new Date()) {
		if (typeof date !== 'object' || !(date instanceof Date)) {
			throw new Error('Date must be a JavaScript Date Object');
		}

		let roughTimeString = 'it is ';
		let minutes = date.getMinutes();

		if (minutes <= 2) {
			roughTimeString += this._getHoursString(date.getHours());
			roughTimeString += ' o\'clock';
		} else {
			roughTimeString += this._getMinutesString(minutes);
			roughTimeString += this._getMinutesSuffix(minutes);
			roughTimeString += this._getHoursString(date.getHours());
		}

		return roughTimeString;
	}

	_getMinutesString(minutes) {
		if ((minutes >= 3 && minutes <= 7) || (minutes >= 53 && minutes <= 57)) {
			return 'five';
		} else if ((minutes >= 8 && minutes <= 12) || (minutes >= 48 && minutes <= 52)) {
			return 'ten';
		} else if ((minutes >= 13 && minutes <= 17) || (minutes >= 43 && minutes <= 47)) {
			return 'quarter';
		} else if ((minutes >= 18 && minutes <= 22) || (minutes >= 38 && minutes <= 42)) {
			return 'twenty';
		} else if ((minutes >= 23 && minutes <= 27) || (minutes >= 33 && minutes <= 37)) {
			return 'twenty-five';
		} else {
			return 'half';
		}
	}

	_getMinutesSuffix(minutes) {
		if (minutes <= 34) {
			return ' past ';
		} else {
			return ' to ';
		}
	}

	_getHoursString(hours) {
		if (hours === 1 || hours === 13) {
			return 'one';
		} else if (hours === 2 || hours === 14) {
			return 'two';
		} else if (hours === 3 || hours === 15) {
			return 'three';
		} else if (hours === 4 || hours === 16) {
			return 'four';
		} else if (hours === 5 || hours === 17) {
			return 'five';
		} else if (hours === 6 || hours === 18) {
			return 'six';
		} else if (hours === 7 || hours === 19) {
			return 'seven';
		} else if (hours === 8 || hours === 20) {
			return 'eight';
		} else if (hours === 9 || hours === 21) {
			return 'nine';
		} else if (hours === 10 || hours === 22) {
			return 'ten';
		} else if (hours === 11 || hours === 23) {
			return 'eleven';
		} else {
			return 'twelve';
		}
	}
}

export default RoughTime;
