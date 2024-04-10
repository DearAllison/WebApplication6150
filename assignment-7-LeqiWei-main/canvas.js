var canvas = document.getElementById('myCanvas');
let input = "";
var value = '';
var display_input = '';
var display_output = '';

//Each rectangle in the button section is 98 in length and 79 in width
const draw = () => {
    var canvas = document.getElementById('myCanvas');
    if(!canvas.getContext) return;
    var ctx = canvas.getContext("2d");

    // ctx.fillStyle = "rgba(0,0,0,0.75)";
    // ctx.fillRect (0, 160, 500, 480);

    //part_1 dark grey
    for(var j = 0; j < 4; j++){
        // ctx.fillStyle = "rgb(49, 49, 49)";
        ctx.fillStyle = "rgb(65, 63, 63)";
        ctx.fillRect(1+j*100,160,98,79);
    }
    //operator color orange
    for(var i = 0; i < 5; i++){
        ctx.fillStyle = "rgb(249, 162,1)";
        ctx.fillRect(401,i*80+160,98,79);
    }
    //number color
    for(var i = 0; i < 3; i++){
        for(var j = 0; j < 4; j++){
            // ctx.fillStyle = "rgb(65,63,63)";
            ctx.fillStyle = "rgb(90, 90, 90)"
            ctx.fillRect(1+j*100,i*80+240,98,79);
        }
    }
    //long 0
    ctx.fillStyle = "rgb(90,90,90)";
    ctx.fillRect (1,480,298,79);
    //point.
    ctx.fillStyle = "rgb(90,90,90)";
    ctx.fillRect (301,480,98,79);

    //character %
    ctx.fillStyle = "white";
    ctx.font = " 32px Times New Roman";
    ctx.fillText("%",340,210);
    
    //character /
    ctx.fillStyle = "white";
    ctx.font = " 32px Times New Roman";
    ctx.fillText("/",450,210);

    //character (
    ctx.fillStyle = "white";
    ctx.font = " 32px Times New Roman";
    ctx.fillText("(",50,290);

    //character 7
    ctx.fillStyle = "white";
    ctx.font = " 32px Times New Roman";
    ctx.fillText("7",145,290);

    //character 8
    ctx.fillStyle = "white";
    ctx.font = " 32px Times New Roman";
    ctx.fillText("8",245,290);

    //character 9
    ctx.fillStyle = "white";
    ctx.font = " 32px Times New Roman";
    ctx.fillText("9",345,290);

    //charcter x
    ctx.fillStyle = "white";
    ctx.font = " 35px Times New Roman";
    ctx.fillText("x",445,290);

    //charcter )
    ctx.fillStyle = "white";
    ctx.font = " 32px Times New Roman";
    ctx.fillText(")",50,370);

    //charcter 4
    ctx.fillStyle = "white";
    ctx.font = " 32px Times New Roman";
    ctx.fillText("4",145,370);

    //charcter 5
    ctx.fillStyle = "white";
    ctx.font = " 32px Times New Roman";
    ctx.fillText("5",245,370);

    //charcter 6
    ctx.fillStyle = "white";
    ctx.font = " 32px Times New Roman";
    ctx.fillText("6",345,370);

    //charcter -
    ctx.fillStyle = "white";
    ctx.font = " 50px Times New Roman";
    ctx.fillText("-",445,370);

    //charcter Back
    ctx.fillStyle = "white";
    ctx.font = " 32px Times New Roman";
    ctx.fillText("Back",20,450);

    //charcter 1
    ctx.fillStyle = "white";        
    ctx.font = " 32px Times New Roman";
    ctx.fillText("1",145,450);

    //charcter 2
    ctx.fillStyle = "white";        
    ctx.font = " 32px Times New Roman";
    ctx.fillText("2",245,450);

    //charcter 3
    ctx.fillStyle = "white";        
    ctx.font = " 32px Times New Roman";
    ctx.fillText("3",345,450);

    //charcter +
    ctx.fillStyle = "white";                
    ctx.font = " 32px Times New Roman";
    ctx.fillText("+",445,450);

    //charcter 0
    ctx.fillStyle = "white";                
    ctx.font = " 32px Times New Roman";
    ctx.fillText("0",140,530);

    //charcter .
    ctx.fillStyle = "white";                
    ctx.font = " 32px Times New Roman";
    ctx.fillText(".",345,530);

    //charcter .
    ctx.fillStyle = "white";                        
    ctx.font = " 32px Times New Roman";
    ctx.fillText("=",445,530);

    //red
    ctx.beginPath();
    ctx.arc(25,20,10,0,2*Math.PI);
    ctx.closePath();
    ctx.fillStyle = "rgb(227,23,13)";
    ctx.fill();

    //yellow
    ctx.beginPath();
    ctx.arc(55,20,10,0,2*Math.PI);
    ctx.closePath();
    ctx.fillStyle = "rgb(255,200,10)";
    ctx.fill();

    //green
    ctx.beginPath();
    ctx.arc(85,20,10,0,2*Math.PI);
    ctx.closePath();
    ctx.fillStyle = "rgb(61,145,64)";
    ctx.fill();
}
draw();

canvas.addEventListener('click',function(e){
    p = getEventPosition(e);
    //Determine the click position by the coordinate point coordinates
    //'%' button
    if(p.x >= 301 && p.x <= 399 && p.y >= 160 && p.y <= 239){
        value = '%';
        console.log(value);
    }
    //'/'button
    if(p.x >= 401 && p.x <= 500 && p.y >= 160 && p.y <= 239){
        value = '/';
        console.log(value);
    }
    //'('button
    if(p.x >= 1 && p.x <= 99 && p.y >= 240 && p.y <= 319){
        value = 'bracket1';
        console.log(value);
    }
    //'7'button
    if(p.x >= 101 && p.x <= 199 && p.y >= 240 && p.y <= 319){
        value = '7';
        console.log(value);
    }
    //'8'button
    if(p.x >= 201 && p.x <= 299 && p.y >= 240 && p.y <= 319){
        value = '8';
        console.log(value);
    }
    //'9'button
    if(p.x >= 301 && p.x <= 399 && p.y >= 240 && p.y <= 319){
        value = '9';
        console.log(value);
    }
    //'*'button
    if(p.x >= 401 && p.x <= 500 && p.y >= 240 && p.y <= 319){
        value = '*';
        console.log(value);
    }
    //')'button
    if(p.x >= 1 && p.x <= 99 && p.y >= 320 && p.y <= 399){
        value = 'bracket2';
        console.log(value);
    }
    //'4'button
    if(p.x >= 101 && p.x <= 199 && p.y >= 320 && p.y <= 399){
        value = '4';
        console.log(value);
    }
    //'5'button
    if(p.x >= 201 && p.x <= 299 && p.y >= 320 && p.y <= 399){
        value = '5';
        console.log(value);
    }
    //'6'button
    if(p.x >= 301 && p.x <= 399 && p.y >= 320 && p.y <= 399){
        value = '6';
        console.log(value);
    }
    //'-'button
    if(p.x >= 401 && p.x <= 499 && p.y >= 320 && p.y <= 399){
        value = '-';
        console.log(value);
    }
    //'Back'button
    if(p.x >= 1 && p.x <= 101 && p.y >= 400 && p.y <= 479){
        value = 'delete';
        console.log(value);
    }
    //'1'button
    if(p.x >= 101 && p.x <= 199 && p.y >= 400 && p.y <= 479){
        value = '1';
        console.log(value);
    }
    //'2'button
    if(p.x >= 201 && p.x <= 299 && p.y >= 400 && p.y <= 479){
        value = '2';
        console.log(value);
    }
    //'3'button
    if(p.x >= 301 && p.x <= 399 && p.y >= 400 && p.y <= 479){
        value = '3';
        console.log(value);
    }
    //'+'button
    if(p.x >= 401 && p.x <= 499 && p.y >= 400 && p.y <= 479){
        value = '+';
        console.log(value);
    }
    //'0'button
    if(p.x >= 1 && p.x <= 298 && p.y >= 480 && p.y <= 550){
        value = '0';
        console.log(value);
    }
    //'.'button
    if(p.x >= 301 && p.x <= 399 && p.y >= 480 && p.y <= 550){
        value = '.';
        console.log(value);
    }
    //'='button
    if(p.x >= 401 && p.x <= 499 && p.y >= 480 && p.y <= 550){
        value = '=';
        console.log(value);
    }

    calculate(value);
    updateDisplay();
});

//Display of input & output
const updateDisplay = () => {
    var canvas = document.getElementById('myCanvas');
    if(!canvas.getContext) return;
    var ctx = canvas.getContext("2d");
    //input display
    ctx.fillStyle = "#fff";
    ctx.font = "bold 25px Times New Roman"
    ctx.textAlign = 'end';
    //clear the text
    ctx.clearRect(20, 40, 500, 30);
    ctx.fillText(display_input,500,60);
    
    //output display
    ctx.fillStyle = "#fff";
    ctx.font = "bold 35px Times New Roman"
    ctx.clearRect(20, 70, 500, 90);
    ctx.fillText(display_output,500,120);
    
}

//Calculate 
const calculate = (value) => {
    //Back button
    if(value == "delete"){
        input = input.slice(0,-1);
        display_input = input;
    }else if(value == "="){
        try{
        let result = evaluate(input);
        display_output = result;
        }catch{
         display_output = 'Invalid Expression'
        }
    }
    //'()'button, match validation
    else if(value == "bracket1"){
        if(
            input.indexOf("(") == -1 ||
            input.indexOf("(") != -1 &&
            input.indexOf(")") != -1 &&
            input.lastIndexOf("(") < input.lastIndexOf(")"))
        {
            input += "("
        }else{
            display_output = "left-half bracket already"
        }
    }else if(value == "bracket2"){
        if(
            input.indexOf("(") != -1 &&
            input.indexOf(")") == -1 ||
            input.indexOf("(") != -1 &&
            input.indexOf(")") != -1 &&
            input.lastIndexOf("(") > input.lastIndexOf(")")
        )
        {
            input += ")";
        }else{
            display_output = "right-half bracket doesn't match"
        }
        display_input = input;
    }
    else{
        //validation function,output is Invalid Expression
        if(validation(value)){
        input += value;
        display_input = input;
        }else{
            display_output = "Invalid Expression"
        }
    }
}


//evaluation
const evaluate = (expression) => {
    let tokens = expression.split('');
  
         // Stack for numbers: 'values'
        let values = [];
  
        // Stack for Operators: 'ops'
        let ops = [];
  
        for (let i = 0; i < tokens.length; i++)
        {
             // Current token is a whitespace, skip it
            if (tokens[i] == ' ')
            {
                continue;
            }
  
            // Current token is a number,
            // push it to stack for numbers
            if (tokens[i] >= '0' && tokens[i] <= '9' || tokens[i] == '.'||(tokens[i] == '-' && tokens[i-1] == '('))
            {
                let sbuf = "";
                  
                // There may be more than
                // one digits in number
                while (i < tokens.length && tokens[i] >='0' && tokens[i] <= '9'||tokens[i] == '.'||
                        (tokens[i] == '-' && tokens[i-1] == '('))
                {
                    sbuf = sbuf + tokens[i++];
                }
                values.push(parseFloat(sbuf, 3));
                
                // Right now the i points to
                // the character next to the digit,
                // since the for loop also increases
                // the i, we would skip one
                //  token position; we need to
                // decrease the value of i by 1 to
                // correct the offset.
                  i--;
            }
  
            // Current token is an opening
            // brace, push it to 'ops'
            else if (tokens[i] == '(')
            {
                ops.push(tokens[i]);
            }
  
            // Closing brace encountered,
            // solve entire brace
            else if (tokens[i] == ')')
            {
                while (ops[ops.length - 1] != '(')
                {
                  values.push(applyOp(ops.pop(),
                                   values.pop(),
                                  values.pop()));
                }
                ops.pop();
            }
  
            // Current token is an operator.
            else if (tokens[i] == '+' ||
                     tokens[i] == '-' ||
                     tokens[i] == '*' ||
                     tokens[i] == '/' ||
                     tokens[i] == '%')
            {
                  
                // While top of 'ops' has same
                // or greater precedence to current
                // token, which is an operator.
                // Apply operator on top of 'ops'
                // to top two elements in values stack
                while (ops.length > 0 && hasPrecedence(tokens[i], ops[ops.length - 1]))
                {
                  values.push(applyOp(ops.pop(),
                                   values.pop(),
                                 values.pop()));
                }
  
                // Push current token to 'ops'.
                ops.push(tokens[i]);
            }
        }
  
        // Entire expression has been
        // parsed at this point, apply remaining
        // ops to remaining values
        while (ops.length > 0)
        {
            values.push(applyOp(ops.pop(), values.pop(), values.pop()));
        }
  
        // Top of 'values' contains
        // result, return it
        return values.pop();
    }
  
    // Returns true if 'op2' has
    // higher or same precedence as 'op1',
    // otherwise returns false.
    const hasPrecedence = (op1, op2) =>
    {
        if (op2 == '(' || op2 == ')')
        {
            return false;
        }
        if ((op1 == '*' || op1 == '/') &&
               (op2 == '+' || op2 == '-'))
        {
            return false;
        }
        else
        {
            return true;
        }
    }
  
    // A utility method to apply an
    // operator 'op' on operands 'a'
    // and 'b'. Return the result.
    const applyOp = (op, b, a) =>
    {
        switch (op)
        {
        case '+':
             return a + b;
        case '-':
             return a - b;
        case '*':
            return a * b;
        case '%':
            if (b == 0)
            {
                return display_output = "Cannot mod by zero";
            }
            return parseFloat(a % b,3);
        case '/':
            if (b == 0)
            {
                return display_output = "Cannot divide by zero";
            }
             return parseFloat(a / b, 3);
        }
        return 0;
}

//get position's x & y
const getEventPosition = (ev) =>
{
    var x, y;
    if (ev.layerX || ev.layerX == 0) {
      x = ev.layerX;
      y = ev.layerY;
    } else if (ev.offsetX || ev.offsetX == 0) {
      x = ev.offsetX;
      y = ev.offsetY;
    }
    return {x: x, y: y};
  }

  //validation, operators double clicks
  const validation = (value) =>{
      let last_input = input.slice(-1);
      let operators = ["+", "-", "*", "/","%"];
  
      if (value == "." && last_input == "."){
          return false;
      }
  
      if(operators.includes(value)){
          if(operators.includes(last_input)){
              return false;
          }else{
              return true;
          }
      }
      return true;
  }


   
   