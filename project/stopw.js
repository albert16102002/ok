const stopWatchTag=document.getElementsByClassName("stopWatch")[0];
const startButtonTag=document.getElementsByClassName("startButton")[0];
const pauseButtonTag=document.getElementsByClassName("pauseButton")[0];
const continueButtonTag=document.getElementsByClassName("continueButton")[0];
const restartButtonTag=document.getElementsByClassName("restartButton")[0];

let second=0, minute=0, hour=0, meliSecond=0;

const startTime=()=> {
    meliSecond += 1;
    if (meliSecond===1000){
        meliSecond=0;
        second+=1;
        if (second===60) {
            second =0;
            minute+=1; 
            if(minute===60){
                minute=0;
                hour+=1;
            }
        }
    }
    const meliSecondText= meliSecond<10? "0"+ meliSecond.toString(): meliSecond;
    const secondText= second<10? "0" + second.toString(): second;
    const minuteText= minute<10? "0" + minute.toString(): minute;
    const hourText=hour<10? "0" + hour.toString(): hour;
    stopWatchTag.textContent=hourText +":"+ minuteText +":"+ secondText+":"+meliSecondText;
}

let intervalId;

startButtonTag.addEventListener("click",()=>{
    intervalId=setInterval(startTime,1)
})

pauseButtonTag.addEventListener("click", ()=>{
    clearInterval(intervalId);
});

continueButtonTag.addEventListener("click", ()=>{
    clearInterval(intervalId);
    intervalId=setInterval(startTime,1);
})

restartButtonTag.addEventListener("click", ()=>{
    clearInterval(intervalId);
    (meliSecond=0),(second=0),(minute=0),(hour=0);
    intervalId=setInterval(startTime,1)
})