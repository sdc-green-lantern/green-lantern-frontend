require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const path = require('path');

app.use(cors());
app.use(express.json());

app.use('/products/:id', express.static(path.join(__dirname, '../client/dist/')));

app.use((err, req, res, next) => {
  if (err) {
    console.log(err.message);
    console.log(err.stack);
    res.end('404');
  }
});

const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
  console.log(`Listening at http:/localhost:${PORT}`);
});

// **need to reconfigure webpack and add server script**
