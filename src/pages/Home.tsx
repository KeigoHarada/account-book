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
    const [isEntryDrawerOpen, setIsEntryDrawerOpen] = useState(false);

    const dailyTransactions = monthlyTransactions.filter((transaction) => {
        return transaction.date.startsWith(currentDay);
    });

    const closeFrom = () => {
        setIsEntryDrawerOpen(!isEntryDrawerOpen);   // トグル処理
    }

    const handleAddTransactionForm = () => {
        setIsEntryDrawerOpen(!isEntryDrawerOpen);   // トグル処理
    }

    return (
        <Box sx={{ display: "flex" }}>
            {/* 左側 */}
            <Box sx={{ flexGrow: 1 }}>
                <MonthlySummary monthlyTransactions={monthlyTransactions} />
                <Calendar monthlyTransactions={monthlyTransactions}
                    setCurrentMonth={setCurrentMonth}
                    setCurrentDay={setCurrentDay}
                    currentDay={currentDay}
                    today={today} />
            </Box >
            {/* 右側 */}
            <Box>
                <TransactionMenu dailyTransactions={dailyTransactions}
                    currentDay={currentDay}
                    handleAddTransactionForm={handleAddTransactionForm} />
                <TransactionForm onCloseForm={closeFrom} isDrawerOpen={isEntryDrawerOpen} />
            </Box>
        </Box>
    );
}
export default Home;
