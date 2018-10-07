let server = require("net").createServer(),
  port = require("../config.json").port;
chaiAssert = require("chai").assert;

describe("Testing server config", () => {
  it("Test the port whether is taken by other connections ", (done) => {
    server.once("error", function(err) {
        chaiAssert.notEqual(err.code, "EADDRINUSE");
    });

    server.once("listening", function() {
      server.close();
    });
    server.listen(port);
    done();
  });

});
