var Couchbase = require("nativescript-couchbase").Couchbase;
var couchbase = new Couchbase();

describe("greet function", function() {
    it("exists", function() {
        expect(couchbase.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(couchbase.greet()).toEqual("Hello, NS");
    });
});