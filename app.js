const display = document.getElementById("display");

var value1 = "";
var value2;
var lastSign;
var result;

function numericButton(value) {
  value1;
  display.innerText += value;
  value1 += String(value);
}

function operationButton(value) {
    lastChar=display.innerText.charAt(display.innerText.length-1);
    if((lastChar==='-'||lastChar==='+'|| lastChar==='*'||lastChar==='/')&& value!=='backspace'){
        display.innerText=display.innerText.slice(0,-1)
    }

  switch (value) {
    case "+":
      display.innerText += value;
      if (lastSign) {
        value2 = calculatorFnc(value2, value1, lastSign);
      } else if (!value2) {
        value2 = value1;
      }
      value1 = "";
      lastSign = value;
      break;
    case "-":
      display.innerText += value;
      if (lastSign) {
        value2 = calculatorFnc(value2, value1, lastSign);
      } else if (!value2) {
        value2 = value1;
      }
      value1 = "";
      lastSign = value;
      break;
    case "*":
      display.innerText += value;
      if (lastSign) {
        value2 = calculatorFnc(value2, value1, lastSign);
      } else if (!value2) {
        value2 = value1;
      }
      value1 = "";
      lastSign = value;
      break;
    case "/":
      display.innerText += value;
      if (lastSign) {
        value2 = calculatorFnc(value2, value1, lastSign);
      } else if (!value2) {
        value2 = value1;
      }
      value1 = "";
      lastSign = value;
      break;

    case "=":
      if (lastSign) {
        value1 = calculatorFnc(value2, value1, lastSign);
      } else {
        value1 = value1;
      }
      display.innerText = value1;
      lastSign = "";
      value2 = "";

      break;
    case "c":
      value1 = "";
      value2 = "";
      display.innerText = "";
      break;
    case "backspace":
      lastChar=display.innerText.charAt(display.innerText.length-1);
      if(lastChar!=='-'||lastChar!=='+'|| lastChar!=='*'||lastChar!=='/'){
         lastSign=''
      }
  
        value1 = String(value1).slice(0, -1);

      const removedLastChar = display.innerText?.slice(0, -1);
      display.innerText = removedLastChar;
      break;
    default:
      break;
  }
}

function calculatorFnc(val1, val2, sign) {
  switch (sign) {
    case "+":
      return Number(val1) + Number(val2);

    case "-":
      return Number(val1) - Number(val2);

    case "*":
      return Number(val1) * Number(val2);

    case "/":
      return Number(val1) / Number(val2);

    default:
      return "";
  }
}

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;
themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
};
