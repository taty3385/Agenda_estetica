
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const routes = require('./routers/rutas');
require('./config/dataBase');

require('dotenv').config();
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
