import { Box } from "@mui/material";
import MonthlySummary from "../components/MonthlySummary";
import Calendar from "../components/Calendar";
import TransactionMenu from "../components/TransactionMenu";
import TransactionForm from "../components/TransactionForm";
import { Transaction } from "../types";

interface HomeProps {
    monthlyTransactions: Transaction[];
}

const Home = ({ monthlyTransactions }: HomeProps
) => {
    return (
        <Box sx={{ display: "flex" }}>
            {/* 右側 */}
            <Box sx={{ flexGrow: 1 }}>
                <MonthlySummary monthlyTransactions={monthlyTransactions} />
                <Calendar monthlyTransactions={monthlyTransactions} />
            </Box >
            {/* 右側 */}
            <Box >
                <TransactionMenu />
                <TransactionForm />
            </Box>
        </Box>
    );
}
export default Home;
