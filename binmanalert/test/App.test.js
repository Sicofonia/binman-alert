const assert = require('chai').assert;
const reminder = require('../Model/reminder');

describe('reminder', function() {
  describe('timeOfDay', function() {
    it('should be a property of reminder', function() {
        assert.isNull(reminder.timeOfDay);
    });
  });
  describe('intervalDays', function() {
    it('should be a property of reminder', function() {
        assert.isNull(reminder.intervalDays);
    });
  });
  describe('originalDate', function() {
    it('should be a property of reminder', function() {
        assert.isNull(reminder.originalDate);
    });
  });
});