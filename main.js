
let btnStart = document.querySelector('button')
let btnPause = document.querySelectorAll('button')[1]
let btnReset = document.getElementById('reset')
const timeData = {
    ms: 0,
    s : 0,
    m : 0 ,
    h : 0
}
function currentTime(){
    timeData.ms+=10;
    if(timeData.ms >= 1000){
        timeData.ms = 0
        timeData.s++
    }
	if( timeData.s >= 60){
		 timeData.s=0;
		 timeData.m++;
    }
	if( timeData.m >=60){
		 timeData.m=0;
	     timeData.h++;
    }
	document.querySelector('h1').innerHTML = `${ timeData.h} : ${ timeData.m} : ${ timeData.s} : ${timeData.ms}`
  
}
let id = null;
//-----------------------------------
function getTime (){
    id = setInterval(()=>{ currentTime()},10)
}

btnStart.onclick = getTime

btnPause.onclick = ()=>{
    
    if(btnStart.onclick){
        clearInterval(id)
        btnStart.onclick = null
    }
    else{
         btnStart.onclick =  getTime
         btnStart.click()
    }
    
};

btnReset.onclick =()=>{
   timeData.h = timeData.s = timeData.m = timeData.ms =  0
    btnStart.onclick = null
    document.querySelector('h1').innerHTML = `${ timeData.h} : ${ timeData.m} : ${ timeData.s}  : ${timeData.ms}`
    document.querySelector('.laps').innerHTML = ''
   
}
let count = 1;
let laps = document.getElementById('laps')
laps.onclick = ()=>{
    let p = document.createElement('p')
    p.innerHTML = `[ Time ${count++} =>  ${document.querySelector('h1').innerHTML} ]`
    document.querySelector('.laps').appendChild(p)
}
