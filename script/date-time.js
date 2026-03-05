let containerOfDateTime = document.getElementById('container-date-time');
function formatDateTimeWithTimeZone(date) {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Oktober', 'November', 'December'];
  const hours12 = date.getHours() % 12 || 12;
  const minutes = date.getMinutes().toString().padStart(2, '0')
  const isAm = date.getHours() < 12 ? 'AM' : 'PM';
  const timeZoneInfo = date.toString().match(/\(.*\)/)[0];
  const gmtOffset = date.toTimeString().match(/GMT[^\s]+/)[0];
  return `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`
  $/* {hours12}:${minutes} ${isAm} ${gmtOffset} ${timeZoneInfo} */

}


const p = document.createElement('p');
p.innerText = formatDateTimeWithTimeZone(new Date())
p.style.fontSize = '14px'
containerOfDateTime.appendChild(p)



