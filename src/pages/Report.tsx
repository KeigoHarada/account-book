import { Box, Typography } from "@mui/material";
import React from "react";

const Report = () => {
    return (
        <div>
            <h1>Report</h1>
            <Typography fontWeight={"bold"}>This is a bold text</Typography>
            <Typography fontWeight={"medium"}>This is a medium text</Typography>
            <Typography fontWeight={"regular"}>This is a regular text</Typography>
            <Box fontWeight={"bold"}>This is a bold box</Box>
        </div>
    );
}
export default Report;