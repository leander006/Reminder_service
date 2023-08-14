const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/serverConfig");

const ApiRoutes = require("./routes/index");

const jobs = require("./utils/job");

const { subscribeMessage, createChannel } = require("./utils/messagequeue");
const EmailService = require("./service/email-service");
const { REMINDER_BINDING_KEY } = require("./config/serverConfig");

const setUpAndStartServer = async () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  const channel = await createChannel();
  subscribeMessage(channel, EmailService.subscribeQueues, REMINDER_BINDING_KEY);
  app.use("/api", ApiRoutes);

  // jobs();
  app.listen(PORT, (req, res) => {
    console.log(`Server started on port ${PORT}`);
  });
};

setUpAndStartServer();
