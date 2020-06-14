const addItem = document.getElementById("add-item")
const addbtn = document.getElementById("add-btn")
const list = document.getElementById("list-sec")
const listItem = document.getElementById("list-item")
const listInput = document.getElementById("list-input")
const dltbtn = document.getElementById("dlt-btn");

function insert(x) {
   
    list.insertAdjacentHTML("beforeend", `<li class="list-item" id="list-item">
         <div class="list">
            <div class="list-input">
               ${x}
            </div>
            <div class="edit-btn">
                <button onclick="editMe(this)">Edit</button>
            </div>
            <div class="dlt-btn" id="dlt-btn">
                <button onclick="deleteItem(this)">Delete</button>
            </div>
          </div>
        </li>`)
};

addbtn.addEventListener("click",() => {
    if (addItem.value === " ") {
        return;
    }
    insert(addItem.value);
    addItem.value="";
});

function deleteItem(deleteThis) {
    deleteThis.parentElement.parentElement.remove();
}

function editMe (editThis) {
   var edited = prompt("you can edit here");
   editThis.parentElement.parentElement.firstElementChild.innerHTML= edited;
}




