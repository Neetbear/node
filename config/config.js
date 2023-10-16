const fs = require('fs');
const toml = require('toml');

const config = toml.parse(fs.readFileSync('./config/config.toml', 'utf-8'));

module.exports = config