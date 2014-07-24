'use strict';

var directory = '../../../algorithms/string/';
var filename = 'longest_common_subsequence';
var longestCommonSubsequence = require([directory, filename].join('')),
    assert = require('assert');

describe('Longest common subsequence', function () {
  it('should return the proper longest common subsequence', function () {
    assert.equal('', longestCommonSubsequence('', ''));
    assert.equal('', longestCommonSubsequence('', 'aaa'));
    assert.equal('', longestCommonSubsequence('aaa', ''));
    assert.equal('aaa', longestCommonSubsequence('aaa', 'aaa'));
    assert.equal('mjau', longestCommonSubsequence('xmjyauz', 'mzjawxu'));
    assert.equal('hman', longestCommonSubsequence('human', 'chimpanzee'));
  });
});
