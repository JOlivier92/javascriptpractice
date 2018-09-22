class Clock {
  constructor() {
    // 1. Create a Date object.
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals. 
    
    this.date = new Date();

    this.printTime(this.date);
    window.setInterval(this._tick.bind(this), 1000); 
    // const tickFunction = () => this._tick();
    // window.setInterval(tickFunction, 1000); 
  }

  printTime(date) {
    let currentTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`; 
    console.log(currentTime);
    // Format the time in HH:MM:SS
    // Use console.log to print it.
  }

  _tick() {
    // console.log(this);
    let seconds = this.date.getSeconds()+1;
    this.date.setSeconds(seconds);
    this.printTime(this.date);
    // 1. Increment the time by one second.
    // 2. Call printTime.
    
  }
}

const clock = new Clock();