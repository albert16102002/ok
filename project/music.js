const playlistContainerTag=document.getElementsByClassName("playlistContainer")[0];
const audioTag=document.getElementsByClassName("audioTag")[0];
const currentTimeTag=document.getElementsByClassName("currentAndTotleTime")[0];
const currenProgressTag=document.getElementById("progressProcess");
const playButtonTag= document.getElementsByClassName("playButton")[0];
const pauseButtonTag= document.getElementsByClassName("pauseButton")[0];
const previousButtonTag= document.getElementsByClassName("previousButton")[0];
const nextButtonTag= document.getElementsByClassName("nextButton")[0];

const tracks=[
    {trackId:"download/ဆုလာဘ်-ရေမွန်(128k).mp3",title:"ရေမွန် - ဆုလာဘ်"},
    {trackId:"download/ကျော်သီဟ_-_မင်းသိလာမယ်__(Music_Video)(128k).mp3", title:"ကျော်သီဟ - မင်းသိလာမယ်"},
    {trackId:"download/တစ္ဆေ___မျိုးကြီး__Myo_Gyi_(Official_MV)_တေစၦ_-_မ်ိဳးႀကီး(128k).mp3",title:"မျိုးကြီး - တစ္ဆေ"},
    {trackId:"download/အချစ်အိပ်မက်​လေး_-_ကျော်သီဟ(128k).mp3",title:"ကျော်သီဟ - အချစ်အိပ်မက်​လေး"}
]

for(let i=0; i<tracks.length; i++){
    const trackTag=document.createElement("div");
    trackTag.classList.add("trackItems");
    trackTag.addEventListener("click",()=>{
        const trackId=tracks[i].trackId;
        audioTag.src=trackId;
        audioTag.play();
        isPlaying=true;
        playAndPauseButton();
        currenPlayingIndex=i;
    })
    const title= (i+1).toString()+". "+tracks[i].title;
    trackTag.textContent=title;
    playlistContainerTag.append(trackTag);
}

let duration=0;
let durationText= "00:00";
audioTag.addEventListener("loadeddata", ()=>{
    duration=Math.floor(audioTag.duration);
    durationText=totalMinuteAndSecondText(duration);
})
audioTag.addEventListener("timeupdate",()=>{
    const currentTime=Math.floor(audioTag.currentTime);
    const currentTimeText=totalMinuteAndSecondText(currentTime);
    const currentTimeTextAndDurationText= currentTimeText+ " / " +durationText;
    currentTimeTag.textContent=currentTimeTextAndDurationText;
    updateCurrentProgress(currentTime);
})

const updateCurrentProgress = (currentTime)=>{
    const currenProgressWidth= (500/duration)*currentTime;
    currenProgressTag.style.width= currenProgressWidth.toString()+"px";
}

const totalMinuteAndSecondText=(totalSecond)=>{
    const minutes=Math.floor(totalSecond/60);
    const seconds=totalSecond%60;

    const minuteText = minutes<10 ? "0" + minutes.toString(): minutes;
    const secondText = seconds<10 ? "0" + seconds.toString(): seconds;
    return minuteText+ ":" + secondText;
} 

let currenPlayingIndex=0;
let isPlaying=false;
playButtonTag.addEventListener("click",()=>{
    const currentTime=Math.floor(audioTag.currentTime);
    isPlaying=true;
    if(currentTime===0){
        const sonIdToPlay=tracks[currenPlayingIndex].trackId;
        audioTag.src=sonIdToPlay;
        audioTag.play();
        playAndPauseButton();
    } else {
        audioTag.play();
        playAndPauseButton();
    }
})

pauseButtonTag.addEventListener("click",()=>{
    isPlaying=false;
    audioTag.pause();
    playAndPauseButton();
})

previousButtonTag.addEventListener("click",()=>{
    if (currenPlayingIndex===0){
        return;
    }
    currenPlayingIndex -= 1;
    playSong();
})

nextButtonTag.addEventListener("click",()=>{
    if (currenPlayingIndex===tracks.length - 1){
        return;
    }
    currenPlayingIndex += 1;
    playSong();
})

const playAndPauseButton=()=>{
    if(isPlaying){
        playButtonTag.style.display="none";
        pauseButtonTag.style.display="inline";
    } else {
        playButtonTag.style.display="inline";
        pauseButtonTag.style.display="none";
    }
}

const playSong = () => {
    const sonIdToPlay=tracks[currenPlayingIndex].trackId;
    audioTag.src=sonIdToPlay;
    audioTag.play();
    isPlaying=true;
    playAndPauseButton();
}