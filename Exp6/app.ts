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