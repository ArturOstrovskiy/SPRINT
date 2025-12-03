const list = document.querySelector('.list') //присваивает переменной list html элемент с классом list, а именно
// <olclass="list">…</ol>
const item = document.querySelector('.item')

list.addEventListener('click', function (event) { //по клику передается параметр event в функцию
	const targetElement = event.target //присваиваем targetElement значение event, а .target указывает на конкретный
                                      // элемент
	if (targetElement.classList.contains('item')) { //проверка на наличие класса item в targetElement
		targetElement.classList.toggle('done') //classList содержит список всех классов targetElement
	}
})

const form = document.querySelector('.form') //присваивает переменной form html элемент с классом form
form.addEventListener('submit', function (event) { //по клику на элемент submit передается параметр event в функцию
	event.preventDefault() //.preventDefault() это метод который прерывает стандартное поведение браузера связанное с
                          // этим событием
	const input = document.querySelector('.input') //присваивает переменной input html элемент с классом input
	const text = input.value //присваивает переменной text значение(.value) переданное в input
	input.value = '' //присваивает полю ввода input значение '' (пустой строки)


	const newItem = document.createElement('li') //присваиваем переменной newItem созданный новый элемент 'li'
	newItem.classList.add('item')//добавляем нашей новой li класс item
	if (text !== "") { //проверка на пустую строку
		newItem.textContent = text //добавляем нашей новой li текст из input.value (<li>text</li>)
		list.append(newItem) //добавляем в элемент с классом list наш newItem
	}
})

const resetButton = document.querySelector('#reset-button')

resetButton.addEventListener('click', function () {
	setTimeout(function () {
		const items = document.querySelectorAll('.item')

		for (let i = 0; i < items.length; i++) {
			const listItem = items[i]

			listItem.classList.remove('done')
		}
	}, 3000)
})