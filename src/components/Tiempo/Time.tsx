import React,{useEffect,useState} from "react";
import dayjs from "dayjs";
import "dayjs/locale/es";

dayjs.locale("es");


export const Time: React.FC = ()=>{
     const [dateTime,setDateTime] = useState(dayjs());

     useEffect(()=>{
        const interval = setInterval(()=>{
            setDateTime(dayjs());
        },1000);
        return ()=> clearInterval(interval);
     },[]);

     //obtener dia y mes
     const formattedDate = dateTime.format("D [de] MMMM");

     const minutesPassed = dateTime.hour() * 60 + dateTime.minute();
     return (
         <section>
               <p>{formattedDate} | {minutesPassed} horas </p>
         </section>
     )
}