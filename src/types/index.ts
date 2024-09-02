export type TransactionType = "income" | "expence";
export type IncomeCategory = "salary" | "bonus" | "pocketmoney" | "other";
export type ExpenceCategory = "food" | "book" | "home" | "other";

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