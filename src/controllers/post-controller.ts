import ticketService from '../services/ticket-service';

export async function getTicket(req, res) {
  const { number } = req.body;

  const ticket = ticketService.addFibonacciForTicket(number);

  res.status(200).send({ ticket });
}

