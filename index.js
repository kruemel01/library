const Koa = require("koa");
const Router = require("koa-router");
const Colour = require("colour");
let mongoose = require("mongoose");

const { logger, transformApiResponse } = require("./util");

mongoose.connect("mongodb://localhost/library");

mongoose.connection.on("error", (err) => {
    console.log("MongoDB".yellow, "Error ".red, err);
});
mongoose.connection.once("open", () => {
    console.log("MongoDB".yellow, "Connected");
});

const models = require("require-all")({
    dirname: __dirname + "/models",
    filter: /(.+)\.js/,
    recursive: false
});

let frozen = new models.Medium({
    title: "Die Eiskönigin: völlig unverfroren",
    uniformTitle: "Frozen",
    description: "Movie"
});

frozen.save((err, frozen) => {
    if (err) return console.log(err);
});

const app = new Koa();
const router = require("./api")(models);

app.context.log = function (msg) {
    this.state.log.push(msg);
};
    
app.use(logger);
app.use(transformApiResponse);
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);