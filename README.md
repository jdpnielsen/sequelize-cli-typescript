# Fork

This repository was forked to allow having a compiled folder for migrations and seeders.

By setting up local scripts you are able to compile `.ts` -> `.js` migrations within your Sequelize's configuration folders and run them as usual.

I have extended this functionallity to allow migrating typescript in runtime - meaning you are not required to compile `.ts` down to `.js` anymore. Run your migrations as usual.

Be sure that your Sequelize compiled path for migrations and seeders point to a correct location.

# sequelize/cli [![npm version](https://badge.fury.io/js/sequelize-cli.svg)](https://badge.fury.io/js/sequelize-cli) [![Build Status](https://travis-ci.org/sequelize/cli.svg?branch=master)](https://travis-ci.org/sequelize/cli) [![Greenkeeper badge](https://badges.greenkeeper.io/sequelize/cli.svg)](https://greenkeeper.io/)

The Sequelize Command Line Interface (CLI) _for TypeScript_

## Table of Contents

- [Installation](#installation)
- [Contributing](#contributing)
- [Documentation](#documentation)

## Installation

### Globally
Install CLI globally with

```bash
$ npm install -g sequelize-cli-typescript
```

Now you can run CLI using following command anywhere

```bash
npm install --save-dev sequelize-cli
```

And then you should be able to run the CLI with

```bash
$ npm install --save sequelize-cli-typescript
```

### Usage

```bash
Sequelize CLI [Node: 10.21.0, CLI: 6.0.0, ORM: 6.1.0]

### Differences from Sequelize-Cli _(non-TypeScript)_

With sequelize-cli, the ```model:generate``` command would produce _JavaScript_ files in two folders: 
/models and /migrations, or other folders as specified in your .sequelizerc file.  The ```db:migrate``` 
command would then exe ute these _JavaScript_ files to update your database.

With sequelize-cli-typescript, ```model:generate``` produces _TypeScript_ files in the same two folders
(or again, as specified in your .sequelizerc file).  But before you can run ```db:migrate``` you must
compile your migrations.  (The step of compiling your migrations is left to you.)

You could compile your migrations along with your other code, or as part of a separate script.  After you have compiled
your migrations, then you can run ```db:migrate```.

It's usually the case that the compiled _JavaScript_ code will be put in a different directory than
the source _TypeScript_ code, so whereas sequelize-cli had one ```migrations-path``` setting, 
sequelize-cli-typescript has two: ```migrations-source-path``` and ```migrations-compiled-path```, which
default to /migrations and /migrations/compiled respectively.


### Usage
```
Sequelize CLI [Node: 6.11.2, CLI: 3.0.0, ORM: 4.8.0]

Commands:
  sequelize db:migrate                        Run pending migrations
  sequelize db:migrate:schema:timestamps:add  Update migration table to have timestamps
  sequelize db:migrate:status                 List the status of all migrations
  sequelize db:migrate:undo                   Reverts a migration
  sequelize db:migrate:undo:all               Revert all migrations ran
  sequelize db:seed                           Run specified seeder
  sequelize db:seed:undo                      Deletes data from the database
  sequelize db:seed:all                       Run every seeder
  sequelize db:seed:undo:all                  Deletes data from the database
  sequelize db:create                         Create database specified by configuration
  sequelize db:drop                           Drop database specified by configuration
  sequelize init                              Initializes project
  sequelize init:config                       Initializes configuration
  sequelize init:migrations                   Initializes migrations
  sequelize init:models                       Initializes models
  sequelize init:seeders                      Initializes seeders
  sequelize migration:generate                Generates a new migration file      [aliases: migration:create]
  sequelize model:generate                    Generates a model and its migration [aliases: model:create]
  sequelize seed:generate                     Generates a new seed file           [aliases: seed:create]

Options:
  --version  Show version number                                                  [boolean]
  --help     Show help                                                            [boolean]

Please specify a command
```

## Contributing

All contributions are accepted as a PR.

- You can file issues by submitting a PR (with test) as a test case.
- Implement new feature by submitting a PR
- Improve documentation by submitting PR to [Sequelize](https://github.com/sequelize/sequelize)

Please read the [contributing guidelines](CONTRIBUTING.md).

## Documentation

- [Migrations Documentation](https://sequelize.org/master/manual/migrations.html)
- [CLI Options](docs/README.md)
- [Frequently Asked Questions](docs/FAQ.md)
