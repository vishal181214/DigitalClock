if((checkHour >= 12 && hour < 4) && (zone == "PM") && sec > 00)
{
    element.innerText = "LET'S HAVE SOME LUNCH";
    element.style.marginTop ="8%";
    element.style.textAlign ="center"
    element2.innerHTML = `GOOD&nbspAFTERNOON&nbsp!!&nbspTAKE&nbspSOME&nbspSLEEP`;
    element2.style.textAlign = "center";
    element3.style.background = "transparent url('./img/afternoon.png') 0% 0% no-repeat padding-box";
}
else if((hour > 4 && hour < 8) && (zone == "PM"))
{
    element.innerHTML = `STOP YAWNING, GET SOME TEA.. <br>IT'S JUST EVENING!`;
    element.style.marginTop ="4%";
    element2.innerText = "GOOD EVENING !!";
    element2.style.textAlign = "left";
    element3.style.background = "transparent url('./img/tea.png') 0% 0% no-repeat padding-box";
}
else if((hour >= 8 && hour < 12) && (zone == "PM"))
{
    element.innerText = "CLOSE YOUR EYES AND GO TO SLEEP";
    element.style.marginTop ="8%";
    element2.innerText = "GOOD NIGHT !!";
    element2.style.textAlign = "left";
    element3.style.background = "transparent url('./img/night.png') 0% 0% no-repeat padding-box";
}
else if(hour <= 12 && zone == "AM")
{
    element.innerText = "GRAB SOME HEALTHY BREAKFAST!!!";
    element.style.marginTop ="8%";
    element2.innerText = "GOOD MORNING!! WAKE UP!!";
    element2.style.textAlign = "center";
    element3.style.background = "transparent url('./img/mrng.png') 0% 0% no-repeat padding-box";
}