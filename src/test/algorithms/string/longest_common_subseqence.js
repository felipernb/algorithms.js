'use strict';

var lcs = require('../../..').String.longestCommonSubsequence,
    assert = require('assert');

describe('Longest common subsequence', function () {
  it('should return the proper longest common subsequence', function () {
    assert.equal('', lcs('', ''));
    assert.equal('', lcs('', 'aaa'));
    assert.equal('', lcs('aaa', ''));
    assert.equal('aaa', lcs('aaa', 'aaa'));
    assert.equal('mjau', lcs('xmjyauz', 'mzjawxu'));
    assert.equal('hman', lcs('human', 'chimpanzee'));
  });
});
