import { Box } from "@mui/material";
import MonthlySummary from "../components/MonthlySummary";
import Calendar from "../components/Calendar";
import TransactionMenu from "../components/TransactionMenu";
import TransactionForm from "../components/TransactionForm";
import { Transaction } from "../types";
import { format } from "date-fns";
import { useState } from "react";

interface HomeProps {
    monthlyTransactions: Transaction[];
    setCurrentMonth: React.Dispatch<React.SetStateAction<Date>>
}

const Home = ({ monthlyTransactions, setCurrentMonth }: HomeProps
) => {
    const today = format(new Date(), "yyyy-MM-dd");
    const [currentDay, setCurrentDay] = useState(today);

    const dailyTransactions = monthlyTransactions.filter((transaction) => {
        return transaction.date.startsWith(currentDay);
    });

    return (
        <Box sx={{ display: "flex" }}>
            {/* 右側 */}
            <Box sx={{ flexGrow: 1 }}>
                <MonthlySummary monthlyTransactions={monthlyTransactions} />
                <Calendar monthlyTransactions={monthlyTransactions} setCurrentMonth={setCurrentMonth} setCurrentDay={setCurrentDay} />
            </Box >
            {/* 右側 */}
            <Box >
                <TransactionMenu dailyTransactions={dailyTransactions} currentDay={currentDay} />
                <TransactionForm />
            </Box>
        </Box>
    );
}
export default Home;
