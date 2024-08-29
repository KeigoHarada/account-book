import { Card, CardContent, Grid2, Stack, Typography } from '@mui/material'
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import React from 'react'

const MonthlySummary = () => {
    return (
        <Grid2 container spacing={{ xs: 1, sm: 2 }}>
            {/* 収入 */}
            < Grid2 size={4} display={"flex"} flexDirection={"column"}>
                <Card sx={{ bgcolor: "blue", color: "white", borderRadius: "10px", flexGrow: 1 }}>
                    <CardContent sx={{ padding: { xs: 1, sm: 2 } }}>
                        <Stack direction={"row"}>
                            <KeyboardDoubleArrowUpIcon sx={{ fontSize: "2rem" }} />
                            <Typography variant="h5">収入</Typography>
                        </Stack>
                        <Typography
                            textAlign={"right"}
                            variant="h5"
                            fontWeight={"bold"}
                            sx={{
                                wordBreak: "break-word",
                                fontSize: { xs: "0.8rem", sm: "1rem", md: "1.2rem" }
                            }}>¥100,000</Typography>
                    </CardContent>
                </Card>
            </Grid2 >

            {/* 支出 */}
            < Grid2 size={4} display={"flex"} flexDirection={"column"}>
                <Card sx={{ bgcolor: "red", color: "white", borderRadius: "10px", flexGrow: 1 }}>
                    <CardContent sx={{ padding: { xs: 1, sm: 2 } }}>
                        <Stack direction={"row"}>
                            <KeyboardDoubleArrowDownIcon sx={{ fontSize: "2rem" }} />
                            <Typography variant="h5">支出</Typography>
                        </Stack>
                        <Typography
                            textAlign={"right"}
                            variant="h5"
                            fontWeight={"bold"}
                            sx={{
                                wordBreak: "break-word",
                                fontSize: { xs: "0.8rem", sm: "1rem", md: "1.2rem" }
                            }}>¥100,000</Typography>
                    </CardContent>
                </Card>
            </Grid2 >

            {/* 残高 */}
            < Grid2 size={4} display={"flex"} flexDirection={"column"}>
                <Card sx={{ bgcolor: "green", color: "white", borderRadius: "10px", flexGrow: 1 }}>
                    <CardContent sx={{ padding: { xs: 1, sm: 2 } }}>
                        <Stack direction={"row"}>
                            <AccountBalanceIcon sx={{ fontSize: "2rem" }} />
                            <Typography variant="h5">残高</Typography>
                        </Stack>
                        <Typography
                            textAlign={"right"}
                            variant="h5"
                            fontWeight={"bold"}
                            sx={{
                                wordBreak: "break-word",
                                fontSize: { xs: "0.8rem", sm: "1rem", md: "1.2rem" }
                            }}>¥100,000</Typography>
                    </CardContent>
                </Card>
            </Grid2 >
        </Grid2 >


    )
}

export default MonthlySummary