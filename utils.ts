export class utils {
  calcTime(t, d) {
    let arrStr = t.split(' ');
    let ampm = arrStr[1];
    
    let arrTime = arrStr[0].split(':');

    let hour =  parseInt(arrTime[0]);
    let min = parseInt(arrTime[0]);
    
    let duration = (d/60);
    let durationHour = Math.floor(duration);
    let durationMin = parseInt((duration % 1).toFixed(4)) * 10;
    let calDurationMin = Math.round((durationMin * 60) / 10);

    let toHour = hour + durationHour;
    
    if (toHour > 12) {
      if (ampm == 'AM')
      {
        ampm = 'PM'
      }
      else
      {
        ampm = 'AM'
      }
      if (toHour > 13) {
        toHour-=12;
      }
    }

    return ` t - ${toHour}:${calDurationMin} ${ampm} `;
  }
}