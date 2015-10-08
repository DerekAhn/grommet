// (C) Copyright 2014-2015 Hewlett-Packard Development Company, L.P.

'use strict';

var Reflux = require('reflux');
var Rest = require('../utils/Rest');

var Actions = Reflux.createActions({
  // Session
  'login': { asyncResult: true },
  'logout': {}
});

Actions.login.listen(function (userName, password) {
  if (!userName || !password) {
    return this.failed(400, { message: 'loginInvalidPassword' });
  }

  var thisAction = this;
  Rest.post('/rest/login-sessions', { authLoginDomain: 'LOCAL', userName: userName, password: password, loginMsgAck: true }).end(function (err, res) {
    if (err || !res.ok) {
      return thisAction.failed(err, res.body);
    }
    thisAction.completed(userName, res.body.sessionID);
  });
});

module.exports = Actions;