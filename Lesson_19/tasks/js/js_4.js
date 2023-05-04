class Stars {
	constructor(min, max, idElemrnt) {
		this.span
		this.minStar = min
		this.maxStar = max
		this.id = document.getElementById(idElemrnt)		
	}
	render() {
		this.top = this.positionTop()
		this.left = this.positionLeft()
		this.span = document.createElement('span')
		console.log(this.id);
		this.id.append(this.span)
		this.span.style.cssText = `width:${this.minStar}px; height:${this.minStar}px; top:${this.top}px; left:${this.left}px;`;
		this.increase()		
	}
	randomNum(num) {
		return 1+Math.floor(Math.random()* num)
	}
	positionTop() {
		const idHeight = this.id.offsetHeight;
		const top = this.maxStar/2+this.randomNum(idHeight) 
		return top
	}
	positionLeft() {
		const idWidth = this.id.offsetWidth;
		return this.maxStar/2+this.randomNum(idWidth)
	}
	increase() {
		let width = parseInt(this.span.style.width)
		let height = parseInt(this.span.style.height)
		let setIntervalSpan = setInterval (() => {			
			if (this.maxStar >= width) {
			width += 1
			height += 1
				this.span.style.cssText = `width:${width}px; height:${height}px;top:${this.top}px; left:${this.left}px;`
			}
			else {				
				clearInterval(setIntervalSpan)
				this.id.removeChild(this.span)
				this.render()
			}
		}, this.randomNum(500));
	}
	
}


window.onload = function () {
	const numStars = parseFloat(prompt(`Ведіть бажану кількіст зірок`, 50))
	for (let i = 0; i < numStars; i++) {
		const star = new Stars(25, 36, 'div')	
		star.render()
	}
}