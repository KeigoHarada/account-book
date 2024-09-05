import React from 'react'
import FastfoodIcon from '@mui/icons-material/Fastfood';
import NotesIcon from '@mui/icons-material/Notes';
import { ExpenceCategory, IncomeCategory } from '../../types';

const IconComponents: Record<IncomeCategory | ExpenceCategory, JSX.Element> = {
    食費: <FastfoodIcon />,
    交通費: <NotesIcon />,
    その他: <NotesIcon />,
    給料: <NotesIcon />,
    ボーナス: <NotesIcon />,
    お小遣い: <NotesIcon />
};
export default IconComponents;