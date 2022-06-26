var _ = require('underscore');
console.log("Hello world!");


var res = _.map([1, 2, 3], function (num) { return num * 3; });
console.log(res);
