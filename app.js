





let operrande="10"

let entier=document.getElementById('entier');
entier.innerHTML = parseInt(entier.innerHTML) * operrande;

let flottant=document.getElementById('flottant')
flottant.innerHTML=parseFloat(flottant.innerHTML)*operrande+parseInt(entier.innerHTML);

let nonnumerique=document.getElementById('non-numerique');
if(isNaN(nonnumerique))
{
nonnumerique.innerHTML=0;}

let nothing = document.getElementById('random');
if(nothing) {
    nothing.innerHTML = Math.random();
}
let parafive = document.getElementById('trunc')
parafive.innerHTML=Math.trunc(54.988);

let hello=document.getElementById('replace');
hello.innerHTML = hello.innerHTML.replace('Hello world',"kevin mura")

