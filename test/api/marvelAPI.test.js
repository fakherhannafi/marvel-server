  chai = require("chai"),
  chaiHttp = require("chai-http"),
  config = require("../../config.json"),
  static_res = require("../../res.json");

chai.use(chaiHttp);
describe("I am going to test the API Marvel ", () => {
  test(" Verify the http status 200 and body attributes ", done => {
    //given
    chai
      .request(config.marvel_host)
      .get("")
      .query({ ts: config.ts, apikey: config.public_key, hash: config.hash }) // /?ts=1&apikey=abdc&hash=1abcdA
      .end(function(err, res) {
        //console.log(res);
        chai.assert.isNull(err);
        chai.expect(res).to.have.status(200);
        chai.assert.hasAllKeys(res.body, Object.keys(static_res));
        done();
      });
  });
});
