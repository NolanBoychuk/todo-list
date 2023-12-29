import './style.css';
import {sideBarButtons} from "./sidebar.js";
import { addDays , format, formatDistanceToNowStrict} from "date-fns";
let listOfProjects = [];
let date = new Date().toDateString();
let firstSpace = date.indexOf(' ');
let secondSpace = date.indexOf(' ', firstSpace + 1);
let thirdSpace = date.indexOf(' ', secondSpace + 1);
let month = date.slice(firstSpace + 1, secondSpace);
let day = date.slice(secondSpace + 1, thirdSpace);
let year = date.slice(thirdSpace + 1);
// Initial page layout
const { sideBar, allTask, today, next7, important, addButton, projectList, addProjectDiv} = sideBarButtons();
const container = document.querySelector('#content');
const mainHeader = document.createElement('div');
mainHeader.id = 'mainHeader';
mainHeader.textContent = 'What to do';
const centerContainer = document.createElement('div');
centerContainer.classList.add('centerContainer');
container.appendChild(mainHeader);
container.appendChild(sideBar);
container.appendChild(centerContainer);

allTask.addEventListener('click', function(){
    let tasks = findTasks();
    centerContainer.textContent = '';
    centerContainer.id = 'allTask';
    if(tasks.length !== 0){
        let taskList = document.createElement('ul');
        renderTasks(tasks, taskList);
        centerContainer.appendChild(taskList);
    } else {
        let header = document.createElement('h1');
        header.classList.add('noTasks');
        header.textContent = 'No tasks!';
        centerContainer.appendChild(header);
    };
});
function findTasks(){
    let allTasks = [];
    for(let i = 0; i < listOfProjects.length; i++){
        for(let j = 0; j < listOfProjects[i].taskList.length; j++){
            allTasks.push(listOfProjects[i].taskList[j]);
        };
    };
    return allTasks
}
today.addEventListener('click', function(){
    centerContainer.id = 'today';
    centerContainer.textContent = '';
    let tasks = findTasks();
    let todayTasks = [];
    let month = convertMonth();
    for(let i = 0; i < tasks.length; i++){
        let taskYear = tasks[i].dateText.slice(0, 4);
        let taskMonth = tasks[i].dateText.slice(5, 7);
        let taskDay = tasks[i].dateText.slice(8);
        if(taskYear == year && taskMonth == month && taskDay == day){
            todayTasks.push(tasks[i]);
        };
    };
    if(todayTasks.length !== 0){
        let taskList = document.createElement('ul');
        centerContainer.appendChild(taskList);
        renderTasks(todayTasks, taskList);
    } else{
        let header = document.createElement('h1');
        header.classList.add('noTasks');
        header.textContent = 'No tasks today!';
        centerContainer.appendChild(header);
    }
});
next7.addEventListener('click', function(){
    centerContainer.id = 'next7';
    centerContainer.textContent = '';
    let tasks = findTasks();
    let thisWeekTasks = [];
    for(let i = 0; i < tasks.length; i++){
        let taskYear = tasks[i].dateText.slice(0, 4);
        let taskMonth = tasks[i].dateText.slice(5, 7);
        let taskDay = tasks[i].dateText.slice(8);
        let myDate = new Date(taskYear, taskMonth - 1, taskDay);
        let dateResult = formatDistanceToNowStrict(myDate);
        if(dateResult.includes('day')){
            let firstSpace = dateResult.indexOf(' ');
            let daysAmount = dateResult.slice(0, firstSpace);
            if (daysAmount <= 7 && daysAmount >= 0){
                thisWeekTasks.push(tasks[i]);
            };
        }
        else if(dateResult.includes('hour') || dateResult.includes('second')){
            thisWeekTasks.push(tasks[i]);
        }
    };
    if(thisWeekTasks.length !== 0){
        let taskList = document.createElement('ul');
        centerContainer.appendChild(taskList);
        renderTasks(thisWeekTasks, taskList);
    } else{
        let header = document.createElement('h1');
        header.classList.add('noTasks');
        header.textContent = 'No tasks this week!';
        centerContainer.appendChild(header);
    }
});
important.addEventListener('click', function(){
    centerContainer.id = 'important';
    centerContainer.textContent = '';
    let tasks = findTasks();
    let importantTasks = [];
    for(let i = 0; i < tasks.length; i++){
        if(tasks[i].starred === true){
            importantTasks.push(tasks[i]);
        };
    };
    if(importantTasks.length !== 0){
        let taskList = document.createElement('ul');
        centerContainer.appendChild(taskList);
        renderTasks(importantTasks, taskList);
    } else{
        let header = document.createElement('h1');
        header.classList.add('noTasks');
        header.textContent = 'No important tasks!';
        centerContainer.appendChild(header);
    };

});
function convertMonth(){
    return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].indexOf(month) + 1;
};

addProjectDiv.addEventListener('click', function(){
    const listItem = document.createElement('li');
    listItem.classList.add('listItemEdit');
    openProjectInputting(listItem);
    projectList.appendChild(listItem);
    inputConfirmation();
});
const createProject = function(projectName){
    let taskList = [];
    return {projectName, taskList};
};
function openProjectInputting(listItem){
   let addingDiv = document.createElement('div');
   addingDiv.id = 'addingDiv';
   let input = document.createElement('input');
   input.classList.add('input');
   let addRemoveDiv = document.createElement('div');
   addRemoveDiv.id = 'addRemoveDiv';
   let addProject = document.createElement('button');
   addProject.id = 'addProject';
   addProject.classList.add('inputConfirmButtons');
   let removeProject = document.createElement('button');
   removeProject.id = 'removeProject';
   removeProject.classList.add('inputRemoveButtons');
   addProject.textContent = 'Add';
   removeProject.textContent = 'Remove';
   addRemoveDiv.appendChild(addProject);
   addRemoveDiv.appendChild(removeProject);
   input.type = "text";
   input.maxLength = '20';
   input.placeholder = 'Project Name';
   addingDiv.appendChild(input);
   input.focus();
   addingDiv.appendChild(addRemoveDiv);
   listItem.appendChild(addingDiv);
   inputConfirmation();
   removeProjectFromInputting(listItem);
};
function inputConfirmation(){
    let inputConfirms = document.querySelectorAll('.inputConfirmButtons');
    inputConfirms.forEach(function(button){
        button.addEventListener('click', function(){
            let inputted = button.parentElement.parentElement.querySelector('.input').value;
            let theListItem = button.parentElement.parentElement.parentElement;
            theListItem.removeChild(theListItem.querySelector('#addingDiv'));
            const theName = document.createElement('button');
            theName.classList.add('theName');
            theName.textContent = inputted;
            theListItem.appendChild(theName);
            const editButton = document.createElement('img');
            editButton.src = '../img/dots-vertical.png';
            editButton.classList.add('editButton');
            theListItem.appendChild(editButton);
            theListItem.classList.remove('listItemEdit');
            theListItem.classList.add('listItem');
            establishEditDelete();
            openProject();
            listOfProjects.push(createProject(inputted));
            assignID();
        });
    });
};
function establishEditDelete() {
    let allEdit = document.querySelectorAll('.editButton');
    allEdit.forEach(function (edit) {
        edit.addEventListener('click', function () {
            const listItem = edit.parentElement;

            const existingAddOrRemove = listItem.querySelector('.addOrRemove');
            if (existingAddOrRemove) {
                listItem.removeChild(existingAddOrRemove);
            }

            const addOrRemove = document.createElement('div');
            addOrRemove.classList.add('addOrRemove');
            const rename = document.createElement('button');
            rename.textContent = 'Rename';
            rename.classList.add('renaming');
            const deleting = document.createElement('button');
            deleting.textContent = 'Delete';
            deleting.classList.add('deleting');
            addOrRemove.appendChild(rename);
            addOrRemove.appendChild(deleting);
            listItem.appendChild(addOrRemove);
            let window = document.querySelector('body');
            window.addEventListener('click', handleMenu);
            function handleMenu(event){
                let isClickInMenu = addOrRemove.contains(event.target);
                let isClickOnButton = edit.contains(event.target);
                if(!isClickInMenu && !isClickOnButton && event.target !== edit){
                    if(listItem.contains(addOrRemove)){
                        listItem.removeChild(addOrRemove);
                    };
                };
                window.addEventListener('click', function(){
                    window.removeEventListener('click', handleMenu);
                });
            };
            renaming(listItem);
            deleteItem(listItem);
        });
    });
};
function renaming(listItem) {
    const renameButtons = listItem.querySelectorAll('.renaming');
    renameButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            if(centerContainer.id === button.parentElement.parentElement.id){
                centerContainer.textContent = '';
            };
            const edit = listItem.querySelector('.editButton');
            const name = listItem.querySelector('.theName');
            const inputted = name.value;
            const editWindow = listItem.querySelector('.addOrRemove');
            listItem.removeChild(button.parentElement);
            listItem.removeChild(name);
            listItem.removeChild(edit);
            listItem.classList.remove('listItem');
            listItem.classList.add('listItemEdit');
            openProjectInputting(listItem);
        });
    });
};
function deleteItem(listItem) {
    const deleteButtons = listItem.querySelectorAll('.deleting');
    deleteButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            projectList.removeChild(listItem);
            if(centerContainer.id === button.parentElement.parentElement.id){
                centerContainer.textContent = '';
            };
            let centerList = centerContainer.querySelector('ul');
            if(centerList){
                let list = centerContainer.querySelector('ul');
                let listItems = list.querySelectorAll('.taskListItem');
                listItems.forEach(function(item){
                    if(item.getAttribute('parent') === button.parentElement.parentElement.id){
                        list.removeChild(item);
                    };
                });
            };
            listOfProjects.splice(listItem.id, 1);
            assignID();
        });
    });
};
function openProject(){
    const projectOpenings = document.querySelectorAll('.theName');
    projectOpenings.forEach(function(button){
        button.addEventListener('click', function(){
            centerContainer.textContent = '';
            const projectHeader = document.createElement('h1');
            projectHeader.id = 'project';
            projectHeader.textContent = button.textContent;
            centerContainer.appendChild(projectHeader);
            centerContainer.id = button.parentElement.id;
            const addTaskDiv = document.createElement('div');
            addTaskDiv.id = 'addTaskDiv';
            addTaskDiv.classList.add('addTaskDiv');
            const addTaskButton = document.createElement('button');
            addTaskButton.id = 'addTaskButton';
            const addTaskButtonText = document.createElement('span');
            addTaskButtonText.id = 'addTaskButtonText';
            addTaskButton.textContent = '+';
            addTaskButtonText.textContent = 'Add Task';
            addTaskDiv.appendChild(addTaskButton);
            addTaskDiv.appendChild(addTaskButtonText);
            const taskList = document.createElement('ul');
            taskList.classList.add('taskList');
            centerContainer.appendChild(taskList);
            centerContainer.appendChild(addTaskDiv);

            let tasks = listOfProjects[centerContainer.id].taskList;
            if(tasks.length !== 0){
                renderTasks(tasks, taskList);
                assignTaskID(taskList, centerContainer.id);
            };
            addTaskDiv.addEventListener('click', function(){
                const taskListItem = document.createElement('li');
                taskListItem.classList.add('taskListItemForm');
                taskList.appendChild(taskListItem);
                establishTaskForm(taskListItem);
            });
        });
    });
};
function establishTaskForm(taskListItem){
    let list = taskListItem.parentElement;
    const addTaskDiv = centerContainer.querySelector('.addTaskDiv');
    let theForm = document.createElement('form');
    theForm.classList.add('form');
    const formDiv = document.createElement('div');
    formDiv.classList.add('formDiv');

    const titleDiv = document.createElement('div');
    titleDiv.classList.add('titleDiv');
    const titleInput = document.createElement('input');
    titleInput.classList.add('titleInput');
    titleInput.type = 'text';
    titleInput.placeholder = 'What to do?...';
    const titleInputLabel = document.createElement('label');
    titleInputLabel.classList.add('titleInputLabel');
    titleInputLabel.setAttribute('for', 'titleInput');
    titleInputLabel.textContent = "Title:";
    titleDiv.appendChild(titleInputLabel);
    titleDiv.appendChild(titleInput);

    const descriptionDiv = document.createElement('div');
    descriptionDiv.classList.add('descriptionDiv');
    const descriptionInput = document.createElement('textarea');
    descriptionInput.classList.add('descriptionInput');
    descriptionInput.placeholder = "eg.. I'm just gonna procrastinate aren't I?";
    const descriptionInputLabel = document.createElement('label');
    descriptionInputLabel.classList.add('descriptionInputLabel');
    descriptionInputLabel.setAttribute('for', 'descriptionInput');
    descriptionInputLabel.textContent = 'Description:';
    descriptionDiv.appendChild(descriptionInputLabel);
    descriptionDiv.appendChild(descriptionInput);

    const dateDiv = document.createElement('div');
    dateDiv.classList.add('dateDiv');
    const dateInput = document.createElement('input');
    dateInput.classList.add('dateInput');
    dateInput.type = 'date';
    const dateInputLabel = document.createElement('label');
    dateInputLabel.classList.add('dateInputLabel');
    dateInputLabel.textContent = 'Date:';
    dateDiv.appendChild(dateInputLabel);
    dateDiv.appendChild(dateInput);

    const submitRemoveForm = document.createElement('div');
    submitRemoveForm.classList.add('submitRemoveForm');
    const submitButton = document.createElement('button');
    submitButton.classList.add('submitTaskButton');
    submitButton.textContent = 'Add';
    submitButton.type = 'submit';
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Delete';
    removeButton.classList.add('removeTaskButton');
    removeButton.type = 'button';
    submitRemoveForm.appendChild(submitButton);
    submitRemoveForm.appendChild(removeButton);
    
    formDiv.appendChild(titleDiv);
    formDiv.appendChild(descriptionDiv);
    formDiv.appendChild(dateDiv);
    formDiv.appendChild(submitRemoveForm);
    
    theForm.appendChild(formDiv);
    taskListItem.appendChild(theForm);
    establishTaskSubmit(formDiv, taskListItem);
    removeTaskInputting(taskListItem);
};
function removeTaskInputting(listItem){
    let taskList = listItem.parentElement;
    let deleteButton = listItem.querySelector('.removeTaskButton');
    deleteButton.addEventListener(('click'),function(){
        taskList.removeChild(listItem);
    });
};

function renderTasks(tasks, taskList){
    taskList.textContent = '';
    for(let i = 0; i < tasks.length; i++){
        let starButton = document.createElement('img');
        if(tasks[i].starred === false){
            starButton.src = '../img/star-light.svg';
        }else {
            starButton.src = '../img/star-dark.svg';
        }
        starButton.classList.add('starButton');
        let editButton = document.createElement('img');
        editButton.src = '../img/dots-vertical.svg';
        editButton.classList.add('editTaskButton');
        let titleDiv = document.createElement('h3');
        titleDiv.textContent = tasks[i].titleText;
        let descriptionDiv = document.createElement('div');
        descriptionDiv.textContent = tasks[i].descriptionText;
        let dateEditDiv = document.createElement('div');
        dateEditDiv.classList.add('dateEditDiv');
        let dateDiv = document.createElement('div');
        dateDiv.textContent = tasks[i].dateText;
        dateDiv.classList.add('dateDivText');
        if(dateDiv.textContent === ''){
            dateDiv.textContent = 'No due date';
        }
        let titleDescription = document.createElement('div');
        let listItem = document.createElement('li');
        listItem.classList.add('taskListItem');
        listItem.id = tasks[i].index;
        titleDescription.classList.add('titleDescription');
        titleDescription.appendChild(titleDiv);
        titleDescription.appendChild(descriptionDiv);
        dateEditDiv.appendChild(dateDiv);
        dateEditDiv.appendChild(starButton);
        dateEditDiv.appendChild(editButton);
        listItem.appendChild(titleDescription);
        listItem.appendChild(dateEditDiv);
        listItem.setAttribute('parent', tasks[i].parent);
        editTask(listItem, editButton);
        handleStar(starButton, tasks[i]);
        taskList.appendChild(listItem);
        };
};
function handleStar(starButton, obj){
    starButton.addEventListener('click', function(){
        if(obj.starred === false){
            obj.starred = true;
            starButton.src = '../img/star-dark.svg';
        }else if(obj.starred === true){
            obj.starred = false;
            starButton.src = '../img/star-light.svg';
        }
    });
};
function editTask(listItem, editButton){
    editButton.addEventListener('click', function(){
            let dateEditDiv = listItem.querySelector('.dateEditDiv');
            const addOrRemove = document.createElement('div');
            addOrRemove.classList.add('addOrRemoveTask');
            const rename = document.createElement('button');
            rename.textContent = 'Edit';
            rename.classList.add('editTask');
            const deleting = document.createElement('button');
            deleting.textContent = 'Delete';
            deleting.classList.add('deletingTask');
            addOrRemove.appendChild(rename);
            addOrRemove.appendChild(deleting);
            dateEditDiv.appendChild(addOrRemove);
            let window = document.querySelector('body');
            window.addEventListener('click', handleMenu);
            function handleMenu(event){
                let isClickInMenu = addOrRemove.contains(event.target);
                let isClickOnButton = editButton.contains(event.target);
                if(!isClickInMenu && !isClickOnButton && event.target !== editButton){
                    if(dateEditDiv.contains(addOrRemove)){
                        dateEditDiv.removeChild(addOrRemove);
                    };
                };
                window.addEventListener('click', function(){
                    window.removeEventListener('click', handleMenu);
                });
            };
            deleteTask(deleting, listItem);
            renameTask(rename, listItem);
    });
};
function deleteTask(button, listItem){
    button.addEventListener('click', function(){
        listOfProjects[Number(listItem.getAttribute('parent'))].taskList.splice(listItem.id, 1);
        let list = listItem.parentElement;
        let parent = listItem.getAttribute('parent');
        list.removeChild(listItem);
        assignTaskID(list, parent);
    });
};
function renameTask(button, listItem){
    button.addEventListener('click', function(){
        let title = listOfProjects[listItem.getAttribute('parent')].taskList[listItem.id].titleText;
        let description = listOfProjects[listItem.getAttribute('parent')].taskList[listItem.id].descriptionText;
        let date = listOfProjects[listItem.getAttribute('parent')].taskList[listItem.id].dateText;
        listOfProjects[listItem.getAttribute('parent')].taskList.splice(listItem.id, 1);
        listItem.textContent = '';
        listItem.classList.remove('taskListItem');
        listItem.classList.add('taskListItemForm');
        establishTaskForm(listItem);
        let form = listItem.querySelector('.formDiv');
        let titleDiv = form.querySelector('.titleInput');
        titleDiv.value = title;
        let descriptionDiv = form.querySelector('.descriptionInput');
        descriptionDiv.value = description;
        let dateDiv = form.querySelector('.dateInput');
        dateDiv.value = date;
    });
};
function assignTaskID(list, parent){
    let relevantItems = [];
    let listItems = list.querySelectorAll('.taskListItem')
    listItems.forEach(function(item){
        if(item.getAttribute('parent') === parent){
            relevantItems.push(item);
        };
    });
    for(let i = 0; i < relevantItems.length; i++){
        relevantItems[i].id = i;
        listOfProjects[parent].taskList[i].index = i;
    };
};
function establishTaskSubmit(formDiv, listItem){
    const submitButton = formDiv.querySelector('.submitTaskButton');
    submitButton.addEventListener('click', function(event){
        listItem.removeChild(listItem.querySelector('.form'));
        let titleText = formDiv.querySelector('.titleInput').value;
        let descriptionText = formDiv.querySelector('.descriptionInput').value;
        let dateText = formDiv.querySelector('.dateInput').value;
        let starred = false;
        if(centerContainer.id[0] === 'a' || centerContainer.id[0] === 't'|| centerContainer.id[0] === 'n'|| centerContainer.id[0] === 'i'){
            let parent = listItem.getAttribute('parent');
            let list = listItem.parentElement;
            listOfProjects[listItem.getAttribute('parent')].taskList.push({titleText, descriptionText, dateText, starred, parent});
                if(centerContainer.id[0] === 'a'){
                    let tasks = findTasks();
                    if(tasks.length !== 0){
                        renderTasks(tasks, list);
                        assignTaskID(list, parent);
                    };
                }
                else if(centerContainer.id[0] === 't'){
                    let tasks = findTasks();
                    let todayTasks = [];
                    let month = convertMonth();
                    for(let i = 0; i < tasks.length; i++){
                        let taskYear = tasks[i].dateText.slice(0, 4);
                        let taskMonth = tasks[i].dateText.slice(5, 7);
                        let taskDay = tasks[i].dateText.slice(8);
                        if(taskYear == year && taskMonth == month && taskDay == day){
                            todayTasks.push(tasks[i]);
                        };
                    };
                    if(todayTasks.length !== 0){
                        renderTasks(todayTasks, list);
                        assignTaskID(list, parent);
                    };
                }
                else if(centerContainer.id[0] === 'n'){
                    let tasks = findTasks();
                    let thisWeekTasks = [];
                    for(let i = 0; i < tasks.length; i++){
                        let taskYear = tasks[i].dateText.slice(0, 4);
                        let taskMonth = tasks[i].dateText.slice(5, 7);
                        let taskDay = tasks[i].dateText.slice(8);
                        let myDate = new Date(taskYear, taskMonth - 1, taskDay);
                        let dateResult = formatDistanceToNowStrict(myDate);
                        if(dateResult.includes('day')){
                            let firstSpace = dateResult.indexOf(' ');
                            let daysAmount = dateResult.slice(0, firstSpace);
                            if (daysAmount <= 7 && daysAmount >= 0){
                                thisWeekTasks.push(tasks[i]);
                            };
                        }
                        else if(dateResult.includes('hour') || dateResult.includes('second')){
                            thisWeekTasks.push(tasks[i]);
                        }
                    };
                    if(thisWeekTasks.length !== 0){
                        renderTasks(thisWeekTasks, list);
                        assignTaskID(list, parent);
                    };
                }
                else if (centerContainer.id[0] === 'i'){
                    let tasks = findTasks();
                    let importantTasks = [];
                    for(let i = 0; i < tasks.length; i++){
                        if(tasks[i].starred === true){
                            importantTasks.push(tasks[i]);
                        };
                    };
                    if(importantTasks.length !== 0){
                        renderTasks(importantTasks, list);
                        assignTaskID(list, parent);
                    };
                }
        }
        else{
            let parent = centerContainer.id;
            listOfProjects[centerContainer.id].taskList.push({titleText, descriptionText, dateText, starred, parent});
            let tasks = listOfProjects[centerContainer.id].taskList;
            let list = listItem.parentElement;
            if(tasks.length !== 0){
                renderTasks(tasks, list);
                assignTaskID(list, centerContainer.id);
            };
        event.preventDefault();
        }
    });
};
function deepCopy(obj) {
    if (Array.isArray(obj)) {
        return obj.map(item => deepCopy(item));
    } else if (typeof obj === 'object' && obj !== null) {
        const copy = {};
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                copy[key] = deepCopy(obj[key]);
            };
        };
        return copy;
    } else {
        return obj;
    };
};
function assignID(){
    let listItems = sideBar.querySelectorAll('.listItem');
    let index = 0;
    listItems.forEach(function(item){
        item.id = index;
        listOfProjects[index].index = index;
        index += 1;
    });
};
function removeProjectFromInputting(listItem){
    let projectList = sideBar.querySelector('#projectList');
    let removeProjectButton = listItem.querySelector('.inputRemoveButtons');
    removeProjectButton.addEventListener('click', function(){
        if(listItem.hasAttribute('id')){
            listOfProjects.splice(listItem.id, 1);
            assignID();
        };
        projectList.removeChild(listItem)
        console.log(JSON.parse(JSON.stringify(listOfProjects)));
    });
};