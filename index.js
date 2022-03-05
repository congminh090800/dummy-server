require('dotenv').config();
require('rootpath')();
const config = require("app/config");
const app = require("./server");
app.listen(config.app.port, () => {
    console.log(`🚀 🚀 Server listening or port ${config.app.port}`);
});


