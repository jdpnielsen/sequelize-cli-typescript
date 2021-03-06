"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getYArgs;
exports._baseOptions = _baseOptions;
exports._underscoreOption = _underscoreOption;

var _fs = _interopRequireDefault(require("fs"));

var _yargs = _interopRequireDefault(require("yargs"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function loadRCFile(optionsPath) {
  const rcFile = optionsPath || _path.default.resolve(process.cwd(), '.sequelizerc');

  const rcFileResolved = _path.default.resolve(rcFile);

  return _fs.default.existsSync(rcFileResolved) ? JSON.parse(JSON.stringify(require(rcFileResolved))) : {};
}

const args = _yargs.default.help(false).version(false).config(loadRCFile(_yargs.default.argv.optionsPath));

function getYArgs() {
  return args;
}

function _baseOptions(yargs) {
  return yargs.option('env', {
    describe: 'The environment to run the command in',
    default: 'development',
    type: 'string'
  }).option('config', {
    describe: 'The path to the config file',
    type: 'string'
  }).option('options-path', {
    describe: 'The path to a JSON file with additional options',
    type: 'string'
  }).option('migrations-source-path', {
    describe: 'The path to the migrations (source) folder',
    default: 'migrations',
    type: 'string'
  }).option('migrations-compiled-path', {
    describe: 'The path to the migrations (compiled) folder',
    default: 'migrations/compiled',
    type: 'string'
  }).option('seeders-compiled-path', {
    describe: 'The path to the seeders (compiled) folder',
    default: 'seeders/compiled',
    type: 'string'
  }).option('seeders-source-path', {
    describe: 'The path to the seeders (source) folder',
    default: 'seeders',
    type: 'string'
  }).option('models-path', {
    describe: 'The path to the models folder',
    default: 'models',
    type: 'string'
  }).option('url', {
    describe: 'The database connection string to use. Alternative to using --config files',
    type: 'string'
  }).option('debug', {
    describe: 'When available show various debug information',
    default: false,
    type: 'boolean'
  });
}

function _underscoreOption(yargs) {
  return yargs.option('underscored', {
    describe: "Use snake case for the timestamp's attribute names",
    default: false,
    type: 'boolean'
  });
}