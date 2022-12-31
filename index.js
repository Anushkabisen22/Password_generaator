const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let first=document.getElementById("fir");
let second=document.getElementById("sec");
let but=document.querySelector("button");


but.addEventListener('click',function(){
    change();
});
function change(){
    let a="";
    let b=""; 
    for (let i=0;i<15;i++){
    a+=characters[Math.floor(Math.random()*characters.length)]; 
   };
    for (let i=0;i<15;i++){
    b+=characters[Math.floor(Math.random()*characters.length)];
    };
    first.textContent=a;
    second.textContent=b;
}






