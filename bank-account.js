//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  amount = 0;
  isOpen = false;
  constructor() {}

  open() {
    if (this.isOpen === true) {
      throw new ValueError();
    }

    this.isOpen = true;
    this.amount = 0;
  }


  close() {
    this.throwIfClosed();
    this.isOpen = false;
  }

  throwIfClosed() {
    if (!this.isOpen) {
      throw new ValueError();
    } 
  }

  deposit(value) {
    this.throwIfClosed()
    this.amount = this.amount + value; 
  }

  withdraw(value) {
    this.throwIfClosed()
    this.amount = this.amount - value; 
  }

  get balance() {
    this.throwIfClosed()
    return this.amount;
  }
};

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
