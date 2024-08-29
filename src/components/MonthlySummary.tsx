import { Card, CardContent, Grid2, Stack, Typography } from '@mui/material'
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import React from 'react'

const MonthlySummary = () => {
    return (
        <Grid2 container >
            <Grid2>
                <Card sx={{ bgcolor: "blue", color: "white", borderRadius: "10px" }}>
                    <CardContent>
                        <Stack direction={"row"}>
                            <KeyboardDoubleArrowUpIcon sx={{ fontSize: "2rem" }} />
                            <Typography variant="h5">収入</Typography>
                        </Stack>
                        <Typography
                            textAlign={"right"}
                            variant="h5"
                            fontWeight={"bold"}
                            sx={{ wordBreak: "break-word" }}>¥100,000</Typography>
                    </CardContent>
                </Card>
            </Grid2>
            <Grid2>
                <Card sx={{ bgcolor: "blue", color: "white", borderRadius: "10px" }}>
                    <CardContent>
                        <Stack direction={"row"}>
                            <KeyboardDoubleArrowUpIcon sx={{ fontSize: "2rem" }} />
                            <Typography variant="h5">収入</Typography>
                        </Stack>
                        <Typography
                            textAlign={"right"}
                            variant="h5"
                            fontWeight={"bold"}
                            sx={{ wordBreak: "break-word" }}>¥100,000</Typography>
                    </CardContent>
                </Card>
            </Grid2>
            <Grid2>
                <Card sx={{ bgcolor: "blue", color: "white", borderRadius: "10px" }}>
                    <CardContent>
                        <Stack direction={"row"}>
                            <KeyboardDoubleArrowUpIcon sx={{ fontSize: "2rem" }} />
                            <Typography variant="h5">収入</Typography>
                        </Stack>
                        <Typography
                            textAlign={"right"}
                            variant="h5"
                            fontWeight={"bold"}
                            sx={{ wordBreak: "break-word" }}>¥100,000</Typography>
                    </CardContent>
                </Card>
            </Grid2>
        </Grid2>


    )
}

export default MonthlySummary