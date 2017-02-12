(async function() {
    const Koa = require("koa");
    const Router = require("koa-router");
    const Colour = require("colour");

    const { logger, transformApiResponse } = require("./util");

    let db = await require("./db")();

    const app = new Koa();
    const router = require("./api")(db);

    app.context.log = function (msg) {
        this.state.log.push(msg);
    };
    
    app.use(logger);
    app.use(transformApiResponse);
    app.use(router.routes());
    app.use(router.allowedMethods());

    app.listen(3000);
})();