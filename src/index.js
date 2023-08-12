const express = require("express");
const bodyparser = require("body-parser");

const { PORT } = require("./config/serverConfig");

const setUpAndStartServer = () => {
  const app = express();
  app.use(bodyparser.json);
  app.use(bodyparser.urlencoded({ extended: true }));

  app.listen(PORT, (req, res) => {
    console.log(`Server started on port ${PORT}`);
  });
};

setUpAndStartServer();
