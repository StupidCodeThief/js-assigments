// class PrecisionClock extends Clock {
//   constructor({template, precision = 1000}) {
//     super(template);
//     this.template = template;
//     this.precision = precision;
//   }
  
//   stop() {
//       return () => {super.stop()}
//   }

//   start() {
//     this.render();
//     this.timer = setInterval(() => this.render(), this.precision);
//   }
// }

// let clock = new PrecisionClock({ template: "h:m:s", precision: 2000 });
// clock.start();
// // setTimeout(clock.stop(), 6000);