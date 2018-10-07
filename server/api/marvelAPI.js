const request = require("request"),
  config = require("../../config.json"),
  setDataWebcom = require("./webcomAPI").setData;

function _constructURI() {
  return (
    config.marvel_host +
    "?ts=" +
    config.ts +
    "&apikey=" +
    config.public_key +
    "&hash=" +
    config.hash
  );
}
function getMarvelData() {
  return new Promise(function(resolve, reject) {
    request(_constructURI(), function(error, response, body) {
      if (error) {
        console.log("error:", error);
        console.log("statusCode:", response && response.statusCode);
      } else {
        let bodyToJson = JSON.parse(body);
        resolve(bodyToJson);
        setDataWebcom(bodyToJson);
      }
    });
  });
}

module.exports = {
  getMarvelData: getMarvelData,
  _constructURI: _constructURI
};
