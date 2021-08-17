//Date

const months = [
    'January' ,	
    'February',	
	'March',	
	'April',		
	'May',	
	'June',
	'July',
	'August	',
	'September',	
	'October',	
	'November',
	'December',
];
const days = [
    'Monday',
    'Tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday',
];
const date= new Date();
//console.log(date);
const month = date.getMonth();
console.log(months[month]);

const day =date.getDay();
console.log(days[day]);

console.log(date.getDate());
console.log(date.getFullYear());

const sentance = `${days[day]},${date.getDate()} , ${months[month]}, ${date.getFullYear()}`;

document.body.innerHTML = sentance; 