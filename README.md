# convert-params

convert query string to desired types

## Getting Started
Install the module with: `npm install convert-params`

```javascript
var convertParams = require('convert-params');
var Joi = require('joi');

var config = {
  a: Joi.types.Number(),
  b: Joi.types.Boolean(),
  c: Joi.types.String()
};

var converted = convertParams({a: '1', b: 'true', c: 'Hello'}, config);
console.log(converted);

// { a: 1, b: true, c: 'Hello' }

```

## Documentation
_(Coming soon)_

## Examples
_(Coming soon)_

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

## License
Copyright (c) 2013 Ryan Fitzgerald  
Licensed under the MIT license.
