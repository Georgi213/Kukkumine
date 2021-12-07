var x=250, y=20, r=15, ysamm=0.1, mils=10, ykiirendus=0.1;;
var t, g, timer;
function algus(){
    t=document.getElementById("kukkumine");
    g=t.getContext("2d");
    timer = setInterval('liigu()', mils);
}
function joonista(){
    g.clearRect(0, 0, t.width, t.height);
    g.beginPath()
    g.rect(0, t.height/2, t.width, t.height/2)
    g.fillStyle="cyan";
    g.opacity = 0.5;
    g.fill()
    g.closePath()
    g.fillStyle="blue";
    if(y > t.height) {
        y = 0
        x = randNum(0, t.width)
    }
    g.beginPath()
    g.arc(x, y, r, 0, 2*Math.PI, true);
    g.fill()
    g.closePath()
    g.beginPath()
    g.arc(x-20, y-25, r-10, 0, 2*Math.PI, false);
    g.arc(x+20, y-25, r-10, 97.5, 2*Math.PI, true);
    g.closePath()
    g.stroke()
}
function liigu() {
    if(y > t.height/2){
        y += ysamm*0.4;
        joonista();
        return
    }
    if(ysamm < 5){
        ysamm = ysamm + ykiirendus;
        y += ysamm;
    } else {
        ysamm = 5;
        y += ysamm;
    }
    joonista();
}
function setSpeed() {
    clearInterval(timer)
    mils = document.getElementById("speed").value;
    ykiirendus = parseFloat(document.getElementById("dSpeed").value);
    timer = setInterval('liigu()', mils);
    return
}
function hiirAlla(e){
    var kukkukoht=t.getBoundingClientRect();
    var hx=e.clientX-kukkukoht.left;
    var hy=e.clientY-kukkukoht.top;
    r-=0.5
    x=hx;
    y=hy;
    ysamm=0.1;
}
function randNum(min, max) {
    return Math.random() * (max - min) + min;
}
