/* eslint-disable */

console.disableYellowBox = true;

const packageJSON = require('../../package.json');

process.env = {
  ...process.env,
  version: packageJSON.version,
 
};
