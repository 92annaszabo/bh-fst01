var Mocha = require('mocha')

// Instantiate a Mocha instance.
console.log(process.argv);

let dir = process.argv[2];

var mocha = new Mocha();
mocha.addFile(`./docs/${dir}/../test.js`);
mocha.run(function(failures) {
  process.exitCode = failures ? 1 : 0;
});