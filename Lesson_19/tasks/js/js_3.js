class Snowflake {
	constructor(maxDiametr) {
	  this.render(maxDiametr);
	}
 
	render(maxDiametr) {
	  this.span = document.createElement('span');
	  this.diameter = this.randomDiameter(maxDiametr);
	  this.span.style.cssText = `width:${this.diameter}px; height:${this.diameter}px; background:${this.randomColor()}; top:100px; left:${this.randomLeft()}px;`;
	}
 
	randomDiameter(maxDiametr) {
	  if (maxDiametr < 3) {
		 maxDiametr = 4;
	  }
	  return 3 + Math.floor(Math.random() * (maxDiametr - 3 + 1));
	}
 
	randomColor() {
	  const colorStyle = ['blue', 'lightblue', 'turquoise', 'violet'];
	  let index = Math.floor(Math.random() * colorStyle.length);
	  return colorStyle[index];
	}
 
	randomLeft() {
	  return Math.floor(Math.random() * window.innerWidth);
	}
 
	muveDown() {
	  let y = parseInt(this.span.style.top);
	  let intervalId = setInterval(() => {
		 y += 1;
		 if (y < window.innerHeight) {
			console.log(y);
			this.span.style.top = `${y}px`;
		 } else {
			clearInterval(intervalId);
			this.span.style.top = '100px';
			this.span.style.left = `${this.randomLeft()}px`;
			this.muveDown();
		 }
	  }, 10 + Math.floor(Math.random() * 100));
	}
 }
 
window.onload = function () {
	let body = document.querySelector('body'); 
	for (let i = 0; i < 50; i++) {
		let span = new Snowflake(40);
		setTimeout(()=> {
			body.append(span.span);
			span.muveDown();
		}, 50 + Math.floor(Math.random() * 1000));
	  
	}
 };