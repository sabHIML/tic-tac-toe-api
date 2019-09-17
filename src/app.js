const Express = require("express");
const BodyParser = require("body-parser");
const cors = require('cors');

const port = 1111;

var app = Express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
app.use(cors());
// database connection
const Mongoose = require("mongoose");
Mongoose.connect('mongodb://mongodb:27017/tictactoe', { useNewUrlParser: true, useUnifiedTopology: true});

// database model
const GameModel = Mongoose.model("game", {
    board: {
        type: Object,
        required: true
    },
    player: {
        type: Number,
        required: true
    },
    moves: {
        type: Object,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});

// Send message for default URL
app.get('/', (req, res) => res.send('Hello Tic Tac Toe'));

app.post("/game", async (request, response) => {
    try {
        console.log(request.body);
        console.log('post');
        var game = new GameModel({
            board : request.body.board,
            player : request.body.player,
            moves : request.body.moves
        });
        var result = await game.save();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});

app.get("/game/:id", async (request, response) => {
    try {
        var game = await GameModel.findById(request.params.id).exec();
        response.send(game);
    } catch (error) {
        response.status(500).send(error);
    }
});


app.put("/game/:id", async (request, response) => {
    try {
        console.log(request.body);
        console.log('put');
        var game = await GameModel.findById(request.params.id).exec();
        game.set({
            board : request.body.board,
            player : request.body.player,
            moves : request.body.moves
        });
        var result = await game.save();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});

app.listen(port, () => {
    console.log("Listening at :1111...");
});