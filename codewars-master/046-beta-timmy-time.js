/*
Write a function changeTime which increase or decrease given time. Input param is string in HH:MM format and delta is integere value -1 or 1. Let see some examples:

changeTime('10:00', 1) //return '10:01'
changeTime('10:00', -1) //return '09:59'
changeTime('23:59', 1) //return '00:00'
changeTime('00:00', -1) //return '23:59'
*/

function changeTime(input, delta) {
  if (input == '00:00' && delta < 0) input = '24:00';
  const mins = +input.slice(0,2) *60 + +input.slice(3,5) + delta;
  const pad = x => (x < 10) ? "0" + x : x;
  const newTime = `${pad(Math.floor(mins/60))}:${pad(mins%60)}`;
  return (newTime == '24:00' ? '00:00' : newTime);
}

console.log(changeTime('10:00',-1));