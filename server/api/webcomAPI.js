let Webcom = require("webcom");
let config = require("../../config.json");

let myRef = new Webcom(config.url_baas);

function setData(data) {
  myRef.set(data, function(error) {
    if (error) {
      console.log("There is a problem in sending Data to Webcom  ...");
    } else {
      console.log("Marvel Data have been sent to Webcom successfully ");
    }
  });
}

function checkData() {
  return new Promise(function(resolve, reject) {
    myRef.once("value", function(snapshot) {
      resolve(snapshot.hasChildren());
    });
  });
  
}

module.exports = {
  setData: setData,
  checkData: checkData
};
