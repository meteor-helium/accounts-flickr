Package.describe({
  name: 'helium:accounts-flickr',
  version: '1.0.0',
  summary: "Login service for Flickr accounts",
  git: 'https://github.com/meteor-helium/accounts-flickr.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use('underscore', ['server']);
  api.use('accounts-base', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('helium:flickr', ['client', 'server']);

  api.use('http', ['client', 'server']);

  api.addFiles('flickr_login_button.css', 'client');

  api.addFiles("flickr.js");
});
