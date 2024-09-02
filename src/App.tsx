import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Report from './pages/Report'
import NoMatch from './pages/NoMatch'
import AppLayout from './components/layout/AppLayout'
import { theme } from './theme/theme'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { useEffect, useState } from 'react'
import { Transaction } from './types/index'
import { collection, getDocs } from "firebase/firestore";
import db from './firebase'
import { formatMonth } from './utils/formatting'

function isFireStoreError(e: unknown): e is { code: string, message: string } {
  return typeof e === "object" && e !== null && "code" in e
}

function App() {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date())

  useEffect(() => {
    const fetchTransaction = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Transaction"))
        const transactionsData = querySnapshot.docs.map((doc) => {
          return {
            ...doc.data(),
            id: doc.id
          } as Transaction
        });
        setTransactions(transactionsData)
      } catch (e) {
        if (isFireStoreError(e)) {
          console.error("Firestore Error", e.code, e.message, e.code)
        } else {
          console.error("Error", e)
        }
      }
    }
    fetchTransaction()
  }, [])
  const monthlyTransactions = transactions.filter((transaction) => {
    return transaction.date.startsWith(formatMonth(currentMonth))
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<AppLayout />} >
            <Route index element={<Home monthlyTransactions={monthlyTransactions} />} />
            <Route path="/report" element={<Report />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App
