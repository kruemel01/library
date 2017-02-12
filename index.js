const Koa = require("koa");
const Router = require("koa-router");
const Colour = require("colour");

const { logger } = require("./util");

const app = new Koa();
const router = require("./api");

app.use(logger);
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);
