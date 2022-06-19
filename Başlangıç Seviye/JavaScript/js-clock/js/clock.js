let userName = prompt("Lütfen Adınızı Yazınız")
let myName= document.querySelector("#myName")
myName.innerHTML= `${userName}`


function showTime() {
    let date= new Date();
    let d= date.getDay();
    let h= date.getHours();
    let m= date.getMinutes();
    let s= date.getSeconds();
    let myClock = document.querySelector("#myClock")
    

    if (h<10) {
        h= "0"+h
    }

    if (m<10) {
        m= "0"+m
    }

    if (s<10) {
        s= "0"+s
    }

    if (d==0) {
        d= "Pazar";
    } else if (d==1) {
        d= "Pazartesi";
    } else if (d==2) {
        d= "Salı";
    } else if (d==3) {
        d= "Çarşamba";
    } else if (d==4) {
        d= "Perşembe";
    } else if (d==5) {
        d= "Cuma";
    } else if (d==6) {
        d= "Cumatesi";
    }

    myClock.innerHTML= `${h}: ${m}: ${s}, ${d}`
    setTimeout (showTime, 1000); 
}
showTime();