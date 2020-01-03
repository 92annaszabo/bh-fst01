class Account {
    constructor(initialDeposit) {

        if (initialDeposit < 0) throw new Error('initialDeposit cannot be negative');

        this._transactions = initialDeposit? [initialDeposit] : [];
    }

    balance() {
        let balance = 0;

        for(let i = 0; i < this._transactions.length; i++) {
            balance += this._transactions[i];
        }

        return balance;
    }

    deposit(amount, person) {
        if (amount <= 0) throw new Error('amount must be positive');
        if (person.cash() < amount) return;

        person.useCash(amount);
        this._transactions.push(amount);
    }

    withdraw(amount, person) {
        if (amount <= 0) throw new Error('amount must be positive');
        if (amount > this.balance()) return;

        person.receiveCash(amount);
        this._transactions.push(-amount);
    }

    transfer(amount, toAccount) {
        if (amount <= 0) throw new Error('amount must be positive');
        if (!(toAccount instanceof Account)) throw new Error('toAccount must be instance of Account');
        if (this.balance() < amount) return;

        this._transactions.push(-amount);
        toAccount._transactions.push(amount);

    }
}

module.exports = Account;