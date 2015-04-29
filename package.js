Package.describe({
  name: 'billiam:xdsoft-datetimepicker',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'jQuery datetimepicker xdan/datetimepicker',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/billiam13s/xdsoft-datetimepicker',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use('jquery', 'client');

  api.addFiles('lib/datetimepicker/jquery.datetimepicker.js', 'client');
  api.addFiles('lib/datetimepicker/jquery.datetimepicker.css', 'client');
});
