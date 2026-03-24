const displayBox = document.querySelector(".display"),
    displayInput = document.querySelector(".display-input"),
    displayResult = document.querySelector(".display-result"),
    buttons = document.querySelectorAll("button"),
    operators = ["%", "÷", "×", "-", "+",];
let input = "",
    result = "";

// main function to handle calculator logic
const calculate = btnValue => {

    // handle equals
    if (btnValue === "=") {
        const formattedInput = replaceOperators(input);
        try {
            const calculatedValue = eval(formattedInput);
            result = calculatedValue;
        }
        catch {
            result = "Error";
        }
    };

    input += btnValue;

    // update display
    displayInput.value = input;
    displayResult.value = result;
    displayInput.scrollLeft = displayInput.scrolwidth;
};

// function to replace division and multiplicatin symbols with java compatible operators ("/" and "*")
const replaceOperators = input => input.replaceAll("÷", "/").replaceAll("x","*");

// add click event listeners to all buttons
buttons.forEach(button =>
    button.addEventListener("click", e => calculate(e.target.textcontent))
);
