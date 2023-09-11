const express = require('express');
const apiroutes = require('./routes/apiRoutes');
const htmlroutes = require('./routes/htmlRoutes');
const port = process.env.PORT || 3000;

const app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));
app.use(apiroutes);
app.use(htmlroutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
