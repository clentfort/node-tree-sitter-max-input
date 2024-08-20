const Parser = require('tree-sitter');
const JavaScript = require('tree-sitter-javascript');

const inputGood = '/'.repeat(Math.pow(2, 15)-1);
const inputBad = inputGood + '/';

const parser = new Parser();
parser.setLanguage(JavaScript);

console.log('Parsing input of length ' + inputGood.length + '...');
parser.parse(inputGood);
console.log('Parsed input with length of ' + inputGood.length + ' successfully!');

console.log()
console.log()

console.log('Parsing input of length ' + (inputBad.length ) + '...');
parser.parse(inputBad + '//');
console.log('Parsed input with length of ' + inputBad.length + ' successfully!');
