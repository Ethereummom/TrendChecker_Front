import { format, differenceInDays, parseISO } from 'date-fns';


function parseTimeDataToYYMMDD(timedata){

    const parseDate = format(new Date(timedata), 'yyyy-MM-dd');
    return parseDate;
}

function calculateTimeDifferenceByDate(timedata){
    const timeDiff = differenceInDays(new Date(), parseISO(timedata));
    return timeDiff;
}

function getTodaysTime(){
    const todaysTime = format(new Date(), 'MMM dd, yyyy');
    return todaysTime;
}


export {parseTimeDataToYYMMDD , calculateTimeDifferenceByDate , getTodaysTime};