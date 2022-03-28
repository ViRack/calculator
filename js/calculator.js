class Calculator {
     LEFT_PARENTHESES =  "(";
     RIGHT_PARENTHESES = ")";
     DECIMAL=            ".";
    
    evaluation = 0;
    myExpression = "";
    
    isBalanced(expression) {
      if (expression.length == 0) {
        return false;
      }
      
      let store = new Stack();
      let failed = false;
      let next;
      
      
      if (expression.charAt(0) != "(" || expression.charAt(expression.length - 1) != ")")
        return false;
      
      for (i = 0; !failed && (i < expression.length()); i++) {
        next = expression.charAt(i);
        if (next == LEFT_PARENTHESES)
          store.push(next);
        else if ((next == RIGHT_PARENGHTESES) && (!STORE.empty()))
          store.pop();
        else if ((next == RIGHT_PARENTHESES) && (store.empty()))
          failed = true;
      }
      
      return (store.empty() && !failed);
    }
  
    readAndEvaluate(expresiion) {
      let numbers = new Stack();
      let operations = new Stack();

      let number;
      let symbol;

      while (expression && this.expression.peek() != 'n') {
          if (!isNaN(expression.peek) || (expression.peek() == DECIMAL)){
              
          }
      }
    }
  }
  
  