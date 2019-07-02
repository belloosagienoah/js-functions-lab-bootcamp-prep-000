// write your code below!
function happyHolidays(){
  var string = "Happy holidays!"
  return string
}
happyHolidays()

function happyHolidaysTo(name){
  return `Happy holidays, ${name}!`
}
happyHolidaysTo('Bello Osagie')

function happyHolidaysTo(holiday, name){
  return `Happy ${holiday}, ${name}!`
}
happyHolidayTo('New Year\'s Eve', 'Bello Osagie')

function holidayCountdown(holiday, days){
  return `It's ${days} day until ${holiday}!`
}
holidayCountdown('Independence Day', 20)
