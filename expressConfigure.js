'use strict';

const cors = require('cors');
const settings = require('ep_etherpad-lite/node/utils/Settings');

exports.expressConfigure = (hookName, app, cb) => {

  var corsOptions = {
    credentials: true,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  };

  if (settings.ep_cors.origin && isValidURL(settings.ep_cors.origin)) {
    corsOptions.origin = settings.ep_cors.origin;
  }  else { console.log("settings.json file does not contain a valid 'origin' setting for ep_cors, which must be a valid URL and not a wildcard or blank.");
  };

  app.app.use(cors(corsOptions));

  cb();
};

function isValidURL(string) {
  var res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
  return (res !== null)
};
