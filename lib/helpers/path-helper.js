"use strict";

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

var _yargs = _interopRequireDefault(require("../core/yargs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const resolve = require('resolve').sync;

const args = (0, _yargs.default)().argv;

function format(i) {
  return parseInt(i, 10) < 10 ? '0' + i : i;
}

function getCurrentYYYYMMDDHHmms() {
  const date = new Date();
  return [date.getUTCFullYear(), format(date.getUTCMonth() + 1), format(date.getUTCDate()), format(date.getUTCHours()), format(date.getUTCMinutes()), format(date.getUTCSeconds())].join('');
}

module.exports = {
  getPath(type) {
    type = type + 's';

    let result = args[type + 'Path'] || _path.default.resolve(process.cwd(), type);

    if (_path.default.normalize(result) !== _path.default.resolve(result)) {
      // the path is relative
      result = _path.default.resolve(process.cwd(), result);
    }

    return result;
  },

  getFileName(type, name, options) {
    return this.addFileExtension([getCurrentYYYYMMDDHHmms(), name ? name : 'unnamed-' + type].join('-'), options);
  },

  getFileExtension() {
    return 'ts';
  },

  addFileExtension(basename, options) {
    return [basename, this.getFileExtension(options)].join('.');
  },

  // migrations
  getMigrationSourcePath(migrationName) {
    return _path.default.resolve(this.getMigrationsSourcePath(), this.getFileName('migration', migrationName));
  },

  getMigrationCompiledPath(migrationName) {
    return _path.default.resolve(this.getMigrationsCompiledPath(), this.getFileName('migration', migrationName));
  },

  getMigrationsSourcePath() {
    return args.migrationsSourcePath || _path.default.resolve(process.cwd(), 'migrations');
  },

  getMigrationsCompiledPath() {
    return args.migrationsCompiledPath || _path.default.resolve(process.cwd(), 'migrations/compiled');
  },

  // seeders
  getSeederSourcePath(seederName) {
    return _path.default.resolve(this.getSeedersSourcePath(), this.getFileName('seeder', seederName));
  },

  getSeederCompiledPath(seederName) {
    return _path.default.resolve(this.getSeedersCompiledPath(), this.getFileName('seeder', seederName));
  },

  getSeedersSourcePath() {
    return args.seedersSourcePath || _path.default.resolve(process.cwd(), 'seeders');
  },

  getSeedersCompiledPath() {
    return args.seedersCompiledPath || _path.default.resolve(process.cwd(), 'seeders/compiled');
  },

  //
  getSeederPath(seederName) {
    return _path.default.resolve(this.getPath('seeder'), this.getFileName('seeder', seederName));
  },

  getModelsPath() {
    return args.modelsPath || _path.default.resolve(process.cwd(), 'models');
  },

  getModelPath(modelName) {
    return _path.default.resolve(this.getModelsPath(), this.addFileExtension(modelName.toLowerCase()));
  },

  resolve(packageName) {
    let result;

    try {
      result = resolve(packageName, {
        basedir: process.cwd()
      });
      result = require(result);
    } catch (e) {
      try {
        result = require(packageName);
      } catch (err) {// ignore error
      }
    }

    return result;
  },

  existsSync(pathToCheck) {
    if (_fs.default.accessSync) {
      try {
        _fs.default.accessSync(pathToCheck, _fs.default.R_OK);

        return true;
      } catch (e) {
        return false;
      }
    } else {
      return _fs.default.existsSync(pathToCheck);
    }
  }

};