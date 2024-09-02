import { Transaction, Balance } from "../types/index";

export function financeCalculations(transactions: Transaction[]): Balance {
    return transactions.reduce((acc, transaction) => {
        if (transaction.type === "income") {
            acc.income += transaction.amount;
        } else {
            acc.expence += transaction.amount;
        }
        acc.balance = acc.income - acc.expence;
        return acc;
    }, { income: 0, expence: 0, balance: 0 });
}

// 日付ごとの収支を計算する関数
export function calculateDailyTransaction(transactions: Transaction[]): Record<string, Balance> {
    return transactions.reduce<Record<string, Balance>>((acc, transaction) => {
        const date = transaction.date;
        if (!acc[date]) {
            acc[date] = { income: 0, expence: 0, balance: 0 };
        }
        if (transaction.type === "income") {
            acc[date].income += transaction.amount;
        } else {
            acc[date].expence += transaction.amount;
        }
        acc[date].balance = acc[date].income - acc[date].expence;
        return acc;
    }, {});
}