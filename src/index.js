const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/serverConfig");
// const cron = require("node-cron");
const ApiRoutes = require("./routes/index");
const { sendBasicEmail } = require("./service/email-service");
const jobs = require("./utils/job");
const setUpAndStartServer = () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", ApiRoutes);

  jobs();
  app.listen(PORT, (req, res) => {
    console.log(`Server started on port ${PORT}`);
  });
};

setUpAndStartServer();
