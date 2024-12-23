
var MyQueue = function() {
    // create new instances of the two inputs
    this.inputStack = Array()
    this.outputStack = Array()
   };
   
   /** 
    * @param {number} x
    * @return {void}
    */
   MyQueue.prototype.push = function(x) {
    // Ensure to use the this context when working with classes
   while (this.outputStack.length > 0) {
       let current1 = this.outputStack.pop()
       this.inputStack.push(current1)
   }
       this.inputStack.push(x) // add new elements to inputStack
   
   while (this.inputStack.length > 0) {
    // add all elements to the outputstack to obtain the output
       let current2 = this.inputStack.pop()
       this.outputStack.push(current2)
       
   }
   
   };
   
   /**
    * @return {number}
    */
   MyQueue.prototype.pop = function() {
       return this.outputStack.pop()
   };
   
   /**
    * @return {number}
    */
   MyQueue.prototype.peek = function() {
        // observe the first element of the stack
       return this.outputStack[this.outputStack.length - 1]
   };
   
   /**
    * @return {boolean}
    */
   MyQueue.prototype.empty = function() {
       if (this.outputStack.length < 1) return true
       else return false
   
   };
   
   /** 
    * Your MyQueue object will be instantiated and called as such:
    * var obj = new MyQueue()
    * obj.push(x)
    * var param_2 = obj.pop()
    * var param_3 = obj.peek()
    * var param_4 = obj.empty()
    */