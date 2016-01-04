Package.describe({
  name: 'flynn:big-integer',
  version: '0.0.4',
  // Brief, one-line summary of the package.
  summary: 'BigInteger.js wrapper https://github.com/peterolson/BigInteger.js',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/niceilm/meteor-big-integer',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  "big-integer": "1.6.10"
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.addFiles('big-integer.js', 'server');
  api.addFiles('client/BigInteger.js', 'client', {isAsset: true});
  api.export('bigInt', 'server');
});

Package.onTest(function(api) {
  api.use('sanjo:jasmine@0.20.2');
  api.use('velocity:helpers@0.5.0');
  api.use('flynn:big-integer');
  api.addFiles('big-integer-tests.js', 'server');
});
