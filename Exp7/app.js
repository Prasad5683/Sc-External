function addTask() {
    var task = document.getElementById("task").value;
    var list = document.getElementById("list");
    list.innerHTML += "\n    <li>\n    ".concat(task, "\n    <button onclick = \"this.parentElement.style.textDecoration='line-through'\">\n    Done\n    </button>\n    <button onclick = \"this.parentElement.remove()\">\n    Delete\n    </button>\n    </li>\n    ");
    document.getElementById("task").value = "";
}
