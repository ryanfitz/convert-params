/*
 * convert-params
 * https://github.com/ryanfitz/convert-params
 *
 * Copyright (c) 2013 Ryan Fitzgerald
 * Licensed under the MIT license.
 */

'use strict';

var _ = require('lodash');

module.exports = function (query, queryValidation) {
  return _.reduce(query, function(result, val, key) {
    if(queryValidation[key] && queryValidation[key] && queryValidation[key].convert) {
      result[key] = queryValidation[key].convert(val);
    } else {
      result[key] = val;
    }

    return result;
  }, {});
};
