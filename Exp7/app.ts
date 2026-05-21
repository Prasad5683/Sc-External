// full Code :
// function addTask (){
//     let task = (document.getElementById("task")as HTMLInputElement).value;
//     let list = (document.getElementById("list")as HTMLUListElement);
//     list.innerHTML+=`
//     <li>
//     ${task}
//     <button onclick = "this.parentElement.style.textDecoration='line-through'">
//     Done
//     </button>
//     <button onclick = "this.parentElement.remove()">
//     Delete
//     </button>
//     </li>
//     `;
//     (document.getElementById("task") as HTMLInputElement).value="";

// }

// ======================================
// Todo List Program
// Marathi Explanation in Comments
// ======================================



// --------------------------------------
// addTask Function
// नवीन task list मध्ये add करतो
// --------------------------------------
function addTask() {

    
    // --------------------------------------
    // HTML मधून task input घेतो
    // --------------------------------------
    let task =
        (document.getElementById("task") as HTMLInputElement).value;



    // --------------------------------------
    // UL list पकडतो
    // जिथे task display होणार
    // --------------------------------------
    let list =
        (document.getElementById("list") as HTMLUListElement);




    // --------------------------------------
    // नवीन task HTML मध्ये add करतो
    // innerHTML += म्हणजे जुने ठेवून नवीन add
    // --------------------------------------
    list.innerHTML += `

    <li>

    ${task}

    
    <!-- Done Button -->
    <button onclick="this.parentElement.style.textDecoration='line-through'">

    Done

    </button>



    <!-- Delete Button -->
    <button onclick="this.parentElement.remove()">

    Delete

    </button>

    </li>
    `;




    // --------------------------------------
    // Task add झाल्यावर input box रिकामा करतो
    // --------------------------------------
    (document.getElementById("task") as HTMLInputElement).value = "";

}




/*

=========================================
LINE BY LINE EASY UNDERSTANDING 😄
=========================================


1. Input घेतो
----------------
let task = ...

👉 User ने लिहिलेला task घेतो


2. List पकडतो
----------------
let list = ...

👉 UL element पकडतो
👉 जिथे task show होणार


3. innerHTML +=
----------------

👉 नवीन HTML add करतो
👉 जुने delete होत नाही


4. <li>
----------------

👉 प्रत्येक task list item मध्ये ठेवतो


5. ${task}
----------------

👉 User ने लिहिलेला task display करतो


6. Done Button
----------------

onclick="this.parentElement.style.textDecoration='line-through'"

👉 this = button
👉 parentElement = button चा parent म्हणजे <li>

👉 line-through म्हणजे task वर line मारतो

Meaning:
Task completed ✅


7. Delete Button
----------------

onclick="this.parentElement.remove()"

👉 पूर्ण <li> delete करतो


8. value=""
----------------

👉 Input box रिकामा करतो



=========================================
MEMORY TRICK 😄
=========================================

I → Input घे
L → List पकड
A → Add HTML
D → Done button
R → Remove button
C → Clear input

"ILADRC"


=========================================
IMPORTANT FUNCTIONS
=========================================

getElementById() → HTML element पकडणे

innerHTML += → नवीन HTML add करणे

style.textDecoration='line-through'
→ Text वर line मारणे

remove()
→ Element delete करणे

value=""
→ Input clear करणे


=========================================

*/ 
