module.exports.logger = async function (ctx, next) {
    let receivedAt = Date.now();
    await next();
    let processingTime = Date.now() - receivedAt;
    console.log(`Processing Time: ${processingTime}`);
}