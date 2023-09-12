document.addEventListener('DOMContentLoaded', function () {
    const projectsList = document.getElementById('projects');
    const tasksList = document.getElementById('tasks');
    const addProjectButton = document.getElementById('add-project');
    const addTaskButton = document.getElementById('add-task');

    // Function to add a new project
    function addProject() {
        const projectName = prompt('Enter project name:');
        if (projectName) {
            const projectItem = document.createElement('li');
            projectItem.textContent = projectName;
            projectsList.appendChild(projectItem);
        }
    }

    // Function to add a new task
    function addTask() {
        const taskName = prompt('Enter task name:');
        if (taskName) {
            const taskItem = document.createElement('li');
            taskItem.textContent = taskName;
            tasksList.appendChild(taskItem);
        }
    }

    addProjectButton.addEventListener('click', addProject);
    addTaskButton.addEventListener('click', addTask);
});
