const Sequelize = require("sequelize");
module.exports = async function () {
    let sequelize = new Sequelize("library", "library", "library", {
        host: "localhost",
        dialect: "postgres",
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        }
    });

    let media = sequelize.define("media", {
        title: {
            type: Sequelize.STRING
        }
    });

    await sequelize.sync();

    return {
        sequelize,
        media
    };
}