const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const blogRoutes = require('./routes/blogRoute');

const app = express();


const dbURI = 'mongodb+srv://netninja:test1234@nodetuts.wbe3x.mongodb.net/node-tuts?retryWrites=true&w=majority';
mongoose.connect(dbURI);



app.set('view engine', 'ejs');
app.set('views', 'view');

app.listen(3000);

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.redirect('/blogs');
});

app.get('/about', (req, res) => {
    res.render('about', {title: 'About'});
})

app.use('/blogs', blogRoutes)

app.use((req, res) => {
    res.render('404', {title: '404'});;
})
