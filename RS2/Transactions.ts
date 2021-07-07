import Account from "./Accounts";
const moment = require("moment");

export default class Transaction {
    date: Date;
    from: Account | undefined;
    to: Account | undefined;
    description: string;
    amount: number;
    constructor(transactionStrings: string[], allAccounts: Map<string, Account>) {
        this.date = moment(transactionStrings[0], "DD/MM/YYYY").toDate();
        this.from = allAccounts.get(transactionStrings[1])
        this.to = allAccounts.get(transactionStrings[2])
        this.description = transactionStrings[3];
        this.amount = Number(transactionStrings[4])
    }
}