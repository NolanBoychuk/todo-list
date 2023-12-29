function sideBarButtons(){
    const sideBar = document.createElement('div');
    sideBar.id = 'sideBar';

    // Create first section of tabs on left sidebar

    const homeHeader = document.createElement('h1');
    homeHeader.textContent = 'Home';
    homeHeader.id = 'homeHeader';
    const homeContainer = document.createElement('ul');
    homeContainer.id = 'homeContainer'
    const allTask = document.createElement('li');
    allTask.id = 'allTask';
    allTask.classList.add('homeTasks');
    allTask.textContent = 'All tasks';
    const today = document.createElement('li');
    today.id = 'today';
    today.classList.add('homeTasks');
    today.textContent = 'Today';
    const next7 = document.createElement('li');
    next7.id = 'next7';
    next7.classList.add('homeTasks');
    next7.textContent = "This week";
    const important = document.createElement('li');
    important.id = 'important';
    important.classList.add('homeTasks');
    important.textContent = "Important";
    homeContainer.appendChild(allTask);
    homeContainer.appendChild(today);
    homeContainer.appendChild(next7);
    homeContainer.appendChild(important);

    // Create section where projects will be added in the left sidebar
    const projectsHeader = document.createElement('h1');
    projectsHeader.textContent = 'Projects';
    projectsHeader.id = 'projectsHeader';
    const addProjectDiv = document.createElement('div');
    addProjectDiv.id = 'addProjectDiv'
    const addButton = document.createElement('button');
    addButton.id = 'addButton';
    const addButtonText = document.createElement('span');
    addButtonText.id = 'addButtonText';
    const projectList = document.createElement('ul');
    projectList.id = 'projectList';
    addButton.textContent = '+';
    addButtonText.textContent = 'Add Project';
    addProjectDiv.appendChild(addButton);
    addProjectDiv.appendChild(addButtonText);

    // add it all to sidebar

    sideBar.appendChild(homeHeader);
    sideBar.appendChild(homeContainer);
    sideBar.appendChild(projectsHeader);
    sideBar.appendChild(projectList);
    sideBar.appendChild(addProjectDiv);
    return {sideBar, allTask, today, next7, important, addButton, projectList, addProjectDiv};
};
export {sideBarButtons};
