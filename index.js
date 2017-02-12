const Koa = require("koa");
const Router = require("koa-router");

const { logger } = require("./util");

const app = new Koa();
const router = new Router();

router.get("/", async (ctx) => {
    ctx.body = "Hello";
});

app.use(logger);
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);
