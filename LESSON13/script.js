const list = document.querySelector('.list')

list.addEventListener('click', function (event) {
	const targetElement = event.target
	if (targetElement.classList.contains('item')) {
		targetElement.classList.toggle('done')
	}
})


const form = document.querySelector('.form')
form.addEventListener('submit', function (event) {
	event.preventDefault()
	const input = document.querySelector('.input')
	const text = input.value
	input.value = ''


	const newItem = document.createElement('li')
	newItem.classList.add('item')
	newItem.textContent = text
	list.append(newItem)
})
