function readPackage(pkg, context) {
  // Allow all packages to run build scripts
  if (pkg.scripts && pkg.scripts.install) {
    context.log('Allowing install script for ' + pkg.name)
  }
  if (pkg.scripts && pkg.scripts.postinstall) {
    context.log('Allowing postinstall script for ' + pkg.name)
  }
  return pkg
}

module.exports = {
  hooks: {
    readPackage
  }
}
