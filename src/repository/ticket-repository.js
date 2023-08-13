const { NotificationTicket } = require("../models/index");
const { Op } = require("sequelize");
class TicketRepository {
  async create(data) {
    try {
      console.log("data");
      const ticket = await NotificationTicket.create(data);
      return ticket;
    } catch (error) {
      throw error;
    }
  }

  async getAll() {
    try {
      const ticket = await NotificationTicket.findAll();
      return ticket;
    } catch (error) {
      throw error;
    }
  }

  async get(filter) {
    try {
      const tickets = await NotificationTicket.findAll({
        where: {
          status: filter.status,
          notification: {
            [Op.lte]: new Date(),
          },
        },
      });
      return tickets;
    } catch (error) {
      throw error;
    }
  }

  async update(ticketId, data) {
    try {
      console.log("data ", data);
      const tickets = await NotificationTicket.findByPk(ticketId);
      if (data.status) {
        tickets.status = data.status;
      }
      tickets.save();
      return tickets;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = TicketRepository;
