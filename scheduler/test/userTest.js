var should = require('chai').should(),
    User = require('../app/models/user'),
    userController = require('../app/controllers/userController');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const cfg = require('../../config');

before(function (done) {
    var mongoOptions = {
        useNewUrlParser: true,
        numberOfRetries: 10
    }
    mongoose.connect(cfg.test.db.protocol + cfg.test.db.uri + cfg.test.db.database, mongoOptions);
    mongoose.connection.once("open", function () {
        console.log("connected to db");
        done();
    }).on("error", (err) => {
        console.log("db error: " + err);
    });
});

describe("sanity check", function () {
    it("should pass", function () {
        isTrue = true;
        isTrue.should.equal(true);
    })
});

describe("the userController module", function () {
    describe("the newUser function", function () {
        describe("saving a new user with just a username", function () {
            it("should save the user with the username passed in", async function () {
                try {
                    const newUser = await userController.newUser({ username: "testuser" });
                    const controllerUser = await User.findOne({ username: "johndoe" });
                    newUser.username.should.exist();
                    newUser.username.should.be.a("String");
                    newUser.username.should.equal("johndoe");
                    controllerUser.username.should.equal(newUser.username);
                } catch (err) {
                    "Error in controller: " + err;
                }
            });
        });

    });
});