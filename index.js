const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.port || 5000;

app.use(cors());

const course = require('./data/course.json');


app.get('/', (req, res) => {
    res.send('this is server api')
});


app.get('/course', (req, res) => {
    res.send(course);
});


app.get('/course/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const selectedCourse = course.find(c => c.id === id);
    res.send(selectedCourse)

})

app.listen(port, () => {
    console.log('api running on server site', port)
})