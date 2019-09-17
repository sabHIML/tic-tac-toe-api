const GameModel = require('../model/games').GameModel;

exports.post = async (request, response) => {
    try {
        const game = new GameModel({
            board : request.body.board,
            player : request.body.player,
            moves : request.body.moves
        });
        const result = await game.save();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
};

exports.get = async (request, response) => {
    try {
        const game = await GameModel.findById(request.params.id).exec();
        response.send(game);
    } catch (error) {
        response.status(500).send(error);
    }
};


exports.update = async (request, response) => {
    try {
        const game = await GameModel.findById(request.params.id).exec();
        game.set({
            board : request.body.board,
            player : request.body.player,
            moves : request.body.moves
        });
        const result = await game.save();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
};