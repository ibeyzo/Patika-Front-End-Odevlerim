// ELEMENTLERİ SEÇMEK
let taskDOM = document.querySelector("#task")
let btnDOM = document.querySelector("#liveToastBtn")
let listDOM = document.querySelector("#list")
let ulDOM = document.getElementsByTagName("li")

// MEVCUT LİSTEYE CHECKED ve CLOSE VERMEK
for (let i = 0; i< ulDOM.length; i++){
    let closeBtn = document.createElement("span");
    closeBtn.textContent = "\u00D7";
    closeBtn.classList.add("close");
    closeBtn.onclick = removeBtn;
    ulDOM[i].append(closeBtn);
    ulDOM[i].onclick = checkBtn;
}

// BUTONA ADDEVENTLİSTENER EKLEMEK
btnDOM.addEventListener("click", addElement)
document.addEventListener("DomContentLoaded", displayLocalStorage())



// FONSKİYONLAR
function addElement(){
    if(taskDOM.value){
        createList(taskDOM.value)
        setLocalStorage(taskDOM.value)
        taskDOM.value = ""
    }else{
        $(".error").toast("show")
    }
}

function createList(todo){
    const liDOM = document.createElement("li")
    liDOM.innerHTML = todo
    listDOM.appendChild(liDOM)

    const closeBtn = document.createElement("span")
    closeBtn.classList.add("close")
    closeBtn.textContent = "\u00D7"
    liDOM.append(closeBtn)
    
    closeBtn.onclick = removeBtn
    $(".success").toast("show")
    liDOM.onclick = checkBtn
}

function removeBtn(){
    this.parentElement.remove()
    deleteLocalStorage(this.previousSibling.textContent)
}

function checkBtn(){
    this.classList.toggle("checked")
}

// LOCALSTORAGE
function getLocalStorage(){
    let todo;
    if(localStorage.getItem("todos") === null){
        todo = [];
    }else{
        todo = JSON.parse(localStorage.getItem("todos"))
    }
    return todo;
}

function displayLocalStorage(){
    const todos = getLocalStorage()
    todos.forEach(todo => {
        createList(todo)
    });
}

function setLocalStorage(todo){
    let todos = getLocalStorage()
    todos.push(todo)
    localStorage.setItem("todos", JSON.stringify(todos))
}

function deleteLocalStorage(text){
    let todos = getLocalStorage()
    todos.forEach((todo, index) => {
        if(todo === text){
            todos.splice(index, 1)
        }
    })
    localStorage.setItem("todos", JSON.stringify(todos))
}