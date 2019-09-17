const Express = require("express");
const BodyParser = require("body-parser");
const cors = require('cors');

const app = Express();

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
app.use(cors());

// routes
const apiRoutes = require("./api-routes");

app.use('/api', apiRoutes);

// Send message for default URL
app.get('/', (req, res) => res.send('Hello Tic Tac Toe'));

// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});
module.exports = app;