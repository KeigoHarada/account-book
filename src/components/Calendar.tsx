import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import "../calenders.css"
import { DatesSetArg, EventContentArg } from '@fullcalendar/core/index.js'
import { calculateDailyTransaction } from '../utils/financeCalculations'
import { Balance, CalendarContent, Transaction } from '../types'
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction'
import { useTheme } from '@mui/material'
import { isSameMonth } from 'date-fns'

interface CalendarProps {
    monthlyTransactions: Transaction[];
    setCurrentMonth: React.Dispatch<React.SetStateAction<Date>>
    setCurrentDay: React.Dispatch<React.SetStateAction<string>>
    currentDay: string
    today: string
}

const Calendar = ({ monthlyTransactions, setCurrentMonth, setCurrentDay, currentDay, today }: CalendarProps) => {
    const dailyBalances = calculateDailyTransaction(monthlyTransactions)
    const theme = useTheme()
    const createCalendarEvents = (dailyBalances: Record<string, Balance>): CalendarContent[] => {
        return Object.keys(dailyBalances).map((date) => {
            const dailyBalance = dailyBalances[date]
            return {
                start: date,
                income: dailyBalance.income.toString(),
                expence: dailyBalance.expence.toString(),
                balance: dailyBalance.balance.toString()

            }
        })
    }
    const calendarEvents = createCalendarEvents(dailyBalances)

    const renderEventContent = (eventInfo: EventContentArg) => {
        return (
            <div>
                <div className='money' id='event-income'>
                    {eventInfo.event.extendedProps.income}
                </div>
                <div className='money' id='event-expence'>
                    {eventInfo.event.extendedProps.expence}
                </div>
                <div className='money' id='event-balance'>
                    {eventInfo.event.extendedProps.balance}
                </div>
            </div>

        )
    }

    const backgroundEvent = {
        start: currentDay,
        end: currentDay,
        display: 'background',
        color: theme.palette.incomeColor.light
    }

    const hundleDateSet = (dateInfo: DatesSetArg) => {
        const currentMonth = dateInfo.view.currentStart;
        setCurrentMonth(dateInfo.start);
        const todayDate = new Date()
        if (isSameMonth(currentMonth, todayDate)) {
            setCurrentDay(today);
        }
    }

    const hundleDateClick = (dateInfo: DateClickArg) => {
        setCurrentDay(dateInfo.dateStr)
    }

    return (
        <FullCalendar
            locale={"ja"}
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            events={[...calendarEvents, backgroundEvent]}
            eventContent={renderEventContent}
            datesSet={hundleDateSet}
            dateClick={hundleDateClick}
        />
    )
}

export default Calendar