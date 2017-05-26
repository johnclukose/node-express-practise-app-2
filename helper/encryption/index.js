/**
 * @module encrypt
 * A module for encryption using npm module : https://github.com/brix/crypto-js 
 */
'use strict';

/**
 * Module dependencies
 * @private
 */
const SHA256 = require('crypto-js/sha256');

/**
 * @function
 * @name encryptSHA256
 * Encrpt a value using sha 256
 * @param {string} value - parameter to be encrypted
 * @return {string} encrypted value
 */
function encryptSHA256(value) {
    return SHA256(value)
}

/**
 * Module exports.
 * @public
 */
module.exports = encryptSHA256;
