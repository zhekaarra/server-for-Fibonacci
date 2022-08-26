class FiboService {
  private fibo = [0, 1, 1];

  getFibonacci(n) {
    if (n > 1500) {
      return Infinity;
    }
    this.fibo[n] = this.fibo[n] ? this.fibo[n] : this.getFibonacci(n - 1) + this.getFibonacci(n - 2);
    return this.fibo[n];
  }
}

export default new FiboService();
