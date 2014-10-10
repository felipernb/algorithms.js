'use strict';

// String algorithms
module.exports = {
  levenshtein: require('./levenshtein'),
  rabinKarp: require('./rabin_karp'),
  knuthMorrisPratt: require('./knuth_morris_pratt'),
  huffman: require('./huffman'),
  hamming: require('./hamming'),
  longestCommonSubsequence: require(
    './longest_common_subsequence')
};
