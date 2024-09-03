import { Box, Card, CardContent, Grid2, Typography } from "@mui/material";
import { Transaction } from "../types";
import { financeCalculations } from "../utils/financeCalculations";

interface DailySummaryProps {
    dailyTransactions: Transaction[];
}

const DailySummary = ({ dailyTransactions }: DailySummaryProps) => {
    const { income, expence, balance } = financeCalculations(dailyTransactions);
    return (
        <Box>
            <Grid2 container spacing={2}>
                {/* 収入 */}
                <Grid2 size={6} display={"flex"}>
                    <Card
                        sx={{ bgcolor: (theme) => theme.palette.grey[100], flexGrow: 1 }}
                    >
                        <CardContent>
                            <Typography variant="body2" noWrap textAlign="center">
                                収入
                            </Typography>
                            <Typography
                                textAlign="right"
                                fontWeight="fontWeightBold"
                                sx={{ wordBreak: "break-all", color: (theme) => theme.palette.incomeColor.main }}
                            >
                                ¥{income}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid2>
                {/* 支出 */}
                <Grid2 size={6} display={"flex"}>
                    <Card
                        sx={{ bgcolor: (theme) => theme.palette.grey[100], flexGrow: 1 }}
                    >
                        <CardContent>
                            <Typography variant="body2" noWrap textAlign="center">
                                支出
                            </Typography>
                            <Typography
                                textAlign="right"
                                fontWeight="fontWeightBold"
                                sx={{ wordBreak: "break-all", color: (theme) => theme.palette.expenceColor.main }}
                            >
                                ¥{expence}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid2>
                {/* 残高 */}
                <Grid2 size={12} display={"flex"}>
                    <Card
                        sx={{ bgcolor: (theme) => theme.palette.grey[100], flexGrow: 1 }}
                    >
                        <CardContent>
                            <Typography variant="body2" noWrap textAlign="center">
                                残高
                            </Typography>
                            <Typography
                                textAlign="right"
                                fontWeight="fontWeightBold"
                                sx={{ wordBreak: "break-all", color: (theme) => theme.palette.balanceColor.main }}
                            >
                                ¥{balance}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid2>
            </Grid2>
        </Box>
    );
};
export default DailySummary;
