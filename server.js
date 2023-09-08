const express = require('express');
const apiroutes = require('./routes/apiRoutes');
const htmlroutes = require('./routes/htmlRoutes');
const PORT = 3001;

const app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));
app.use(apiroutes);
app.use(htmlroutes);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
