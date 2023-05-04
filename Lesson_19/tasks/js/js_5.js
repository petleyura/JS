const srcImg = [
	"./img/tank/ic_blue.png",
   "./img/tank/ic_norm.png",
	"./img/tank/ic_green.png",
	"./img/tank/ic_red.png"
]

class Tank_1990 {
	constructor(imgSRC) {
		this.span
		this.imgSrc = imgSRC
		this.img = this.renderImg(this.imgSrc)
		this.top = 0
		this.interval
		this.speed = 50
		
	}
	render() {
		this.span = document.createElement('span')
		this.span.append(this.img)		
		this.span.style.cssText = `top:0px; left:${this.randomPosition()}px`
		this.span.onclick = this.boom.bind(this)
		this.moove()
		return this.span
	}
	randoomTank() {
		const index = Math.floor(Math.random() * this.imgSrc.length)
		return this.imgSrc[index]
	}
	
	renderImg() {
		const img = document.createElement('img')	
		img.setAttribute('src', this.randoomTank())
		return img
	}
	randomPosition() {
		const widthWindow = window.innerWidth
		const leftPosition = 1+Math.floor(Math.random()*widthWindow)
		if (leftPosition + 72 > widthWindow) return widthWindow - 73
		else { return leftPosition}
	}
	boom() {
		this.img.src = "./img/tank/poo.png"
		clearInterval(this.interval)
		setTimeout(() => {
			this.span.style.left = `${this.randomPosition()}px`
			this.img.src = this.randoomTank()
			this.top = 0
			this.moove()
		}, 1000)
	}
	moove() {		
		this.interval = setInterval(() => {
			if (window.innerHeight > this.top) {
				this.top++
				this.span.style.top = `${this.top}px`			
			} else {
				this.top =0 
				this.span.style.top = `${this.top}px`
				clearInterval(this.interval)
				this.moove()
			}
		}, this.speed)
	}

}


window.onload = function () {	
	for (let i = 0; i < 5; i++) {
		setTimeout(() => {
			const tank = new Tank_1990(srcImg)	
			batl.prepend(tank.render())
		}, 1 + Math.floor(Math.random() * 10000))
	}	
}