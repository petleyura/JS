let listLeptop = [
	{
		statusConteiner: 0,
		imgsrc: './img/1.webp',
		title: 'Ноутбук Acer Aspire 7 A715-42G-R3EZ',
		price: '25 000'
	},
	{
		statusConteiner: 0,
		imgsrc: './img/2.webp',
		title: 'Ноутбук Lenovo IdeaPad L3 15ITL6 (82HL00HCRA)',
		price: '15 400'
	},
	{
		statusConteiner: 0,
		imgsrc: './img/3.webp',
		title: 'Ноутбук ASUS TUF Gaming F15 FX506LHB',
		price: '45 000'
	},
	{
		statusConteiner: 1,
		imgsrc: './img/4.webp',
		title: 'Ноутбук Apple MacBook Air 13" M1 256GB 2020',
		price: '47 000'
	}
]

class Leptop {
	constructor({ statusConteiner, imgsrc, title, price }) {
		this.statusConteiner = statusConteiner
		this.imgsrc = imgsrc
		this.title = title
		this.price = price
	}
	clickArticle() {
		const divColection = document.querySelectorAll(`.conteiner__article`)
		
		for (const el of divColection) {
			if (el.classList.contains('conteiner__article_active')) el.classList.remove('conteiner__article_active')
		}
		this.article.classList.add('conteiner__article_active')
	}
	createTeg(className) {
		this.article = document.createElement('article')
		this.article.className = `${className}__article`

		const statusSpan = document.createElement('span')
		statusSpan.className = `${className}__status`
		if (this.statusConteiner == 1) {
			statusSpan.classList.add(`${className}__status_red`)
			statusSpan.innerText = `Акція`
		} else { statusSpan.innerText = `Топ продаж`}
		

		const divImg = document.createElement('div')
		divImg.className = `${className}__img`
		const img = document.createElement('img')
		img.setAttribute('src', this.imgsrc)
		divImg.append(img)

		const title = document.createElement('h3')
		title.className = `${className}__title`
		title.innerText = `${this.title}`
		
		const priceSpan = document.createElement('span')
		priceSpan.innerText = '₴'
		const price = document.createElement('p')
		price.className = `${className}__price`
		price.innerText = `${this.price}`
		price.append(priceSpan)

		this.article.append(statusSpan)
		this.article.append(divImg)
		this.article.append(title)
		this.article.append(price)
		this.article.onclick = this.clickArticle.bind(this)
		return this.article
	}
}
window.onload = function(){
for (const element of listLeptop) {
	
	const blok = document.querySelector('.conteiner')

	const el = new Leptop(element)
	
	blok.append(el.createTeg('conteiner'))
}}