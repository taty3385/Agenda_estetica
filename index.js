const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routers/rutas');
 require('./config/dataBase');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use('/api', routes);

app.use(cors());
app.use(bodyParser.json());


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
