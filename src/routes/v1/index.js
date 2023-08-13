const experss = require("express");

const TicketController = require("../../controller/ticket-controller");
const router = experss.Router();

router.post("/ticket", TicketController.create);
module.exports = router;
