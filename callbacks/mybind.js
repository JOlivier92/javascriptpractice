

Function.prototype.myBind = function(ctx) {
  console.log("myBind this", this);
  return () => this.apply(ctx);
  
};


// () => {
//   return Function.prototype.call(ctx, this);
// };

class Lamp {
  constructor() {
    this.name = "a lamp";
  }
}

const turnOn = function() {
   console.log("turnOn this", this);
   console.log("Turning on " + this.name);
};

const lamp = new Lamp();

// turnOn(); // should not work the way we want it to

const boundTurnOn = turnOn.bind(lamp);
const myBoundTurnOn = turnOn.myBind(lamp);

// boundTurnOn(); // should say "Turning on a lamp"
myBoundTurnOn(); // should say "Turning on a lamp"

