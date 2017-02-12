module.exports.logger = async function (ctx, next) {
    let receivedAt = Date.now();
    await next();
    let processingTime = Date.now() - receivedAt;
    let status = ctx.status === 200 ?
        `${ctx.status} OK`.green
       :`${ctx.status} ERROR`.red;
    console.log(`${ctx.method} `.cyan + ctx.url.grey + " " + status + ` ${processingTime}ms`);
}