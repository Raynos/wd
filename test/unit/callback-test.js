var nock, should, wd;

wd = require('../common/wd-with-cov');

nock = require('nock');

should = require('should');

describe("wd", function() {
  return describe("unit", function() {
    return describe("callback tests", function() {
      var server;
      server = null;
      before(function(done) {
        server = nock('http://127.0.0.1:5555').filteringRequestBody(/.*/, '*');
        if (process.env.WD_COV === null) {
          server.log(console.log);
        }
        server.post('/wd/hub/session', '*').reply(303, "OK", {
          'Location': '/wd/hub/session/1234'
        });
        return done(null);
      });
      return describe("simplecallback empty returns", function() {
        var browser;
        browser = null;
        describe("browser initialization", function() {
          return it("should initialize browser", function(done) {
            browser = wd.remote({
              port: 5555
            });
            return browser.init({}, function(err) {
              should.not.exist(err);
              return done(null);
            });
          });
        });
        describe("simplecallback with empty return", function() {
          return it("should get url", function(done) {
            server.post('/wd/hub/session/1234/url', '*').reply(200, "");
            return browser.get("www.google.com", function(err) {
              should.not.exist(err);
              return done(null);
            });
          });
        });
        describe("simplecallback with 200 OK", function() {
          return it("should get url", function(done) {
            server.post('/wd/hub/session/1234/url', '*').reply(200, "OK");
            return browser.get("www.google.com", function(err) {
              should.not.exist(err);
              return done(null);
            });
          });
        });
        return describe("simplecallback with empty JSON data", function() {
          return it("should get url", function(done) {
            server.post('/wd/hub/session/1234/url', '*').reply(200, '{"sessionId":"1234","status":0,"value":{}}');
            return browser.get("www.google.com", function(err) {
              should.not.exist(err);
              return done(null);
            });
          });
        });
      });
    });
  });
});
