let btn1 = document.querySelector(".btn1");
let div2 = document.querySelector(".div2");

function cambiar_color(){
    div2.innerHTML = '<div class="div3">Azul</div>';
}
 btn1.addEventListener("click", cambiar_color);

let btn2 = document.querySelector(".btn2");

function cambiar_color2(){
    div2.innerHTML = '<div class="div4">Rojo</div>'
}
btn2.addEventListener("click",cambiar_color2)
