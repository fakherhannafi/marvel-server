const express = require("express"),
  app = express(),
  config = require("../config.json"),
  checkData = require("./api/webcomAPI").checkData,
  getMarvelData = require("./api/marvelAPI").getMarvelData;

function listen() {
  app.listen(config.port, function() {
    console.log(
      "Attention please! Marvel's Server is now listening on port " +
        config.port
    );
  });
}

function getWelcomePage() {
  app.get("/", function(req, res) {
    res.send(
      "Hello PEAKS, I have made this simple Node Server for you. Actually, it consumes Marvel API in order fetch Data of Super Heroes and put it in a cloud storage. I didn't forget Unit Tests and Doc! "
    );
  });
}

function callMarvelAPI() {
  checkData().then(function(exist) {
    if (!exist) {
      console.log("fetching Data from Marvel API...")
      getMarvelData();
    }
  });
}

module.exports = {
  listen: listen,
  getWelcomePage: getWelcomePage,
  callMarvelAPI: callMarvelAPI
};
