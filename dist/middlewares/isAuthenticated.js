"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_shield_1 = require("graphql-shield");
var apollo_server_express_1 = require("apollo-server-express");
var isAuthenticated = graphql_shield_1.rule({ cache: 'contextual' })(function (_, __, _a) {
    var req = _a.req;
    return new apollo_server_express_1.AuthenticationError('You are not authenticated');
});
exports.default = isAuthenticated;
//# sourceMappingURL=isAuthenticated.js.map