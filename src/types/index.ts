export type TransactionType = "income" | "expence";
export type IncomeCategory = "給料" | "ボーナス" | "お小遣い" | "その他";
export type ExpenceCategory = "食費" | "交通費" | "その他";

export interface Transaction {
    id: string;
    amount: number;
    content: string;
    type: TransactionType;
    category: IncomeCategory | ExpenceCategory;
    date: string;
}

export interface Balance {
    income: number;
    expence: number;
    balance: number;
}

export interface CalendarContent {
    start: string,
    income: string,
    expence: string,
    balance: string
}