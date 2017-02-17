class Calculator {

  constructor() {
    this.operand1 = 0;
    this.operand2 = 0;
    this.operator = '';
    this.output = null;
    this.firstOp = true;
  }

  add() {
    return this.operand1 + this.operand2;
  }

  subtract() {
    return this.operand1 - this.operand2;
  }

  multiply() {
    return this.operand1 * this.operand2;
  }

  divide() {
    return this.operand1 / this.operand2;
  }

  evaluate() {
    switch (this.operator) {
      case '+':
        this.output = this.add();
        break;
      case '−':
        this.output = this.subtract();
        break;
      case '×':
        this.output = this.multiply();
        break;
      case '÷':
        this.output = this.divide();
        break;
    }
    return this.output;
  }

  reset() {
    this.operand1 = 0;
    this.operand2 = 0;
    this.operator = '';
    this.firstOp = true;
  }

  resetHard() {
    this.reset();
    this.output = null;
  }
}
