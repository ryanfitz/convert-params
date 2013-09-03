'use strict';

var Joi = require('joi'),
    convertParams = require('../index');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports['awesome'] = {
  setUp: function(done) {
    // setup here
    done();
  },
  'convert': function(test) {
    var config = {
      a: Joi.types.Number(),
      b: Joi.types.Boolean(),
      c: Joi.types.String()
    };

    var converted = convertParams({a: '1', b: 'true', c: 'Hello'}, config);
    test.deepEqual(converted, {a: 1, b: true, c: 'Hello'});
    test.done();
  },
};
