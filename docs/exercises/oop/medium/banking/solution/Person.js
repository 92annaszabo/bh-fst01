class Person {
    constructor(cash, accounts) {
        if (cash < 0) throw new Error('cash must not be negative')
        this._cash = cash || 0;
        this._accounts = accounts || [];
    }

    cash() {
        return this._cash;
    }

    useCash(amount) {
        if (amount > this._cash) return;        
        this._cash -= amount;
    }

    receiveCash(amount) {
        this._cash += amount;
    }

    totalAssets() {
        return this._cash + this._accountsValue();
    }

    _accountsValue() {
        if (!this._accounts.length) return 0;

        let sum = 0;
        for(let i = 0; i < this._accounts.length; i++) {
            sum += this._accounts[i].balance();
        }

        return sum;
    }
}

module.exports = Person;