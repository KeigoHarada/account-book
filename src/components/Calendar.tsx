import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import "../calenders.css"
import { DatesSetArg, EventContentArg } from '@fullcalendar/core/index.js'
import { calculateDailyTransaction } from '../utils/financeCalculations'
import { Balance, CalendarContent, Transaction } from '../types'

interface CalendarProps {
    monthlyTransactions: Transaction[];
    setCurrentMonth: React.Dispatch<React.SetStateAction<Date>>
}

const Calendar = ({ monthlyTransactions, setCurrentMonth }: CalendarProps) => {
    const dailyBalances = calculateDailyTransaction(monthlyTransactions)

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

    const hundleDateSet = (dateInfo: DatesSetArg) => {
        setCurrentMonth(dateInfo.view.currentStart)
    }

    return (
        <FullCalendar
            locale={"ja"}
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            events={calendarEvents}
            eventContent={renderEventContent}
            datesSet={hundleDateSet}
        />
    )
}

export default Calendar