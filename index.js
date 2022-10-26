const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.port || 5000;

app.use(cors());

const categories = require('./data/categories.json');
const course = require('./data/course.json');


app.get('/', (req, res) => {
    res.send('this is server api')
});

app.get('/course-categories', (req, res) => {
    res.send(categories);
});

app.get('/course', (req, res) => {
    res.send(course);
});

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const selectedNews = news.find(n => n._id === id);
    res.send(selectedNews);
});

app.listen(port, () => {
    console.log('api running on server site', port)
})