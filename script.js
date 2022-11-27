const keyNumber = document.querySelectorAll(".number");
const output = document.getElementById("output");
const reset = document.getElementById("reset");
const del = document.getElementById("delete");
const operation = document.querySelectorAll(".operation");
const equal = document.getElementById("equal");

const calculator = () => {
  const calculations = {
    previous: 0,
    current: 0,
    operand: "",
  };

  keyNumber.forEach((num) => {
    num.addEventListener("click", (e) => {
      output.value += e.target.value;
    });
  });

  del.addEventListener("click", () => {
    output.value = null;
  });

  reset.addEventListener("click", () => {
    calculations.previous = 0;
    calculations.current = 0;
    calculations.operand = "";
    output.value = null;
  });

  operation.forEach((ope) => {
    ope.addEventListener("click", (e) => {
      calculations.operand = e.target.value;
      calculations.previous = output.value;
      output.value = null;
    });
  });

  equal.addEventListener("click", () => {
    calculations.current = output.value;
    switch (calculations.operand) {
      case "+":
        output.value =
          parseInt(calculations.previous) + parseInt(calculations.current);
        break;
      case "-":
        output.value = parseInt(calculations.previous) - parseInt(calculations.current);
        break;
      case "x":
        output.value = parseInt(calculations.previous) * parseInt(calculations.current);
        break;
      case "/":
        output.value = parseInt(calculations.previous) / parseInt(calculations.current);
        break;
    }
  });
};

calculator();
