import ticketService from '../services/ticket-service';

export async function getFibonacci(req, res) {
  const { ticket } = req.body;

  const fibonacci = ticketService.getFibonacciFromTicket(ticket);

  if (!fibonacci) {
    return res.status(404).json('Ticket not found');
  }

  return res.status(200).send({ number: fibonacci });
}
