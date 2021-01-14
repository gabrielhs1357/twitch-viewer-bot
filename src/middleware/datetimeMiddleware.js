const getCurrentDateTime = require('../util/getCurrentDateTime');

module.exports = function () {
  originalConsole = console.log;

  console.log = function () {
    var args = [].slice.call(arguments);
    originalConsole.apply(console.log, [getCurrentDateTime()].concat(args));
  };
};
