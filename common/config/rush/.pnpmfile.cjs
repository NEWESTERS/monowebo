'use strict';

/**
 * When using the PNPM package manager, you can use pnpmfile.js to workaround
 * dependencies that have mistakes in their package.json file.  (This feature is
 * functionally similar to Yarn's "resolutions".)
 *
 * For details, see the PNPM documentation:
 * https://pnpm.js.org/docs/en/hooks.html
 *
 * IMPORTANT: SINCE THIS FILE CONTAINS EXECUTABLE CODE, MODIFYING IT IS LIKELY TO INVALIDATE
 * ANY CACHED DEPENDENCY ANALYSIS.  After any modification to pnpmfile.js, it's recommended to run
 * "rush update --full" so that PNPM will recalculate all version selections.
 */
module.exports = {
  hooks: {
    readPackage
  }
};

/**
 * This hook is invoked during installation before a package's dependencies
 * are selected.
 * The `packageJson` parameter is the deserialized package.json
 * contents for the package that is about to be installed.
 * The `context` parameter provides a log() function.
 * The return value is the updated object.
 */
function readPackage(packageJson, context) {

  if(packageJson.name === "create-react-context") {
    context.log('Fixed up react peerDependency for create-react-context');
    packageJson.peerDependencies['react'] = '>= 16.0.0'
  }

  if(packageJson.name === "@reach/router") {
    context.log('Fixed up react peerDependency for @reach/router');
    packageJson.peerDependencies['react'] = '>= 16.0.0'
    packageJson.peerDependencies['react-dom'] = '>= 16.0.0'
  }

  if(packageJson.name === "@snowpack/plugin-webpack") {
    context.log('Fixed up webpack-manifest-plugin dependency for @snowpack/plugin-webpack');
    packageJson.dependencies['webpack-manifest-plugin'] = '^4.0.2'
  }
  // // The karma types have a missing dependency on typings from the log4js package.
  // if (packageJson.name === '@types/karma') {
  //  context.log('Fixed up dependencies for @types/karma');
  //  packageJson.dependencies['log4js'] = '0.6.38';
  // }

  return packageJson;
}
