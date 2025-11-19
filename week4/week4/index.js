var express = require("express");
var fs = require("fs");
var app = express();

// body-parser middleware
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ------------------ Exercise 1 ------------------
app.get('/', function(req, res) {
    res.send("hello it is my first express application");
});

app.get('/about', function(req, res) {
    res.send("This is basic express application");
});

// dynamic URL parameters
app.get('/users/:userId/books/:bookId', function(req, res) {
    res.send(req.params);
});

// ------------------ Exercise 3: Read JSON file ------------------
app.get('/GetStudents', function(req, res) {
    fs.readFile(__dirname + "/Student.json", "utf8", function(err, data) {
        if (err) {
            return res.json({ status: false, message: "Error reading file" });
        }

        res.json({
            status: true,
            Status_Code: 200,
            requrl: req.url,
            method: req.method,
            studentdata: JSON.parse(data)
        });
    });
});

// ------------------ Search JSON by ID ------------------
app.get('/GetStudentid/:id', function(req, res) {
    fs.readFile(__dirname + "/Student.json", "utf8", function(err, data) {
        if (err) {
            return res.json({ status: false, message: "Error reading file" });
        }

        var students = JSON.parse(data);
        var student = students["Student" + req.params.id];

        if (student) {
            res.json(student);
        } else {
            res.json({
                status: false,
                message: "Student not found",
                Status_Code: 404
            });
        }
    });
});

// ------------------ POST METHOD ------------------
// Load HTML form
app.get('/studentinfo', function(req, res) {
    res.sendFile('StudentInfo.html', { root: __dirname });
});

// Handle form submission
app.post('/submit-data', function(req, res) {
    var name = req.body.firstName + " " + req.body.lastName;
    var Age = req.body.myAge + " Gender: " + req.body.gender;
    var Qual = " Qualification: " + req.body.Qual;

    res.send({
        status: true,
        message: "form Details",
        data: {
            name: name,
            age: Age,
            Qualification: Qual
        }
    });
});

// ------------------ Start Server ------------------
app.listen(5000, function() { 
    console.log("server is running on port 5000");
});

