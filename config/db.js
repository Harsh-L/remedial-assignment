const mongoose = require('mongoose');
function connect(){
    try {
        const db = mongoose.connect(process.env.DB_URL);
        console.log('DB Connected');
    } catch (error) {
        console.error("error :" + error);
        process.exit(0);
    }
}

module.exports = connect();