"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_shield_1 = require("graphql-shield");
var isAuthenticated_1 = __importDefault(require("./isAuthenticated"));
exports.permissions = graphql_shield_1.shield({
    Mutation: {
    // .. TODO
    },
    Query: {
        helloWithAuth: isAuthenticated_1.default
        // .. TODO
    }
});
//# sourceMappingURL=permissions.js.map