var nAry = require('./nAry');

/**
 * Wraps a function of any arity (including nullary) in a function that accepts exactly 2
 * parameters. Any extraneous parameters will not be passed to the supplied function.
 *
 * @static
 * @memberOf R
 * @category Function
 * @param {Function} fn The function to wrap.
 * @return {Function} A new function wrapping `fn`. The new function is guaranteed to be of
 *         arity 2.
 * @example
 *
 *      var takesThreeArgs = function(a, b, c) {
 *        return [a, b, c];
 *      };
 *      takesThreeArgs.length; //=> 3
 *      takesThreeArgs(1, 2, 3); //=> [1, 2, 3]
 *
 *      var takesTwoArgs = ramda.binary(1, takesThreeArgs);
 *      takesTwoArgs.length; //=> 2
 *      // Only 2 arguments are passed to the wrapped function
 *      takesTwoArgs(1, 2, 3); //=> [1, 2, undefined]
 */

var binary = function _binary(fn) {
    return nAry(2, fn);
};

module.exports = binary;