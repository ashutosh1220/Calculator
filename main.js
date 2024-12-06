let container = document.querySelector('#container');
let colorTxt = document.querySelector('.txt');
let button = document.querySelector('.btn');
let toggle = document.querySelector("#toggleBtn");

toggle.addEventListener("click", () => {
    if (toggle.innerText === "off") {
        toggle.innerText = "on";
        container.style.backgroundColor = "#291919";
        toggle.style.marginLeft="51%";
        colorTxt.innerText = "Dark";
        colorTxt.style.color = "white";
        button.style.cursor="progress";
        container.style.cursor="progress"
        toggle.style.cursor="progress"
        setTimeout(function(){

            button.style.cursor="auto";
            container.style.cursor="auto"
            toggle.style.cursor="pointer"
        }, 700);
        
    } else {
        toggle.innerText = "off";
        container.style.backgroundColor = "white";
        colorTxt.innerText = "Light";
        colorTxt.style.color = "black";
        toggle.style.marginLeft="";
        
    }
});
