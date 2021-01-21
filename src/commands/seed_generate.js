import { _baseOptions } from '../core/yargs';

import helpers from '../helpers';
import fs from 'fs';
import clc from 'cli-color';

exports.builder = (yargs) =>
  _baseOptions(yargs).option('name', {
    describe: 'Defines the name of the seed',
    type: 'string',
    demandOption: true,
  }).argv;

exports.handler = function (args) {
  helpers.init.createSeedersFolder();

  fs.writeFileSync(
    helpers.path.getSeederSourcePath(args.name),
    helpers.template.render(
      'seeders/skeleton.ts',
      {},
      {
        beautify: false,
      }
    )
  );

  helpers.view.log(
    'New seed was created at',
    clc.blueBright(helpers.path.getSeederSourcePath(args.name)),
    '.'
  );

  process.exit(0);
};
