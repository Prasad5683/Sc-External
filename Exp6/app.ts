// ================================
// Contact Management System
// Marathi Explanation in Comments
// ================================


// --------------------------------
// Contact class
// एका contact ची माहिती store करण्यासाठी
// --------------------------------
class Contact {

    // नाव store करणार
    name: string;

    // फोन नंबर store करणार
    phone: string;


    // Constructor
    // Object तयार होताना values देण्यासाठी वापरतो
    constructor(name: string, phone: string) {

        // this.name मध्ये आलेले नाव store करतो
        this.name = name;

        // this.phone मध्ये आलेला phone store करतो
        this.phone = phone;
    }
}



// --------------------------------
// सर्व contacts ठेवण्यासाठी array
// सुरुवातीला रिकामी आहे
// --------------------------------
let contacts: Contact[] = [];



// --------------------------------
// Add Contact Function
// नवीन contact add करतो
// --------------------------------
function addContact() {

    // HTML मधून name input घेतो
    let name =
        (document.getElementById("name") as HTMLInputElement).value;

    // HTML मधून phone input घेतो
    let phone =
        (document.getElementById("phone") as HTMLInputElement).value;



    // --------------------------------
    // Validation
    // काही रिकामे असेल तर alert दाखवतो
    // --------------------------------
    if (name == "" || phone == "") {

        alert("Enter All Details");

        // function थांबवतो
        return;
    }



    // --------------------------------
    // नवीन Contact object तयार करून
    // array मध्ये add करतो
    // --------------------------------
    contacts.push(new Contact(name, phone));



    // --------------------------------
    // Updated contacts screen वर दाखवतो
    // --------------------------------
    showContacts();



    // --------------------------------
    // Input box रिकामे करतो
    // --------------------------------
    (document.getElementById("name") as HTMLInputElement).value = "";

    (document.getElementById("phone") as HTMLInputElement).value = "";
}





// --------------------------------
// Show Contacts Function
// सर्व contacts display करतो
// --------------------------------
function showContacts() {

    // UL list पकडतो
    let list =
        document.getElementById("contactList") as HTMLUListElement;



    // जुनी list clear करतो
    list.innerHTML = "";



    // --------------------------------
    // Loop वापरून सर्व contacts दाखवतो
    // --------------------------------
    for (let i = 0; i < contacts.length; i++) {

        // HTML मध्ये contact add करतो
        list.innerHTML += `

        <li>

        Name : ${contacts[i].name} <br>

        Phone : ${contacts[i].phone} <br>


        <!-- Delete button -->
        <button onclick="deleteContact(${i})">

        Delete

        </button>

        </li>
        `;
    }
}




// --------------------------------
// Delete Contact Function
// Array मधून contact delete करतो
// --------------------------------
function deleteContact(index: number) {

    // splice(start,count)

    // index पासून 1 element delete करतो
    contacts.splice(index, 1);



    // Updated list परत show करतो
    showContacts();
}





// --------------------------------
// Search Contact Function
// नावाने contact शोधतो
// --------------------------------
function searchContact() {

    // Search text घेतो
    // toLowerCase() वापरून small letter मध्ये convert करतो
    let search =
        (document.getElementById("search") as HTMLInputElement)
            .value.toLowerCase();



    // UL list पकडतो
    let list =
        (document.getElementById("contactList") as HTMLUListElement);



    // जुनी list clear करतो
    list.innerHTML = "";



    // --------------------------------
    // सर्व contacts मध्ये search करतो
    // --------------------------------
    for (let i = 0; i < contacts.length; i++) {



        // indexOf(search)
        // search word मिळाला तर -1 पेक्षा वेगळे येते
        if (contacts[i].name.toLowerCase().indexOf(search) != -1) {



            // मिळालेला contact display करतो
            list.innerHTML += `

            <li>

            Name : ${contacts[i].name} <br>

            Phone : ${contacts[i].phone}

            </li>
            `;
        }
    }
}



/*

=========================================
TRICK TO REMEMBER THIS CODE 😄
=========================================

1. Class Contact
   ↓
   Contact चे format तयार

2. contacts Array
   ↓
   सर्व contacts store

3. addContact()
   ↓
   Input घे → Validate → Push → Show

4. showContacts()
   ↓
   Loop वापरून display

5. deleteContact()
   ↓
   splice वापरून delete

6. searchContact()
   ↓
   indexOf वापरून search


=========================================
SHORTCUT MEMORY TRICK
=========================================

C → Class
A → Add
S → Show / Search
D → Delete

"CASD"

=========================================
IMPORTANT FUNCTIONS
=========================================

push()       → Add
splice()     → Delete
indexOf()    → Search
innerHTML    → Display
toLowerCase()→ Small Letter
getElementById() → HTML element पकडणे

=========================================

full Code : 
 class Contact {
name : string;
phone : string;

constructor(name : string ,phone :string  ){
    this.name=name ;
    this.phone=phone;
}
}

let contacts : Contact[]=[];

function addContact (){
    let name = (document.getElementById("name")as HTMLInputElement).value;
    let phone = (document.getElementById("phone")as HTMLInputElement).value;
    if (name =="" || phone==""){
        alert("Enter All Details ");
        return;
    }

    contacts.push(new Contact(name ,phone));
    showContacts ();

    (document.getElementById("name")as HTMLInputElement).value="";
     (document.getElementById("phone")as HTMLInputElement).value="";


}

function showContacts(){
    let list = document.getElementById("contactList") as  HTMLUListElement;
    list.innerHTML="";
    for(let i=0;i<contacts.length;i++){
        list.innerHTML+=
        `
        <li>
          Name : ${contacts[i].name}<br>
          Phone : ${contacts[i].phone} <br>
          <button onclick="deleteContact (${i})">
          Delete
          </button>
         </li>

        `;
    }
}

function deleteContact (index : number){
    contacts.splice(index,1);
    showContacts();

}

function searchContact(){
    let search = (document.getElementById("search") as HTMLInputElement).value.toLowerCase();
    let  list = (document.getElementById("contactList")as HTMLUListElement);
    list.innerHTML="";
    for ( let i=0;i<contacts.length;i++){
       if (contacts[i].name.toLowerCase().indexOf(search)!=-1){
        list.innerHTML+=`
        <li>
        Name : ${contacts[i].name} <br>
        Phone : ${contacts[i].phone}
        `;
       }

    }
}

*/
