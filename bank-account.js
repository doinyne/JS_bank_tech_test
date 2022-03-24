//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  amount = 0
  constructor() {
    
  }

  open() {
    
  }

  close() {
    throw new Error('Remove this statement and implement this function');
  }

  deposit(value) {
    this.amount = this.amount + value;
  }

  withdraw() {
    throw new Error('Remove this statement and implement this function');
  }

  get balance() {
    return this.amount
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
