const constants = require('./constants');


function parseVersion(params) {
  let version = null;
  var i; // eslint-disable-line

  for (i = 0; i < params.length; i += 1) {
    const p = params[i];

    version = constants.parameters.version.find((v) => {
      if (p === v) return v;
      return undefined;
    });

    if (version) break;
  }

  return version;
}

module.exports = {
  parseVersion
};
