import { createTheme, PaletteColor, PaletteColorOptions } from "@mui/material";
import { red, blue, green } from "@mui/material/colors";

declare module '@mui/material/styles' {
    interface Palette {
        incomeColor: PaletteColor;
        expenceColor: PaletteColor;
        balanceColor: PaletteColor;
    }
    interface PaletteOptions {
        incomeColor?: PaletteColorOptions;
        expenceColor?: PaletteColorOptions;
        balanceColor?: PaletteColorOptions;
    }
}

export const theme = createTheme({
    typography: {
        fontFamily: "noto-sans-jp, roboto, helvetica, arial, sans-serif",
        fontWeightMedium: 500,
        fontWeightRegular: 400,
        fontWeightBold: 700,
    },
    palette: {
        incomeColor: {
            main: blue[500],
            light: blue[100],
            dark: blue[700],
        },
        expenceColor: {
            main: red[500],
            light: red[100],
            dark: red[700],
        },
        balanceColor: {
            main: green[500],
            light: green[100],
            dark: green[700],
        },

    }
});