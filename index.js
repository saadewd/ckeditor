const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const multiparty = require("multiparty");
var multer = require("multer");
// const MultiPartyMiddleware = multiparty({ uploadDir: './images' });

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "./images");
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + "_" + file.originalname);
    },
});
var upload = multer({ storage: storage });



const port = process.env.PORT || 5000;
const app = express();

app.use(express.json({ extended: false, limit: "10mb" }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.get("/", (req, res) => res.send("API is runing"));
// app.post("/uplaod", MultiPartyMiddleware, (req, res) => {
    // });
    app.post('/upload', upload.array('photos', 12), function (req, res, next) {
          console.log(req);

    // req.files is array of `photos` files
    // req.body will contain the text fields, if there were any
  })
app.listen(port, console.log(`server challing on ${port} `));
