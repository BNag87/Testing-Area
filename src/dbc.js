// Database Controller

import { sqlite3 } from "sqlite3";

export const TreasureGenerator = () => {
// get the features imported to connect
    const sqlite3 = require("sqlite3").verbose;

    //make the connection...
    let db = new sqlite3.Database(":memory:", (err) => {
        if (err) {
            return console.error(err.message);
        }
        console.log("Connected to in memory SQlite DB!");
    });


    //close the connection..
    db.close((err) => {
        if (err) {
            return console.error(err.message);
        }
    console.log("Closed the DB connection.")
    })
}