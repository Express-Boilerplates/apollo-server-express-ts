"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
/**
 * Make sure we are running node 7.6+
 */
var _a = process.versions.node.split('.').map(parseFloat), major = _a[0], minor = _a[1];
if (major < 7 || (major === 7 && minor <= 5)) {
    console.log("🛑 🌮 🐶 💪 💩\nHey You! \n\t ya you! \n\t\tBuster! \n\tYou're on an older version of node that doesn't support the latest and greatest things we are learning (Async + Await)! Please go to nodejs.org and download version 7.6 or greater. 👌\n ");
    process.exit();
}
/**
 *  READY?! Let's go! 👌
 */
// Start our app!
var port = process.env.PORT || 4000;
var appUrl = process.env.APP_URL || "http://localhost:" + port;
app_1.app.listen({ port: port }, function () {
    console.log("Server working at : " + appUrl + app_1.server.graphqlPath);
});
//# sourceMappingURL=start.js.map