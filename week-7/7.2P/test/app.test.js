const chai = require('chai');
const request = require('request');
const expect = chai.expect;

describe("Sum Calculator API (Akhil's variant)", function () {
  const baseUrl = "http://localhost:3000";

  it("returns status 200 for home", function (done) {
    request(baseUrl, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.include("Pets API – Home");
      done();
    });
  });

  it("returns correct sum for valid integers", function (done) {
    request.get(`${baseUrl}/add?a=10&b=5`, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.include("Result: 15");
      done();
    });
  });

  it("returns correct sum for decimals", function (done) {
    request.get(`${baseUrl}/add?a=2.5&b=3.1`, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.include("Result: 5.6");
      done();
    });
  });

  it("handles missing parameters", function (done) {
    request.get(`${baseUrl}/add?a=10`, function (error, response, body) {
      expect(response.statusCode).to.equal(400);
      expect(body).to.include("Input must be numeric");
      done();
    });
  });

  it("returns error for non-numeric input", function (done) {
    request.get(`${baseUrl}/add?a=hello&b=world`, function (error, response, body) {
      expect(response.statusCode).to.equal(400);
      expect(body).to.include("Input must be numeric");
      done();
    });
  });
});
