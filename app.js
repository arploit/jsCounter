const countdown = () => {

    
        const countDate = new Date('May 21,2021 00:00:00').getTime()
        const currentTime = new Date().getTime()
        const gap =countDate - currentTime;
    if (gap > 0) {
	    const second = 1000;
	    const minute = second * 60;
	    const hour = minute * 60;
	    const day = hour * 24;
	//calculate
	    const textDay = Math.floor(gap / day);
	    const texthour = Math.floor((gap % day) / hour);
	    const textMinute = Math.floor((gap % hour) / minute);
	    const textSecond = Math.floor((gap % minute) / second);

	//update the Html
	    document.querySelector('.day').innerHTML = textDay;
	    document.querySelector('.hour').innerHTML = texthour;
	    document.querySelector('.minute').innerHTML = textMinute;
	    document.querySelector('.second').innerHTML = textSecond;

	//
    } else    document.querySelector('.coming-soon').innerHTML = "we are Live!";
    //console.log(gap)

}

setInterval(countdown, 1000);

