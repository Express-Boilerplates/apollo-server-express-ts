"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_express_1 = require("apollo-server-express");
var graphql_middleware_1 = require("graphql-middleware");
var graphql_import_1 = require("graphql-import");
var express_1 = __importDefault(require("express"));
var permissions_1 = require("@middlewares/permissions");
var Mutation_1 = __importDefault(require("@mutations/Mutation"));
var Query_1 = __importDefault(require("@queries/Query"));
// Initialize Express Application
var app = express_1.default();
exports.app = app;
var schema = apollo_server_express_1.makeExecutableSchema({
    typeDefs: graphql_import_1.importSchema(__dirname + '/../gql/typeDefs.graphql'),
    resolvers: { Query: Query_1.default, Mutation: Mutation_1.default }
});
var middlewares = graphql_middleware_1.applyMiddleware(schema, permissions_1.permissions);
var server = new apollo_server_express_1.ApolloServer({
    schema: middlewares,
    context: function (_a) {
        var req = _a.req;
        return ({ req: req });
    }
});
exports.server = server;
// middleware
server.applyMiddleware({ path: '/', app: app });
//# sourceMappingURL=app.js.map