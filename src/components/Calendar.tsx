import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import "../calenders.css"
import { EventContentArg } from '@fullcalendar/core/index.js'
import { calculateDailyTransaction } from '../utils/financeCalculations'
import { Transaction } from '../types'

interface CalendarProps {
    monthlyTransactions: Transaction[];
}
const Calendar = (monthlyTransactions: CalendarProps) => {
    const events = [
        { title: 'event 1', date: '2024-08-01', income: 1000, expence: 500, balance: 500 },
        { title: 'event 2', date: '2024-08-02', income: 2000, expence: 1000, balance: 1000 },
    ]
    const dailyBalance = calculateDailyTransaction(monthlyTransactions)

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

    return (
        <FullCalendar
            locale={"ja"}
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            events={events}
            eventContent={renderEventContent}
        />
    )
}

export default Calendar