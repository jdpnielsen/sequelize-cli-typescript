import fs from 'fs';
import yargs from 'yargs';
import path from 'path';

function loadRCFile(optionsPath) {
  const rcFile = optionsPath || path.resolve(process.cwd(), '.sequelizerc');
  const rcFileResolved = path.resolve(rcFile);
  return fs.existsSync(rcFileResolved)
    ? JSON.parse(JSON.stringify(require(rcFileResolved)))
    : {};
}

const args = yargs
  .help(false)
  .version(false)
  .config(loadRCFile(yargs.argv.optionsPath));

export default function getYArgs() {
  return args;
}

export function _baseOptions(yargs) {
  return yargs
    .option('env', {
      describe: 'The environment to run the command in',
      default: 'development',
      type: 'string',
    })
    .option('config', {
      describe: 'The path to the config file',
      type: 'string',
    })
    .option('options-path', {
      describe: 'The path to a JSON file with additional options',
      type: 'string',
    })
    .option('migrations-source-path', {
      describe: 'The path to the migrations (source) folder',
      default: 'migrations',
      type: 'string',
    })
    .option('migrations-compiled-path', {
      describe: 'The path to the migrations (compiled) folder',
      default: 'migrations/compiled',
      type: 'string'
    })
    .option('seeders-compiled-path', {
      describe: 'The path to the seeders (compiled) folder',
      default: 'seeders/compiled',
      type: 'string'
    })
    .option('seeders-source-path', {
      describe: 'The path to the seeders (source) folder',
      default: 'seeders',
      type: 'string',
    })
    .option('models-path', {
      describe: 'The path to the models folder',
      default: 'models',
      type: 'string',
    })
    .option('url', {
      describe:
        'The database connection string to use. Alternative to using --config files',
      type: 'string',
    })
    .option('debug', {
      describe: 'When available show various debug information',
      default: false,
      type: 'boolean',
    });
}

export function _underscoreOption(yargs) {
  return yargs.option('underscored', {
    describe: "Use snake case for the timestamp's attribute names",
    default: false,
    type: 'boolean',
  });
}
