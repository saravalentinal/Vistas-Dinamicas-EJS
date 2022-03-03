const express = require('express');
const app = express();
const path = require('path');
const mainRoutes = require('./routes/mainRouter');


app.use(express.static('public'));
app.use(mainRoutes);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'./views'));
app.use("/", mainRoutes);


app.listen(process.env.PORT || 4003, function() {
    console.log('Servidor arriba en el puerto 4003 🤓👌');
});

