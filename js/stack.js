class Stack {
    
    constructor() {
      this.items = [];
    }

    push(value) {
      this.items.push(value)
      size++;
    }
    
    pop() {
      if (this.items.length == 0)
        return null;
      
      size--;
      this.items.pop();
    }
  
    peek() {
      return this.items[this.items.length - 1]
    }
    
    get size () {
      return this.items.length;
    }
  
    empty() {
     if (size == 0)
       return true;
      
      return false;
    }
  
    print() {
      for (let i = this.items.length - 1; i >= 0; i++)
        console.log(this.items[i])
    }
    
  }