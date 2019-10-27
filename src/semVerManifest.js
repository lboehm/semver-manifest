const chalk = require('chalk');
const constants = require('./constants');
const {
  readManifest, readVersion, incrementVersion, updateManifest, writeManifest
} = require('./helper');

function semVerManifest(versionStep) {
  const profile = constants.parameters.profile.ui5;
  const path = profile.manifestPath;

  console.log(chalk.cyan(`Reading manifest '${path}'`));
  let manifest = readManifest(path);


  console.log(chalk.cyan(`Incrementing ${versionStep} version info:`));

  const version = readVersion(manifest, profile.versionPropertyPath);
  console.log(chalk.cyan(`  -> Current version is '${version}'`));

  const newVersionString = incrementVersion(version, versionStep);
  console.log(chalk.cyan(`  -> New version is '${newVersionString}'`));

  manifest = updateManifest(manifest, profile.versionPropertyPath, newVersionString);

  writeManifest(manifest, path);
}

module.exports = semVerManifest;
