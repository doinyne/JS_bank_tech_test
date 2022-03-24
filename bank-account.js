//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


export class BankAccount {
  amount = 0
  isOpen = false
  constructor() {
    
  }

  open() {
    this.isOpen = true
  }

  close() {
    this.isOpen = false
  }

  deposit(value) {
    this.amount = this.amount + value;
  }

  withdraw(value) {
    this.amount = this.amount - value;
  }

  get balance() {
    if (this.isOpen) {
      return this.amount;
    }else {
      throw new ValueError();
    } 
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
