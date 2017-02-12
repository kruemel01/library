module.exports.logger = async function (ctx, next) {
    let receivedAt = Date.now();
    await next();
    let processingTime = Date.now() - receivedAt;
    let status = ctx.status === 200 ?
        `${ctx.status} OK`.green
       :`${ctx.status} ERROR`.red;
    console.log(`${ctx.method} `.cyan + ctx.url.grey + " " + status + ` ${processingTime}ms`);
}

module.exports.transformReturn = async function (ctx, next) {
    await next();
    if (ctx.return) {
        ctx.body = JSON.stringify(ctx.return, null, 4);
    }
}