function negativeMonths(months) {
    const negativeMonths = [];

    for (let i = 0; i < months.length; i++) {
        if (balance(months[i].transactions) < 0) negativeMonths.push(months[i].name);
    }

    return negativeMonths;
}

function balance(transactions) {
    let balance = 0;

    for (let i = 0; i < transactions.length; i++)
        balance += transactions[i];
    
    return balance;
}

module.exports = {negativeMonths};