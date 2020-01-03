const uuid = require('uuid/v1');

const Account = require('./Account');


class Bank {
    constructor() {
        this._accounts = {}
    }

    createAccount(person) {
        const acc = new Account(uuid(), person, this, 0);
        person.accounts.push(acc);
        this._accounts[acc._id] = acc;
        return acc;
    }

    listAccounts() {
        const accs = [];
        for(k in this._accounts) {
            accs.push(this._accounts[k]);
        }

        return accs;
    }

    getAccountById(id) {
        return this._accounts[id];
    }
}

module.exports = Bank;