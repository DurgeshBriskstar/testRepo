const express = require("express");
const Router = express.Router();

Router.get('/test', async (req, res) => {
    console.log('req', req);
    res.send("done");

})