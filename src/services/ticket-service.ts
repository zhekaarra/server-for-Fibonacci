import fiboService from './fibo-service';

class TicketService {
  ticketMap: Map<number, number> = new Map();

  getFibonacciFromTicket(ticket: number): number {
    return this.ticketMap.get(ticket);
  }

  addFibonacciForTicket(numberForFibonacci: number): number {
    const key = this.ticketMap.size;
    this.ticketMap.set(key, fiboService.getFibonacci(numberForFibonacci));
    return key;
  }
}
export default new TicketService();
