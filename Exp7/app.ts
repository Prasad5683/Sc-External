function addTask (){
    let task = (document.getElementById("task")as HTMLInputElement).value;
    let list = (document.getElementById("list")as HTMLUListElement);
    list.innerHTML+=`
    <li>
    ${task}
    <button onclick = "this.parentElement.style.textDecoration='line-through'">
    Done
    </button>
    <button onclick = "this.parentElement.remove()">
    Delete
    </button>
    </li>
    `;
    (document.getElementById("task") as HTMLInputElement).value="";

}