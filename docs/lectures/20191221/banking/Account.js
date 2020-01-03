class Account {
    constructor(id, owner, bank, balance) {
        this._id = id;
        this._owner = owner;
        this._bank = bank;
        this._balance = balance;
    }

    deposit(person, amount) {
        if (person !== this._owner) return false;
        if (person.cash < amount) return false;

        this._balance = this._balance + amount;
        person.cash = person.cash - amount;

        return true;
    }
}

module.exports = Account;