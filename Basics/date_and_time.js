// Date object

const date = new Date();

// instance methods
console.log(date); // 2024-02-12T06:35:23.056Z
console.log(date.toString()); // Mon Feb 12 2024 06:35:23 GMT+0000 (Coordinated Universal Time)
console.log(date.toDateString()); // Mon Feb 12 2024
console.log(date.toISOString()); // 2024-02-12T06:39:19.574Z
console.log(date.toLocaleDateString()); // 2/12/2024
console.log(date.toLocaleString()); // 2/12/2024, 6:39:19 AM

console.log(typeof date); // object
console.log(date.toJSON()); // 2024-02-12T06:39:19.574Z
console.log(typeof date.toJSON()); // string

// create date object
let myDate = new Date(2024, 0, 26, 10, 30, 45, 120);
console.log(myDate.toLocaleString()); // 1/26/2024, 10:30:45 AM

myDate = new Date("2009-12-17T03:24:00");
console.log(myDate.toLocaleString()); // 12/17/2009, 3:24:00 AM

console.log(new Date(null)); // 1970-01-01T00:00:00.000Z

//static methods
console.log(Date.now()); // 1707720854834

let newDate = new Date("2024-10-23");
console.log(newDate.toLocaleString()); //10/23/2024, 12:00:00 AM

console.log(Date.parse("2023-01-26")); // 1674691200000

//-----------------------------------

console.log(newDate.getDate()); // 23
console.log(newDate.getDay()); // 3
console.log(newDate.getFullYear()); // 2024

console.log(myDate.getFullYear()); // 2009
console.log(myDate.getHours()); // 3
console.log(myDate.getTime()); // 1261020240000
console.log(myDate.getMonth()); //11
console.log(myDate.getMinutes()); // 24
console.log(myDate.getSeconds()); // 0

//--------------------------------------
const date_f = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

// Request a weekday along with a long date
const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
};

console.log(date_f.toLocaleString("en-US",options)); // Thursday, December 20, 2012

console.log(date_f.toLocaleString("ko-KR",options)); // T2012년 12월 20일 목요일

console.log(date_f.toLocaleString("ar-EG",options)); // الخميس، ٢٠ ديسمبر ٢٠١٢

console.log(date_f.toLocaleString("ja-JP-u-ca-japanese",options)); // 平成24年12月20日木曜日