const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const server = express();
const PORT = 7777;
server.use(express.static(__dirname));
server.listen(PORT, () => {
    console.log(`Express server started on port ${PORT}`);
});

server.use(bodyParser.urlencoded({limit: '20mb', extended: true}));
server.use(bodyParser.json({limit: '20mb'}));

const url = "mongodb+srv://artur:MfXOBaJiI9NtZpdw@superheroes.1rgys.mongodb.net/superheroes?retryWrites=true&w=majority";
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});

const Schema = mongoose.Schema;
const HeroSchema = new Schema({
    nickname: String,
    real_name: String,
    origin_description: String,
    superpowers: String,
    catch_phrase: String,
    images: [String]
});

const HeroModel = mongoose.model("Heroes", HeroSchema);

server.use(cors({origin: "*"}));

server.get("/heroes", (req, res) => {
    HeroModel.find({}).then((data) => res.json(data));
});

server.get("/hero/:id", (req, res) => {
    HeroModel.findById(req.params.id).then((data) => res.json(data));
});

server.delete("/hero/:id", (req, res) => {
    HeroModel.findByIdAndDelete(req.params.id).then((data) => res.json(data));
});

server.patch("/hero/:id", (req, res) => {
    HeroModel.findByIdAndUpdate(req.params.id, {
        nickname: req.body.nicknameInput,
        real_name: req.body.realNameInput,
        origin_description: req.body.descriptionInput,
        superpowers: req.body.superpowersInput,
        catch_phrase: req.body.catchPhraseInput,
        images: req.body.files
    }).then((data) => res.json(data));
});

server.post("/hero", (req, res) => {
    let newOrder = new HeroModel({
        nickname: req.body.nicknameInput,
        real_name: req.body.realNameInput,
        origin_description: req.body.descriptionInput,
        superpowers: req.body.superpowersInput,
        catch_phrase: req.body.catchPhraseInput,
        images: req.body.files
    });
    newOrder.save((err) => {
        if (err) console.log(err);
    })
});
