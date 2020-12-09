//время и дата
function getRussianWeek (day){
	switch(day){
		case 0:
			return 'ВОСКРЕСЕНЬЕ';
		case 1:
			return 'ПОНЕДЕЛЬНИК';
		case 2:
			return'ВТОРНИК';
		case 3:
			return'СРЕДА';
		case 4:
			return'ЧЕТВЕРГ';
		case 5:
			return'ПЯТНИЦА';		
		case 6:
			return'СУББОТА';	
	}
}


let timerId = setInterval(function()  {
  var date = new Date();
 
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let d = date.getDay();
  s++;
 
  if( s >= 60 ){
    s = 0;
    m++;
  }
 
  if( m >= 60 ){
    m = 0;
    h++;
  }
 
  if(h >= 24){
    h = 0;
  }
 
  s < 10 ? s = "0" + s : s;
  m < 10 ? m = "0" + m : m;
  h < 10 ? h = "0" + h : h;
 
  node.innerHTML = h + ":" + m + ":" + s + " " + " " + getRussianWeek(d) + " " + date.getFullYear();
}, 1000);

