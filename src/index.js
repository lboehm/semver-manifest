#!/usr/bin/env node
const chalk = require('chalk');
const semVer = require('./semVerManifest');
const paramParser = require('./paramParser');

function semVerManifest() {
  console.log(chalk.yellow('>>> semantic versioning manifest.json >>>'));

  try {
    const version = paramParser.parseVersion(process.argv);

    semVer(version);
  } finally {
    console.log(chalk.yellow('<<< semantic versioning manifest.json <<<'));
  }
}

semVerManifest();
// module.exports = semVerManifest;
