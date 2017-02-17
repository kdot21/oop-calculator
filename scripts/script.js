console.log("OOP Calculator");

$(function(){
  // Assign constant variables for a new Calculator object and Calculator display
  const calc = new Calculator();
  const display = $('.display');

  // Render [value] to the Calculator display
  function renderDisplay(value) {
    display.text(value);
  }

  // Clear Calculator display and reset Calculator object
  function clearBtn() {
    renderDisplay('0');
    calc.resetHard();
  }

  function operandBtn(event) {
    if (calc.output != null) {
      calc.output = null;
      renderDisplay(event.target.innerText);
    } else {
      // Ugly solution for checking if an operator is currently being displayed
      if (display.text() != '.' && !(parseInt(display.text()))) {
        renderDisplay('');
      }
      renderDisplay(display.text() + event.target.innerText);
    }
  }

  function operatorBtn(event) {
    calc.operator = event.target.innerText;
    if (calc.output != null) {
      calc.operand1 = calc.output;
      calc.firstOp = !calc.firstOp;
    } else if (calc.firstOp) {
      calc.operand1 = parseFloat(display.text());
      calc.firstOp = !calc.firstOp;
    }
    renderDisplay(event.target.innerText);
  }

  function equalsBtn() {
    calc.operand2 = parseFloat(display.text());
    calc.firstOp = !calc.firstOp;
    renderDisplay(calc.evaluate());
    calc.reset();
  }


  // Click event listeners for operand, operator, equals and clear buttons
  $('.operand').click(operandBtn);
  $('.operator').click(operatorBtn);
  $('.equals').click(equalsBtn);
  $('.clear').click(clearBtn);

  // Mousedown and Mouseup event listeners to visualize a button press
  $('.button').mousedown(function(event){
    $(this).css('opacity','0.5');
  });
  $('.button').mouseup(function(){
    $(this).css('opacity', '1');
  });

});
