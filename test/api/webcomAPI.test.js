let chai = require("chai"),
  chaiHttp = require("chai-http"),
  config = require("../../config.json");

chai.use(chaiHttp);
describe("I am going to test the API webcom ", () => {
  test("testing the API ...", done => {
    //given
    chai
      .request(config.url_baas)
      .get("")
      .end(function(err, res) {
        chai.assert.isNull(err);
        chai.expect(res).to.have.status(200);
        done();
      });
  });
});
