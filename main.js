const addButton = document.querySelector('button#addTask')

function cleanInput() {
	document.querySelector('#newTask').value = '' 
}

function addTask() {
	const task = document.querySelector('#newTask').value

	cleanInput()

	const ulTask = document.querySelector('#tasks')
	
	const liTask = document.createElement('li')

	const label = document.createElement('label')
	label.textContent = task

	const isFinished = document.createElement('input')
	isFinished.setAttribute('type', 'checkbox')
	isFinished.setAttribute('name', 'taskItem')
	
	const deleteButton = document.createElement('button')
	deleteButton.textContent = 'x'
	deleteButton.addEventListener('click', () => liTask.remove())

	liTask.appendChild(isFinished)
	liTask.appendChild(label)
	liTask.appendChild(deleteButton)
	ulTask.appendChild(liTask)
}

addButton.addEventListener('click', function(event) {
	event.preventDefault()
	addTask()
}) 
