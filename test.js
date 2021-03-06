import chai from 'chai';

// import arrayManipulation from './array_manipulation.js';
// import minimumBribes from './new_year_chaos.js';
// import minimumSwaps from './minimum_swaps.js';
// import checkMagazine from './ransom_note.js';
// import sherlockAndAnagrams from './sherlock_and_anagrams.js';
// import freqQuery from './frequency_queries.js';
import abbreviation from './abbreviation.js';

// import { n, queries, queries2, freq, freqOutput } from './test_data';

const { expect } = chai;

// describe('arrayManipulation()', function() {
//   this.timeout(0)
//   it('should perform all of the array manipulations', () => {
//     expect(arrayManipulation(10,[[1, 5, 3],[4, 8, 7],[6, 9, 1]])).to.equal(10)
//   })
//   it('should complete all of the operations without timing out', () => {
//     expect(arrayManipulation(n, queries)).to.equal(1529508)
//   })
//   it('should complete all of the operations without timing out', () => {
//     expect(arrayManipulation(n, queries2)).to.equal(53897118)
//   })
// })

// describe('new year chaos', function() {
//   it('should find the minimum nunmber of steps for [2, 1, 5, 3, 4]', () => {
//     expect(minimumBribes([2, 1, 5, 3, 4])).to.equal(3)
//   })
//   it('should correctly identify when someone has bribed more than two people [2, 5, 1, 3, 4]', () => {
//     expect(minimumBribes([2, 5, 1, 3, 4])).to.equal('Too chaotic')
//   })
//   it('should find the minimum nunmber of steps for [5, 1, 2, 3, 7, 8, 6, 4]', () => {
//     expect(minimumBribes([5, 1, 2, 3, 7, 8, 6, 4])).to.equal('Too chaotic')
//   })
//   it('should correctly identify when someone has bribed more than two people [1, 2, 5, 3, 7, 8, 6, 4]', () => {
//     expect(minimumBribes([1, 2, 5, 3, 7, 8, 6, 4])).to.equal(7)
//   })
// })

// const swapTests = [
//   { input: [4, 3, 1, 2], output: 3 },
//   { input: [2, 3, 4, 1, 5], output: 3 },
//   { input: [1, 3, 5, 2, 4, 6, 7], output: 3 },
// ]

// describe('minimumSwaps()', function() {
//   for(const { input, output } of swapTests) {
//     it('should find the minum number of swaps to sort this array', () => {
//       expect(minimumSwaps(input)).to.equal(output)
//     })
//   }
// })

// const ransomTests = [
//   { 
//     input: {
//       mag: ['give', 'me', 'one', 'grand', 'today', 'night'],
//       note: ['give', 'one', 'grand', 'today']
//     },
//     output: 'Yes'
//   },{
//     input: { 
//       mag: ['two', 'times', 'three', 'is', 'not', 'four'],
//       note: ['two', 'times', 'two', 'is', 'four']
//     },
//     output: 'No'
//    },
// ]

// describe('checkMagazine()', function() {
//   for(const { input, output } of ransomTests) {
//     it(`should check if the magazine (${input.mag}) can be used for the ransom note (${input.note})`, () => {
//       expect(checkMagazine(input.mag, input.note)).to.equal(output)
//     })
//   }
// })

// const sherlockTests = [
//   { input: 'abba', output: 4},
//   { input: 'abcd', output: 0},
//   { input: 'ifailuhkqq', output: 3},
//   { input: 'kkkk', output: 10},
//   { input: 'cdcd', output: 5},
// ]

// describe('sherlock()', function() {
//   for(const { input, output } of sherlockTests){
//     it(`should correctly count the number of anagrams in ${input}`, () =>  {
//       expect(sherlockAndAnagrams(input)).to.equal(output)
//     })
//   }
// })

// const freqTests = [
//   {input: [[1, 5],[1, 6],[3, 2],[1, 10],[1, 10],[1, 6],[2, 5],[3, 2],],output: ['0','1']},
//   {input: [[3, 4],[2, 1003],[1, 16],[3, 1],],output: ['0','1']},
//   {input: [[1, 3],[2, 3],[3, 2],[1, 4],[1, 5],[1, 5],[1, 4],[3, 2],[2, 4],[3, 2],],output: ['0','1','1']}
// ]

// describe('freqQuery()', function() {
//   for(const { input, output } of freqTests) {
//     it(`should output ${output}`, () => {
//       expect(freqQuery(input)).to.eql(output)
//     })
//   }
//   it('should also work for large inputs', () => {
//     expect(freqQuery(freq)).to.eql(freqOutput)
//   })
// })

const abbrevTests = [
  { a: 'Pi', b: 'P', output: 'YES'},
  { a: 'AfPZN', b: 'APZNC', output: 'NO' },
  { a: 'LDJAN', b: 'LJJM', output:  'NO' },
  { a: 'UMKFW', b: 'UMKFW', output: 'YES' },
  { a: 'KXzQ', b: 'K', output: 'NO' },
  { a: 'LIT', b: 'LIT', output: 'YES' },
  { a: 'QYCH', b: 'QYCH', output: 'YES' },
  { a: 'DFIQG', b: 'DFIQG', output: 'YES' },
  { a: 'sYOCa', b: 'YOCN', output: 'NO' },
  { a: 'JHMWY', b: 'HUVPW', output: 'NO' },
];

describe('should compare all of these strings', () => {
  abbrevTests.forEach(({ a, b, output }) => {
    it(`should return ${output} for a: ${a} and b: ${b} `, () => {
      expect(abbreviation(a, b)).to.equal(output);
    });
  });
});
