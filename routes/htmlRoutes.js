const path = require('path');
const app = express();

// Landing page route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Notes page route
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// Add a catch-all route to redirect to the landing page if no matching route is found
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});
