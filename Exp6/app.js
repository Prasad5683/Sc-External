var Contact = /** @class */ (function () {
    function Contact(name, phone) {
        this.name = name;
        this.phone = phone;
    }
    return Contact;
}());
var contacts = [];
function addContact() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    if (name == "" || phone == "") {
        alert("Enter All Details ");
        return;
    }
    contacts.push(new Contact(name, phone));
    showContacts();
    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
}
function showContacts() {
    var list = document.getElementById("contactList");
    list.innerHTML = "";
    for (var i = 0; i < contacts.length; i++) {
        list.innerHTML +=
            "\n        <li>\n          Name : ".concat(contacts[i].name, "<br>\n          Phone : ").concat(contacts[i].phone, " <br>\n          <button onclick=\"deleteContact (").concat(i, ")\">\n          Delete\n          </button>\n         </li>\n\n        ");
    }
}
function deleteContact(index) {
    contacts.splice(index, 1);
    showContacts();
}
function searchContact() {
    var search = document.getElementById("search").value.toLowerCase();
    var list = document.getElementById("contactList");
    list.innerHTML = "";
    for (var i = 0; i < contacts.length; i++) {
        if (contacts[i].name.toLowerCase().indexOf(search) != -1) {
            list.innerHTML += "\n        <li>\n        Name : ".concat(contacts[i].name, " <br>\n        Phone : ").concat(contacts[i].phone, "\n        ");
        }
    }
}
