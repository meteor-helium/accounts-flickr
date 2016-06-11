Accounts.oauth.registerService('flickr');

if (Meteor.isClient) {
  Meteor.loginWithFlickr = function(options, callback) {
    // support a callback without options
    if (! callback && typeof options === "function") {
      callback = options;
      options = null;
    }

    var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
    Flickr.requestCredential(options, credentialRequestCompleteCallback);
  };
} else {
  var autopublishedFields = _.map(
    Flickr.whitelistedFields.concat(['id', 'username']),
    function (subfield) { return 'services.flickr.' + subfield; });

  Accounts.addAutopublishFields({
    forLoggedInUser: autopublishedFields,
    forOtherUsers: autopublishedFields
  });
}
