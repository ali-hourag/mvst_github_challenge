/**
 * 
 * @param date1 format: "2023-10-27"
 * @param date2 format: "2023-10-27"
 * @returns boolean date1 > date2 ? true : false
 */
export function checkLastDate(date1: string, date2: string): boolean {

    let arrayDate1: string[] = date1.split("-");
    let arrayDate2: string[] = date2.split("-");

    let date1Day: number = parseInt(arrayDate1[2]), date1Month: number = parseInt(arrayDate1[1]), date1Year: number = parseInt(arrayDate1[0]);
    let date2Day: number = parseInt(arrayDate2[2]), date2Month: number = parseInt(arrayDate2[1]), date2Year: number = parseInt(arrayDate2[0]);

    let date1Bigger: boolean = false;

    if (date1Year > date2Year) date1Bigger = true;
    else if (date1Year < date2Year) date1Bigger = false;
    else {
        if (date1Month > date2Month) date1Bigger = true;
        else if (date1Month < date2Month) date1Bigger = false;
        else {
            if (date1Day > date2Day) date1Bigger = true;
            else if (date1Day < date2Day) date1Bigger = false;
        }
    }
    return date1Bigger;
}