var express = require("express");
var router = express.Router();
var $ = require('jquery');
var multer  = require('multer');
var upload = multer();
var filesize = require('filesize');

/* GET home page. */
router.get("/", function(req, res, next) {
	res.render("index", { title: "File Metadata Service"});
});

// GIVE ME SIZE
router.post("/upload", upload.single('file'), function(req, res, next) {
  	res.json({"size_in_bytes" : req.file.size.toString()+ " B", "formatted_size" : filesize(req.file.size)});
});

module.exports = router;