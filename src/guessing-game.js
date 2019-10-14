class GuessingGame {
    constructor(min, max) {
        this.min = min;
        this.max = max;
        this.number = 0;
     }  
     setRange(min, max) {
     this.min = min;
     this.max = max;
     }
     guess() {
     this.number=Math.ceil((this.max+this.min)/2);
     console.log(this.number);
     return this.number; 
     }
     lower() {
       this.max=this.number;
     }
 
     greater() {
      this.min=this.number;
     }
}

module.exports = GuessingGame;
