var timer=60;
var score=0;
var rhit=0;
var startcount=4;

function makebubble(){
    var clutter="";
// var rn=Math.floor(Math.random()*10);
for(var i=0; i<=118;i++){
    var rn=Math.floor(Math.random()*10);

  clutter += `<div class="bubble">${rn}</div>`;
}
document.querySelector("#panelb").innerHTML=clutter;
}

function getNewHit(){
rhit=Math.floor(Math.random()*10);
document.querySelector(".hitval").textContent=rhit;
}

function runtimer(){
    var timerval=setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector(".timerval").textContent=timer;
        }
        else{
            clearInterval(timerval);
                document.querySelector("#panelb").innerHTML=`<h1>GAME OVER !</h1>`;

        }
},1000);
}

function increaseScore(){
    score+=10;
    document.querySelector(".scoreval").textContent=score;
}

function starter(){
    var startval=setInterval(function(){
        if(startcount>1){
            startcount--;
            document.querySelector("#panelb>h1").textContent=startcount;
        }
        else{
 //Functions calls 
            clearInterval(startval);
            makebubble();
            getNewHit();
            runtimer();
         }
},1000);
}
starter();

document.querySelector("#panelb")
.addEventListener("click",function(dets){
var clickednum=(Number(dets.target.textContent));
if (clickednum===rhit){   //=== means data type should also match
increaseScore();
makebubble();
getNewHit();

}
});

Shery.mouseFollower();
Shery.makeMagnet("h2,h3");
// Shery.textAnimate("h1");

Shery.textAnimate("h1" /* Element to target.*/, {
    //Parameters are optional.
    style: 1,
    y: 10,
    delay: 0.05,
    duration: 0.4,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });

