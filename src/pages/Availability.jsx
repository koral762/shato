import React from 'react';
import { CalendarCmp } from '../cmps/CalendarCmp';


export const Availability = () => {

    return (
        <div className="availability-page">

        <div className="availability-container">
            <CalendarCmp />
            <div className="calender-info">
                <h1>בדיקת זמינות</h1>
                <p>לרשותכם מערכת לבדיקת זמינות לפי תאריך, שימו לב הזמנת החדר מתבצעת ישירות מול נציג בווטסאפ </p>
                <a className="a-icon i-whatsapp whatsapp-calendar " href="https://wa.me/972524499904" target="_blank" rel="noreferrer noopener"><p className="calendar-whatsapp-btn">לשיחת וואטסאפ עם נציג לחץ כאן</p></a>

            </div>
        </div>
        </div>
    )
}
