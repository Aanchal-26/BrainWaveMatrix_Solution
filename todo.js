document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-task');
    const taskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    
    function createTaskItem(taskText) {
    
        const listItem = document.createElement('li');

        
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        listItem.appendChild(taskSpan);

        
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit');
        editButton.addEventListener('click', () => {
            const newTaskText = prompt('Edit task:', taskSpan.textContent);
            if (newTaskText !== null && newTaskText.trim() !== '') {
                taskSpan.textContent = newTaskText.trim();
            }
        });

        
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove');
        removeButton.addEventListener('click', () => {
            taskList.removeChild(listItem);
        });

    
        listItem.appendChild(editButton);
        listItem.appendChild(removeButton);

        return listItem;
    }

    addButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();

        if (taskText === '') return;

        const newTaskItem = createTaskItem(taskText);
        taskList.appendChild(newTaskItem);


        taskInput.value = '';
    });

    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addButton.click();
        }
    });
});
