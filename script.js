var tmp
var cao
var audio=new Audio('music.mp3')
var tep=1000
function inicia(){
    tmp=setInterval(mudarcor,tep)
    cao=document.createElement("img")
    cao.src="cao.gif"
    cao.style.width=100+'px'
    cao.style.height=100+'px'
    document.getElementById('cao').appendChild(cao)
    audio.play()
}
function mudarcor(){
    var obj=document.getElementById('dv1')
    var r=Math.floor(Math.random()*255)
    var g=Math.floor(Math.random()*255)
    var b=Math.floor(Math.random()*255)
    obj.style.backgroundColor="rgb("+r+","+g+","+b+")"
}
function para(){
    clearInterval(tmp)
    document.getElementById('cao').innerHTML=""
    audio.pause()
    document.getElementById("dv1").style.background="white"
}
function addEventos(){
document.getElementById('b1').addEventListener('click',inicia)
document.getElementById('b2').addEventListener('click',para)
}
window.addEventListener("load",addEventos)
