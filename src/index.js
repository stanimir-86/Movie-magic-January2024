const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');


const app = express();
const port = 5000;

app.engine('hbs', handlebars.engine({
    extname: 'hbs',
}));
app.set('view engine',)
app.set('views', path.join(__dirname, 'views'))
app.get('/', (req, res) => {
    res.send('Home page');
});

app.listen(port, () => console.log(`Server is listening on port ${port}...`));