var remaining=document.getElementById("remained");
var percentage=document.getElementById("percentage");
var cupText=document.getElementById("cupinside");

var perc=document.getElementById("percentage");

const fullcups=document.querySelectorAll('.cup-small.full').length;

var smallCups=document.querySelectorAll(".cups .cup-small");
var height=130;

for(var i=0; i<smallCups.length;i++)
{
smallCups[i].addEventListener('click',function(event){
    cupText.style.display="none";
    var water=document.createElement("div");
    water.style.height=`${height}px`;
    water.style.width="150px";
    water.style.backgroundColor="blue";
    perc.appendChild(water);
    height+=130;
});
}



