'use strict';

import RoughTime from '../src/rough-time.js';
import chai from 'chai';

let expect = chai.expect;

describe('RoughTime (unit)', () => {
  describe('when instantiated', () => {
    let roughtime = new RoughTime();
    it('should return an Object', () => {
      expect(roughtime).to.be.an('object');
    });
  });

  describe('getRoughTime', () => {
    let roughtime = new RoughTime();
    it('should be a Function', () => {
      expect(roughtime.getRoughTime).to.be.a('function');
    });

    it('should return a String', () => {
      expect(roughtime.getRoughTime()).to.be.a('string');
    });

    it('should throw an error if the argument is not a Date object', () => {
      expect(() => roughtime.getRoughTime(null)).to.throw('Date must be a JavaScript Date Object');
      expect(() => roughtime.getRoughTime('bob')).to.throw('Date must be a JavaScript Date Object');
      expect(() => roughtime.getRoughTime(2345)).to.throw('Date must be a JavaScript Date Object');
      expect(() => roughtime.getRoughTime(false)).to.throw('Date must be a JavaScript Date Object');
      expect(() => roughtime.getRoughTime([1, 2, 3, 4])).to.throw('Date must be a JavaScript Date Object');
      expect(() => roughtime.getRoughTime({
        name: 'Bob'
      })).to.throw('Date must be a JavaScript Date Object');
    });

    it('should default to current time if a time is not entered', () => {
      expect(roughtime.getRoughTime()).to.equal(roughtime.getRoughTime(new Date()));
    });

    it('should return "o clock" when minutes is 0', () => {
      const fixedDate = new Date(1504836000);
      expect(roughtime.getRoughTime(fixedDate)).to.equal('it is ten o\'clock');
    });
  });

  describe('_getHoursString', () => {
    let roughtime = new RoughTime();
    it('should be a Function', () => {
      expect(roughtime._getHoursString).to.be.a('function');
    });

    it('should return a String', () => {
      expect(roughtime._getHoursString()).to.be.a('string');
    });

    it('should return "one" when the hour is 1 or 13', () => {
      expect(roughtime._getHoursString(1)).to.equal('one');
      expect(roughtime._getHoursString(13)).to.equal('one');
    });

    it('should return "two" when the hour is 2 or 14', () => {
      expect(roughtime._getHoursString(2)).to.equal('two');
      expect(roughtime._getHoursString(14)).to.equal('two');
    });

    it('should return "three" when the hour is 3 or 15', () => {
      expect(roughtime._getHoursString(3)).to.equal('three');
      expect(roughtime._getHoursString(15)).to.equal('three');
    });

    it('should return "four" when the hour is 4 or 16', () => {
      expect(roughtime._getHoursString(4)).to.equal('four');
      expect(roughtime._getHoursString(16)).to.equal('four');
    });

    it('should return "five" when the hour is 5 or 17', () => {
      expect(roughtime._getHoursString(5)).to.equal('five');
      expect(roughtime._getHoursString(17)).to.equal('five');
    });

    it('should return "six" when the hour is 6 or 18', () => {
      expect(roughtime._getHoursString(6)).to.equal('six');
      expect(roughtime._getHoursString(18)).to.equal('six');
    });

    it('should return "seven" when the hour is 7 or 19', () => {
      expect(roughtime._getHoursString(7)).to.equal('seven');
      expect(roughtime._getHoursString(19)).to.equal('seven');
    });

    it('should return "eight" when the hour is 8 or 20', () => {
      expect(roughtime._getHoursString(8)).to.equal('eight');
      expect(roughtime._getHoursString(20)).to.equal('eight');
    });

    it('should return "nine" when the hour is 9 or 21', () => {
      expect(roughtime._getHoursString(9)).to.equal('nine');
      expect(roughtime._getHoursString(21)).to.equal('nine');
    });

    it('should return "ten" when the hour is 10 or 22', () => {
      expect(roughtime._getHoursString(10)).to.equal('ten');
      expect(roughtime._getHoursString(22)).to.equal('ten');
    });

    it('should return "eleven" when the hour is 11 or 23', () => {
      expect(roughtime._getHoursString(11)).to.equal('eleven');
      expect(roughtime._getHoursString(23)).to.equal('eleven');
    });

    it('should return "twelve" when the hour is 0 or 12', () => {
      expect(roughtime._getHoursString(0)).to.equal('twelve');
      expect(roughtime._getHoursString(12)).to.equal('twelve');
    });
  });

  describe('_getMinutesSuffix', () => {
    let roughtime = new RoughTime();
    let getRandomInt = function (min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };

    it('should be a Function', () => {
      expect(roughtime._getMinutesSuffix).to.be.a('function');
    });

    it('should return a String', () => {
      expect(roughtime._getMinutesSuffix()).to.be.a('string');
    });

    for (let i = 0; i < 50; i++) {
      let randomMinute = getRandomInt(1, 34);
      it('should return " past " when minutes is ' + randomMinute, () => {
        expect(roughtime._getMinutesSuffix(randomMinute)).to.equal(' past ');
      });
    }

    for (let i = 0; i < 50; i++) {
      let randomMinute = getRandomInt(35, 59);
      it('should return " to " when minutes is ' + randomMinute, () => {
        expect(roughtime._getMinutesSuffix(randomMinute)).to.equal(' to ');
      });
    }
  });

  describe('_getMinutesString', () => {
    let roughtime = new RoughTime();
    it('should be a Function', () => {
      expect(roughtime._getMinutesString).to.be.a('function');
    });

    it('should return a String', () => {
      expect(roughtime._getMinutesString()).to.be.a('string');
    });

    it('should return "five" when the minutes is between 3 and 7', () => {
      expect(roughtime._getMinutesString(3)).to.equal('five');
      expect(roughtime._getMinutesString(4)).to.equal('five');
      expect(roughtime._getMinutesString(5)).to.equal('five');
      expect(roughtime._getMinutesString(6)).to.equal('five');
      expect(roughtime._getMinutesString(7)).to.equal('five');
    });

    it('should return "ten" when the minutes is between 8 and 12', () => {
      expect(roughtime._getMinutesString(8)).to.equal('ten');
      expect(roughtime._getMinutesString(9)).to.equal('ten');
      expect(roughtime._getMinutesString(10)).to.equal('ten');
      expect(roughtime._getMinutesString(11)).to.equal('ten');
      expect(roughtime._getMinutesString(12)).to.equal('ten');
    });

    it('should return "quarter" when the minutes is between 13 and 17', () => {
      expect(roughtime._getMinutesString(13)).to.equal('quarter');
      expect(roughtime._getMinutesString(14)).to.equal('quarter');
      expect(roughtime._getMinutesString(15)).to.equal('quarter');
      expect(roughtime._getMinutesString(16)).to.equal('quarter');
      expect(roughtime._getMinutesString(17)).to.equal('quarter');
    });

    it('should return "twenty" when the minutes is between 18 and 22', () => {
      expect(roughtime._getMinutesString(18)).to.equal('twenty');
      expect(roughtime._getMinutesString(19)).to.equal('twenty');
      expect(roughtime._getMinutesString(20)).to.equal('twenty');
      expect(roughtime._getMinutesString(21)).to.equal('twenty');
      expect(roughtime._getMinutesString(22)).to.equal('twenty');
    });

    it('should return "twenty-five" when the minutes is between 23 and 27', () => {
      expect(roughtime._getMinutesString(23)).to.equal('twenty-five');
      expect(roughtime._getMinutesString(24)).to.equal('twenty-five');
      expect(roughtime._getMinutesString(25)).to.equal('twenty-five');
      expect(roughtime._getMinutesString(26)).to.equal('twenty-five');
      expect(roughtime._getMinutesString(27)).to.equal('twenty-five');
    });

    it('should return "half" when the minutes is between 28 and 32', () => {
      expect(roughtime._getMinutesString(28)).to.equal('half');
      expect(roughtime._getMinutesString(29)).to.equal('half');
      expect(roughtime._getMinutesString(30)).to.equal('half');
      expect(roughtime._getMinutesString(31)).to.equal('half');
      expect(roughtime._getMinutesString(32)).to.equal('half');
    });

    it('should return "twenty-five" when the minutes is between 33 and 37', () => {
      expect(roughtime._getMinutesString(33)).to.equal('twenty-five');
      expect(roughtime._getMinutesString(34)).to.equal('twenty-five');
      expect(roughtime._getMinutesString(35)).to.equal('twenty-five');
      expect(roughtime._getMinutesString(36)).to.equal('twenty-five');
      expect(roughtime._getMinutesString(37)).to.equal('twenty-five');
    });

    it('should return "twenty" when the minutes is between 38 and 42', () => {
      expect(roughtime._getMinutesString(38)).to.equal('twenty');
      expect(roughtime._getMinutesString(39)).to.equal('twenty');
      expect(roughtime._getMinutesString(40)).to.equal('twenty');
      expect(roughtime._getMinutesString(41)).to.equal('twenty');
      expect(roughtime._getMinutesString(42)).to.equal('twenty');
    });

    it('should return "quarter" when the minutes is between 43 and 47', () => {
      expect(roughtime._getMinutesString(43)).to.equal('quarter');
      expect(roughtime._getMinutesString(44)).to.equal('quarter');
      expect(roughtime._getMinutesString(45)).to.equal('quarter');
      expect(roughtime._getMinutesString(46)).to.equal('quarter');
      expect(roughtime._getMinutesString(47)).to.equal('quarter');
    });

    it('should return "ten" when the minutes is between 48 and 52', () => {
      expect(roughtime._getMinutesString(48)).to.equal('ten');
      expect(roughtime._getMinutesString(49)).to.equal('ten');
      expect(roughtime._getMinutesString(50)).to.equal('ten');
      expect(roughtime._getMinutesString(51)).to.equal('ten');
      expect(roughtime._getMinutesString(52)).to.equal('ten');
    });

    it('should return "five" when the minutes is between 53 and 57', () => {
      expect(roughtime._getMinutesString(53)).to.equal('five');
      expect(roughtime._getMinutesString(54)).to.equal('five');
      expect(roughtime._getMinutesString(55)).to.equal('five');
      expect(roughtime._getMinutesString(56)).to.equal('five');
      expect(roughtime._getMinutesString(57)).to.equal('five');
    });
  });
});
