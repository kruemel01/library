const Router = require("koa-router");

module.exports = function (db) {
    const router = new Router({
        prefix: "/api/v1",
    });

    router.get("/", async (ctx) => {
        ctx.state.response = {
            apiVersion: 1
        }
    });

    // Asset endpoint =========================================

    // return all assets
    router.get("/assets", async (ctx) => {});

    // add new asset
    router.post("/assets", async (ctx) => {});

    // return asset with given id
    router.get("/assets/:id", async (ctx) => {});

    // replace asset information
    router.put("/assets/:id", async (ctx) => {})

    // update asset information
    router.patch("/assets/:id", async (ctx) => {})

    // delete asset
    router.delete("/assets/:id", async (ctx) => {});

    // Media endpoint =========================================

    // Return all media items
    router.get("/media", async(ctx) => {});

    // add new media item
    router.post("/media", async (ctx) => {});

    // return media item with given id
    router.get("/media/:id", async (ctx) => {});

    // replace media item information
    router.put("/media/:id", async (ctx) => {})

    // update media item information
    router.patch("/media/:id", async (ctx) => {})

    // delete media item
    router.delete("/media/:id", async (ctx) => {});



    return router;
}