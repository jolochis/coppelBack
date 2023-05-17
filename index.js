const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const routes = require("./routes/routes");
const connection = require("./database/connection");
const app = express();

//middleware
app.use(helmet());
app.use(express.json());
app.use(cors());
app.use(routes);
connection();
app.listen(3000, () => {
  console.log(`Server running on port:3000`);
});

module.exports = app;
