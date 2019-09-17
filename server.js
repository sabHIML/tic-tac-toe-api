const app = require('./src/app.js');
const db = require('./src/db/index.js');

const PORT = process.env.PORT || 1111;

db.connect()
    .then(() => {
        app.listen(PORT, () => {
            console.log('Listening on port: ' + PORT);
        });
    });