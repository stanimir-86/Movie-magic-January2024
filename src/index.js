const express = require('express');

const configHandlebars = require('./config/configHandlebars.js');
const configExpress = require('./config/configExpress.js')
const routes = require('./routes');

const app = express();
const port = 5000;

configHandlebars(app);
configExpress(app);

app.use(routes);


app.listen(port, () => console.log(`Server is listening on port ${port}...`));