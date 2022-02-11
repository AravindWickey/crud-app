var express = require("express");
var router = express.Router();
var response = require('./response')

router.get("/get",response.getResponse);

module.exports = router;
