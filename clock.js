setInterval(showTime, 1000);

function setDynamic()
{
    const mrng = document.getElementById("wake").value;
    const lunchafter = document.getElementById("lunch").value;
    const napTime = document.getElementById("napTime").value;
    const night = document.getElementById("nightTime").value;
    const element = document.getElementById("stats");
    const element2 = document.getElementById("msg");
    const element3 = document.getElementById("picture");

    
    let time = new Date();
    let hour = time.getHours();
    let checkHour = hour;

    if((checkHour >= 12) && (checkHour < 16))
    {
        if((checkHour == lunchafter) && (checkHour <= lunchafter+1))
        {
            element.innerText = "LET'S HAVE SOME LUNCH";
            element.style.marginTop ="8%";
            element.style.textAlign ="center"
            element2.innerHTML = `GOOD&nbspAFTERNOON&nbsp!!&nbspTAKE&nbspSOME&nbspSLEEP`;
            element2.style.textAlign = "center";
            element3.style.background = "transparent url('./img/afternoon.png') 0% 0% no-repeat padding-box";
        }
        else
        {
            element.innerText = "ENJOY THIS AMAZING AFTERNOON";
            element.style.marginTop ="8%";
            element.style.textAlign ="center"
            element2.innerHTML = `GOOD&nbspAFTERNOON&nbsp!!&nbspTAKE&nbspSOME&nbspSLEEP`;
            element2.style.textAlign = "center";
            element3.style.background = "transparent url('./img/afternoon.png') 0% 0% no-repeat padding-box";
        }
    }
    else if((checkHour >= 16 && checkHour <= 20))
    {
        if((checkHour == napTime) && (checkHour <= napTime+1))
        {
            element.innerHTML = `STOP YAWNING, GET SOME TEA.. <br>IT'S JUST EVENING!`;
            element.style.marginTop ="4%";
            element.style.textAlign = "center";
            element2.innerText = "GOOD EVENING !!";
            element2.style.textAlign = "left";
            element3.style.background = "transparent url('./img/tea.png') 0% 0% no-repeat padding-box";
        }
        else
        {
            element.innerHTML = `EVENING IS A TIME OF REAL EXPERIMENTATION`;
            element.style.marginTop ="4%";
            element.style.textAlign = "center";
            element2.innerText = "GOOD EVENING !!";
            element2.style.textAlign = "left";
            element3.style.background = "transparent url('./img/tea.png') 0% 0% no-repeat padding-box";
        }
    }
    else if((checkHour >= 20 && checkHour < 24))
    {
        if((checkHour == night) && (checkHour <= night+1))
        {
            element.innerText = "CLOSE YOUR EYES AND GO TO SLEEP";
            element.style.marginTop ="8%";
            element2.innerText = "GOOD NIGHT !!";
            element2.style.textAlign = "left";
            element3.style.background = "transparent url('./img/night.png') 0% 0% no-repeat padding-box";
        }
        else
        {
            element.innerText = "THIS IS THE END OF THE DAY, BUT SOON THERE WILL BE A NEW DAY";
            element.style.marginTop ="4%";
            element2.innerText = "GOOD NIGHT !!";
            element2.style.textAlign = "left";
            element3.style.background = "transparent url('./img/night.png') 0% 0% no-repeat padding-box";
        }
    }
    else 
    {
        if((checkHour == mrng) && (checkHour <= mrng+1))
        {
            element.innerText = "GRAB SOME HEALTHY BREAKFAST!!!";
            element.style.marginTop ="8%";
            element2.innerText = "GOOD MORNING!! WAKE UP!!";
            element2.style.textAlign = "center";
            element3.style.background = "transparent url('./img/mrng.png') 0% 0% no-repeat padding-box";
        }
        else
        {
            element.innerText = "WEAKNESSES ARE JUST STRENGTHS IN THE WRONG ENVIRONMENT.";
            element.style.textAlign="center";
            element.style.marginTop ="4%";
            element2.innerText = "GOOD MORNING!! WAKE UP!!";
            element2.style.textAlign = "center";
            element3.style.background = "transparent url('./img/mrng.png') 0% 0% no-repeat padding-box";
        }
    }

}

function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min  = time.getMinutes();
    let sec  = time.getSeconds();
    let zone = "AM";
    
    if(hour > 12)
    {
        hour -= 12;
        zone  ="PM";
    }

    if(hour == 0)
    {
        hour = 12;
        zone = "AM";
    }

    hour = hour < 10 ? "0" + hour : hour;
    min  = min < 10 ? "0" + min : min ;
    sec  = sec < 10 ? "0" + sec : sec ;

    document.getElementById("hour").innerHTML = hour;
    document.getElementById("minute").innerHTML = min;
    document.getElementById("second").innerHTML = sec;
    document.getElementById("zonee").innerHTML = zone;
    
}

showTime();
setDynamic();

function setAlarm()
{
    const wake = document.getElementById("wakeUpdate");
    const lunch = document.getElementById("lunchUpdate");
    const nap = document.getElementById("napUpdate");
    const nig = document.getElementById("nightUpdate");
    

    const upwake = document.getElementById("wake");
    const uplunch = document.getElementById("lunch");
    const upnap = document.getElementById("napTime");
    const upnight = document.getElementById("nightTime");

    wake.innerHTML = upwake.options[upwake.selectedIndex].text;
    lunch.innerHTML = uplunch.options[uplunch.selectedIndex].text;
    nap.innerHTML = upnap.options[upnap.selectedIndex].text;
    nig.innerHTML = upnight.options[upnight.selectedIndex].text;

    setDynamic();

}

function showMore(){
    document.getElementById("line1").innerHTML = `Party&nbspTime&nbsp!`;
}

function showLess(){
    document.getElementById("line1").innerText = "Set Alarm";
}


   

