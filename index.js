let ah = document.querySelector('#ah');
let al = document.querySelector('#al');
let bh = document.querySelector('#bh');
let bl = document.querySelector('#bl');
let ch = document.querySelector('#ch');
let cl = document.querySelector('#cl');
let dh = document.querySelector('#dh');
let dl = document.querySelector('#dl');

const btnSend = document.querySelector('.btn-send')
btnSend.addEventListener("click", e =>{
    document.querySelector('.pInfo').innerText = `Wynik rejestrów:  ah = ${ah.value} al = ${al.value} bh = ${bh.value} bl = ${bl.value} ch = ${ch.value} cl = ${cl.value} dh = ${dh.value} dl = ${dl.value}`;
});
