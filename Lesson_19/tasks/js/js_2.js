const names = [
	'Юрій ПЕТЛЬОВАНИЙ',
	'Оксана ІВАНЧЕНКО',
	'Андрій МИХАЙЛЬОВСЬКИЙ',
	'Наталя БОЙКО',
	'Віталій МОРОЗОВ',
	'Сергій КОВАЛЬОВ',
	'Ігор КРАВЧЕНКО',
	'Анастасія БОНДАР',
	'Максим ВОЛОШИН',
	'Олексій ПРОЦЕНКО',
	'Тетяна ГАВРИЛЕНКО',
	'Артем ПОЛЯКОВ',
	'Дарина КОВАЛЬОВА',
	'Андрій ГОРДІЄНКО',
	'Євгенія БІЛОКОНЬ',
	'Владислав ЛЕБЕДЬ',
	'Марина КОНОВАЛОВА',
	'Софія ПАХОМОВА',
	'Іван МАРЧЕНКО',
	'Анна МИХАЙЛЮК'
 ];

class Sportsmen{
	constructor(person) {
		 this.person = person
	}
	render() {
		this.div = document.createElement('div')
		this.div.innerText = this.person
		this.div.className = ('conteiner__user')
		this.div.onclick = this.clickUser.bind(this)
		return this.div
	}
	checkingTheMassiv() {
		let result = false
		let arrDiv = this.list.querySelectorAll('div')
		console.log(arrDiv);
		arrDiv.forEach(div => { 
			if (div === this.div) result = true
		});
		return result
	}
	clickUser() {
		this.list = conteiner__list
		let listDiv = this.list.querySelectorAll('div')		
		this.list2 = document.getElementById('conteiner__list-user')
		let list2Div = this.list.querySelectorAll('div')		
		if (this.checkingTheMassiv()) {
			const element = this.list.removeChild(this.div);
			this.list2.append(element);
		 } else {
			const element = this.list2.removeChild(this.div);
			this.list.append(element);
		}
	}
}

window.onload = function () {
	const list = conteiner__list
	console.log(this.list);
	for (const el of names) {
		const person = new Sportsmen(el)
		list.append(person.render())
	}
}
 
