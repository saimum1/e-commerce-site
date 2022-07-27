const nav=document.querySelector("#navbar");
const bar=document.querySelector("#bar");

const close=document.querySelector(".close");


const smimg=document.getElementsByClassName("small-img");
const bimg=document.getElementById("mainimg");


if(bar){
    bar.addEventListener('click', ()=>{
        console.log(bar);
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click', ()=>{
        nav.classList.remove('active');
    })
}



smimg[0].onclick=()=>{
    bimg.src=smimg[0].src;
}
smimg[1].onclick=()=>{
    bimg.src=smimg[1].src;
}
smimg[2].onclick=()=>{
    bimg.src=smimg[2].src;
}

smimg[3].onclick=()=>{
    bimg.src=smimg[3].src;
}

smimg[4].onclick=()=>{
    bimg.src=smimg[4].src;
}

