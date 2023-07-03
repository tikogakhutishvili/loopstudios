let navs = document.getElementById("navs")
let btn = document.getElementById("btn")
let hide = document.getElementById("hone")
let header = document.getElementById("header")
let btn2 = document.getElementById("btn2")
let bttn = document.getElementById("bttn")
bttn.onclick = function () {  
    navs.classList.toggle('show')
    hide.classList.toggle('hide')
    header.classList.toggle('black')
    btn.classList.toggle('hide')
    btn2.classList.toggle('showbtn')
}


