# ep_cors

Etherpad plugin to handle CORS when calling the api or embedding a pad within a another web domain.  Allowable domain origin must be specified in settings.json as follows.

## Settings
  "ep_cors" : {
    "origin" : "https://example.com"
  }

# Advanced Settings
ep_cors is written for simpliest configuration.  Advanced configuration options are detailed at https://github.com/expressjs/cors.
