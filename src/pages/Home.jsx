import React from 'react';
import { Link } from "react-router-dom";
import { GoogleMapComp } from "../cmps/GoogleMapComp";
import { CarouselUI } from "../cmps/CarouselUI";
import { useRef } from 'react';
import { useEffect } from 'react';
import { Footer } from '../cmps/Footer';

export const Home = () => {



    useEffect(() => {


    }, [])

    const infoRef = useRef();

    const scrollToInfo = () => {

        infoRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });

    }


    return (

        <div className="home">
            <div className="kinert-img"></div>
            <div className="gallery-and-information">
                <CarouselUI />
                <div className="logo-container"></div>
                <div className="information">

                    <p className="welcome">ברוכים הבאים לסוויטות שאטו כינרת טבריה</p>
                    <tr></tr>
                    <tr></tr>
                    הסוויטות בטבריה נחשבות לפינת קסם על צלע ההר ומציעות נוף מהפנט של הכנרת והרי הגולן.
                    בואו ליהנות באחת מהסוויטות המפנקות והמאובזרות שלנו - להתרווח לאחור, לשאוף אוויר צפוני צלול, ולתת לטבע ולאירוח האיכותי שלנו לעשות את שלו
                    <button className="more-info" onClick={() => scrollToInfo()}>לפרטים נוספים</button>

                </div>

            </div>

            <Footer />

            <div className="map-container">

                <div className="map">

                    <GoogleMapComp
                        containerElement={<div style={{ height: `300px` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                    />
                </div>

                <div className="map-information">
                    <h1 ref={infoRef} id='info'>קצת עלינו</h1>
                    <p style={{ direction: "rtl" }}>

                        סוויטות שאטו כינרת, ממוקמות על צלע ההר המשקיף לנופה המרהיב של הכנרת והרי הגולן.
                    </p>
                    אם אתם מתכננים נופש בטבריה, אין לכם מה להתלבט, סוויטות שאטו כינרת הינו מקום המציע את כל הטובשיש בצפון, בשילוב אירוח חם ומסור כיד המלך.
                    <tr></tr>
                    <tr></tr>
                    <p>

                        מתכננים טיול עם המשפחה? במלון תוכלו למצוא חדרים מרווחים המתאימים עד ל11 אנשים – בנוסף ניתן למצוא במלון גם חדרים עם דלת מקשרת.

                        תוכלו לבחור בין סוויטת הקלאסיק שלנו או להתפנק בסוויטות הסופריור המשודרגים.
                    </p>
                    <tr></tr>
                    <p>
                        ומה עם האוכל? המטבח שלנו מאובזר עד לפריט האחרון

                        לרשותכם מטבח הצופה לכנרת ומחכים לכם עם מיטב הכלים להכנת ארוחה ממש כמו בבית•

                        אצלנו תוכלו להנות גם ממסעדות הממוקמות בקירבת הסוויטות להשלמת החוויה
                    </p>

                    <p>
                        <span style={{ textDecoration: "underline" }}>זמני קבלה/יציאה:</span>
                        <tr></tr>
                        <tr></tr>
                        <p>Check-In: 03:00 PM</p>
                        <p>Check-Out: 12:00 PM</p>
                    </p>

                </div>
            </div>
        </div>
    );
}


