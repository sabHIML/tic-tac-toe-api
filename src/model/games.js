const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema({
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

const GameModel = mongoose.model('game', GameSchema);

module.exports = { GameModel };