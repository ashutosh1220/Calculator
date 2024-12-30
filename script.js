let onOff = document.getElementById('onOff');
let screen = document.getElementById('screen');
let screen1 = document.getElementById('screen1');
let screen2 = document.getElementById('screen2');
let closeBtn = document.getElementById('close');
let theme = document.getElementById('theme');
let downarrow = document.getElementById('downarrow');

var count = 0;
var zeroCount = 0;

function oNoff() {

   if (onOff.value === 'ON') {

      clearScreen();
      screen1.setAttribute("placeholder", "0");
      screen2.setAttribute("placeholder", "0");

      screen.style.transition = "all 0.2s ease-in-out";
      screen.style.backgroundColor = "#c9d1da";
      onOff.style.backgroundColor = "rgb(255, 178, 178)";
      onOff.value = 'OFF';
     
   }
   else if (onOff.value === 'OFF') {

      clearScreen();
      screen1.removeAttribute("placeholder");
      screen2.removeAttribute("placeholder");
      screen.style.transition = "all 0.2s ease-in-out";
      screen.style.backgroundColor = "black";
      onOff.style.backgroundColor = "rgb(204, 241, 199)";
      onOff.value = 'ON';
      activatePointButton();
   }
}

function activatePointButton() {

   count = 0;
}

function activateZero() {

   zeroCount = 0;
}

function Input(value) {

   //    if(screen1.value==='0' || value != '.'){


   //       clearScreen();
   //       screen1.value += value;
   //    }
   //    else{
   //       screen1.value += value;
   //    }
   // }

   // function controlZero(){

   // }

   screen1.value += value;
}

function pointInput() {
   if (count === 0) {

      if (screen1.value[screen1.value.length - 1] % 1 === 0) {

         Input('.');
         evaluateExpression();
      } else {
         Input('0.');
      }
      count++;
   }
}


function clearScreen() {
   screen1.value = '';
   screen2.value = '';
   if (onOff.value === 'OFF') {

      screen.style.transition = "all 0.2s ease-in-out";
      screen.style.backgroundColor = "#c9d1da";
   }
}

function deleteLast() {

   var currentValue = screen1.value;

   screen1.value = currentValue.substring(0, currentValue.length - 1);
   if (screen1.value == '') {

      clearScreen();
   }

   if (screen1.value[screen1.value.length - 1] % 1 === 0) {

      evaluateExpression();
   }

}

function evaluateExpression() {

   var expression = screen1.value;

   if (expression != "") {
      try {
         var result = eval(expression);
         screen2.value = result;

         if (onOff.value != 'ON') {
            screen.style.backgroundColor = "#c9d1da";
         }
      } catch (error) {
         screen1.value = screen1.value;

      }

   }
}
function toggleBackground() {

   var body = document.body;

   if (body.style.backgroundColor === "black") {

      body.style.transition = "all 0.2s";
      body.style.backgroundColor = "white";
      document.getElementById('btn').style.backgroundColor = "#ffff";
      document.getElementById('toggleBtn').style.marginLeft = "-10%";

      document.getElementById("di").classList.remove("bi-moon-stars-fill");

      document.getElementById("di").classList.add("bi-brightness-high-fill");
      document.getElementById("di").style.color = "black";

      closeBtn.style.borderColor = "black";

      theme.style.color = "black";
      downarrow.style.color = "black";
      closeBtn.style.color = "black";

   } else {

      body.style.backgroundColor = "black";
      document.getElementById('toggleBtn').style.marginLeft = "40%";
      document.getElementById('btn').style.backgroundColor = "#4b87d6";
      document.getElementById("di").classList.remove("bi-brightness-high-fill");
      document.getElementById("di").classList.add("bi-moon-stars-fill");

      document.getElementById("di").style.color = "white";
      theme.style.color = "white";
      downarrow.style.color = "white";
      closeBtn.style.borderColor = "white";
      closeBtn.style.color = "white";
      
   }
}

function closeWindow() {

   window.close();
}