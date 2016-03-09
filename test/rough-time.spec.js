'use strict';

import RoughTime from '../src/rough-time.js';
import chai from 'chai';

let expect = chai.expect;
let assert = chai.assert;

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
      expect(roughtime.getRoughTime.bind(undefined)).to.throw(Error);
      expect(roughtime.getRoughTime.bind(null)).to.throw(Error);
      expect(roughtime.getRoughTime.bind('bob')).to.throw(Error);
      expect(roughtime.getRoughTime.bind(2345)).to.throw(Error);
      expect(roughtime.getRoughTime.bind(false)).to.throw(Error);
      expect(roughtime.getRoughTime.bind([1, 2, 3, 4])).to.throw(Error);
      expect(roughtime.getRoughTime.bind({
        name: 'Bob'
      })).to.throw(Error);
    });

    it('should default to current time if a time is not entered', () => {
      assert.equal(roughtime.getRoughTime(), roughtime.getRoughTime(new Date()));
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
      assert.equal(roughtime._getHoursString(1), 'one');
      assert.equal(roughtime._getHoursString(13), 'one');
    });

    it('should return "two" when the hour is 2 or 14', () => {
      assert.equal(roughtime._getHoursString(2), 'two');
      assert.equal(roughtime._getHoursString(14), 'two');
    });

    it('should return "three" when the hour is 3 or 15', () => {
      assert.equal(roughtime._getHoursString(3), 'three');
      assert.equal(roughtime._getHoursString(15), 'three');
    });

    it('should return "four" when the hour is 4 or 16', () => {
      assert.equal(roughtime._getHoursString(4), 'four');
      assert.equal(roughtime._getHoursString(16), 'four');
    });

    it('should return "five" when the hour is 5 or 17', () => {
      assert.equal(roughtime._getHoursString(5), 'five');
      assert.equal(roughtime._getHoursString(17), 'five');
    });

    it('should return "six" when the hour is 6 or 18', () => {
      assert.equal(roughtime._getHoursString(6), 'six');
      assert.equal(roughtime._getHoursString(18), 'six');
    });

    it('should return "seven" when the hour is 7 or 19', () => {
      assert.equal(roughtime._getHoursString(7), 'seven');
      assert.equal(roughtime._getHoursString(19), 'seven');
    });

    it('should return "eight" when the hour is 8 or 20', () => {
      assert.equal(roughtime._getHoursString(8), 'eight');
      assert.equal(roughtime._getHoursString(20), 'eight');
    });

    it('should return "nine" when the hour is 9 or 21', () => {
      assert.equal(roughtime._getHoursString(9), 'nine');
      assert.equal(roughtime._getHoursString(21), 'nine');
    });

    it('should return "ten" when the hour is 10 or 22', () => {
      assert.equal(roughtime._getHoursString(10), 'ten');
      assert.equal(roughtime._getHoursString(22), 'ten');
    });

    it('should return "eleven" when the hour is 11 or 23', () => {
      assert.equal(roughtime._getHoursString(11), 'eleven');
      assert.equal(roughtime._getHoursString(23), 'eleven');
    });

    it('should return "twelve" when the hour is 0 or 12', () => {
      assert.equal(roughtime._getHoursString(0), 'twelve');
      assert.equal(roughtime._getHoursString(12), 'twelve');
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
        assert.equal(roughtime._getMinutesSuffix(randomMinute), ' past ');
      });
    }

    for (let i = 0; i < 50; i++) {
      let randomMinute = getRandomInt(35, 59);
      it('should return " to " when minutes is ' + randomMinute, () => {
        assert.equal(roughtime._getMinutesSuffix(randomMinute), ' to ');
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

    it('should return "five" when the minutes is between 5 and 9', () => {
      assert.equal(roughtime._getMinutesString(5), 'five');
      assert.equal(roughtime._getMinutesString(6), 'five');
      assert.equal(roughtime._getMinutesString(7), 'five');
      assert.equal(roughtime._getMinutesString(8), 'five');
      assert.equal(roughtime._getMinutesString(9), 'five');
    });

    it('should return "ten" when the minutes is between 10 and 14', () => {
      assert.equal(roughtime._getMinutesString(10), 'ten');
      assert.equal(roughtime._getMinutesString(11), 'ten');
      assert.equal(roughtime._getMinutesString(12), 'ten');
      assert.equal(roughtime._getMinutesString(13), 'ten');
      assert.equal(roughtime._getMinutesString(14), 'ten');
    });

    it('should return "quarter" when the minutes is between 15 and 19', () => {
      assert.equal(roughtime._getMinutesString(15), 'quarter');
      assert.equal(roughtime._getMinutesString(16), 'quarter');
      assert.equal(roughtime._getMinutesString(17), 'quarter');
      assert.equal(roughtime._getMinutesString(18), 'quarter');
      assert.equal(roughtime._getMinutesString(19), 'quarter');
    });

    it('should return "twenty" when the minutes is between 20 and 24', () => {
      assert.equal(roughtime._getMinutesString(20), 'twenty');
      assert.equal(roughtime._getMinutesString(21), 'twenty');
      assert.equal(roughtime._getMinutesString(22), 'twenty');
      assert.equal(roughtime._getMinutesString(23), 'twenty');
      assert.equal(roughtime._getMinutesString(24), 'twenty');
    });

    it('should return "twenty-five" when the minutes is between 25 and 29', () => {
      assert.equal(roughtime._getMinutesString(25), 'twenty-five');
      assert.equal(roughtime._getMinutesString(26), 'twenty-five');
      assert.equal(roughtime._getMinutesString(27), 'twenty-five');
      assert.equal(roughtime._getMinutesString(28), 'twenty-five');
      assert.equal(roughtime._getMinutesString(29), 'twenty-five');
    });

    it('should return "half" when the minutes is between 30 and 34', () => {
      assert.equal(roughtime._getMinutesString(30), 'half');
      assert.equal(roughtime._getMinutesString(31), 'half');
      assert.equal(roughtime._getMinutesString(32), 'half');
      assert.equal(roughtime._getMinutesString(33), 'half');
      assert.equal(roughtime._getMinutesString(34), 'half');
    });

    it('should return "twenty-five" when the minutes is between 35 and 39', () => {
      assert.equal(roughtime._getMinutesString(35), 'twenty-five');
      assert.equal(roughtime._getMinutesString(36), 'twenty-five');
      assert.equal(roughtime._getMinutesString(37), 'twenty-five');
      assert.equal(roughtime._getMinutesString(38), 'twenty-five');
      assert.equal(roughtime._getMinutesString(39), 'twenty-five');
    });

    it('should return "twenty" when the minutes is between 40 and 44', () => {
      assert.equal(roughtime._getMinutesString(40), 'twenty');
      assert.equal(roughtime._getMinutesString(41), 'twenty');
      assert.equal(roughtime._getMinutesString(42), 'twenty');
      assert.equal(roughtime._getMinutesString(43), 'twenty');
      assert.equal(roughtime._getMinutesString(44), 'twenty');
    });

    it('should return "quarter" when the minutes is between 45 and 49', () => {
      assert.equal(roughtime._getMinutesString(45), 'quarter');
      assert.equal(roughtime._getMinutesString(46), 'quarter');
      assert.equal(roughtime._getMinutesString(47), 'quarter');
      assert.equal(roughtime._getMinutesString(48), 'quarter');
      assert.equal(roughtime._getMinutesString(49), 'quarter');
    });

    it('should return "ten" when the minutes is between 50 and 54', () => {
      assert.equal(roughtime._getMinutesString(50), 'ten');
      assert.equal(roughtime._getMinutesString(51), 'ten');
      assert.equal(roughtime._getMinutesString(52), 'ten');
      assert.equal(roughtime._getMinutesString(53), 'ten');
      assert.equal(roughtime._getMinutesString(54), 'ten');
    });

    it('should return "five" when the minutes is between 55 and 59', () => {
      assert.equal(roughtime._getMinutesString(55), 'five');
      assert.equal(roughtime._getMinutesString(56), 'five');
      assert.equal(roughtime._getMinutesString(57), 'five');
      assert.equal(roughtime._getMinutesString(58), 'five');
      assert.equal(roughtime._getMinutesString(59), 'five');
    });
  });
});
