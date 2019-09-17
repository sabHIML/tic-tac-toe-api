const router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to Tic Tac Toe API!',
    });
});
// Import  controller
const gameController = require('./controller/gameController');

router.route('/game')
    .post(gameController.post);
router.route('/game/:id')
    .get(gameController.get)
    .put(gameController.update);

module.exports = router;