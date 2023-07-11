const express = require("express");
const cors = require('cors');
const moment = require("moment");
const app = express();
const router = express.Router();

router.get("/", (req, res) => {
    const timer = moment().format("YYYY-MM-DD HH:mm:ss");
    console.log({
        "received": timer,
        "agent": req.get('User-Agent')
    });
    res.json({
        "received": timer
    });
});

router.post("/", (req, res) => {
    const timer = moment().format("YYYY-MM-DD HH:mm:ss");
    console.log({
        "received": timer,
        "agent": req.get('User-Agent'),
        "body": req.body
    });
    res.json({
        "received": timer
    });
});

app.use(express.json());
app.use(router);
app.use(cors());

// Export the router
module.exports = app;