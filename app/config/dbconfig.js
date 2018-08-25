/* Load modules */
let sqlite3 = require('sqlite3').verbose();

/*
 * Database configuration
 */

/* Load database file (Creates file if not exists) */
let db = new sqlite3.Database('/usr/src/app/local-db/speedtest.db');

/* Init tests tables if it does not exist */
let init = function () {
    db.run("CREATE TABLE if not exists tests (" +
        "id INTEGER PRIMARY KEY AUTOINCREMENT," +
        " server_id integer," +
        " sponsor text," +
        " server_name text," +
        " timestamp text," +
        " distance real," +
        " ping real," +
        " download real," +
        " upload real," +
        " share text," +
        " ip_address text," +
        " api_timestamp text" +
        ")");

};

module.exports = {
    init: init,
    db: db
};

