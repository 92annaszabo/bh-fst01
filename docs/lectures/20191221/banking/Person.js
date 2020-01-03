class Person {
    constructor(id, name, cash) {
        this.id = id;
        this.name = name;
        this.accounts = [];
        this.cash = cash;
    }

    assetSum() {
        return this._accountsSum() + this.cash;
    }

    _accountsSum() {
        let sum = 0;
        this.accounts.forEach(function(acc) {
            sum = sum + acc._balance;
        });

        return sum;
    }

    collect(amount) { 
        let available = 0;
        this.accounts.forEach(acc => available += acc._balance);

        if (available < amount) return false;

        for (let i = 0; i < this.accounts.length; i++) {
            let acc = this.accounts[i];
            if (amount >= acc._balance) {
                this.cash = this.cash + acc._balance;
                amount = amount - acc._balance;
                acc._balance = 0;
                continue;
            }

            this.cash = this.cash + amount;
            acc._balance = acc._balance - amount;

        }

        return true;

    }
}

module.exports = Person;