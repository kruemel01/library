module.exports.logger = async function (ctx, next) {
    let receivedAt = Date.now();
    await next();
    let processingTime = Date.now() - receivedAt;
    let status = ctx.status === 200 ?
        `${ctx.status} OK`.green
       :`${ctx.status} ERROR`.red;
    console.log(`${ctx.method} `.cyan + ctx.url.grey + " " + status + ` ${processingTime}ms`);
}

module.exports.transformApiResponse = async function (ctx, next) {
    await next();
    if (ctx.url.startsWith("/api/") && !ctx.state.error && ctx.state.response) {
        ctx.body = JSON.stringify(ctx.state.response, null, 4);
        ctx.status = 200;
    } else if (ctx.url.startsWith("/api/") && ctx.state.error) {
        ctx.status = ctx.state.error.status;
        ctx.body = JSON.stringify(ctx.state.error, null, 4);
    } else if (ctx.url.startsWith("/api/")) {
        ctx.status = 404;
        ctx.body = JSON.stringify({
            status: 404,
            message: "Not Found"
        }, null, 4);
    }
}