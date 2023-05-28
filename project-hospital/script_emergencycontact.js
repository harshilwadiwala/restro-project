// Function to handle form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    saveContact();
  });
  
  // Function to save the contact information
  function saveContact() {
    var patientName = document.getElementById('patientName').value;
    var relationship = document.getElementById('relationship').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var age= document.getElementById('age').value;
    var address = document.getElementById('address').value;
    var gender = document.getElementById('gender').value;
  
    // Create a new contact object
    var contact = {
      patientName: patientName,
      relationship: relationship,
      phoneNumber: phoneNumber,
      age:age,
      gender:gender,
      address:address,
    };
  
    // Clear the form fields
    document.getElementById('patientName').value = '';
    document.getElementById('relationship').value = '';
    document.getElementById('phoneNumber').value = '';
    document.getElementById('age').value = '';
    document.getElementById('gender').value = '';
    document.getElementById('address').value = '';
  
    // Display the contact information
    displayContact(contact);
  }
  
  // Function to display the contact information
  function displayContact(contact) {
    var contactList = document.getElementById('contactList');
  
    var contactItem = document.createElement('div');
    contactItem.classList.add('contact-item');
    contactItem.innerHTML = '<p><strong>Patient Name:</strong> ' + contact.patientName + '</p>' +
                            '<p><strong>Relationship:</strong> ' + contact.relationship + '</p>' +
                            '<p><strong>Phone Number:</strong> ' + contact.phoneNumber + '</p>'+
                            '<p><strong>Patient age:</strong> ' + contact.age + '</p>' +
                            '<p><strong>Patient address:</strong> ' + contact.address + '</p>' +
                            '<p><strong>Patient gender:</strong> ' + contact.gender + '</p>' ;
  
    contactList.appendChild(contactItem);
  }
  
//   =========================
// Function to update the contact list based on the search query
function updateContactList() {
    var contactList = document.getElementById('contactList');
    contactList.innerHTML = '';
  
    var contacts = localStorage.getItem('contacts');
  
    if (contacts) {
      contacts = JSON.parse(contacts);
  
      var searchInput = document.getElementById('searchInput');
      var searchQuery = searchInput.value.toLowerCase();
  
      for (var i = 0; i < contacts.length; i++) {
        var contactItem = document.createElement('div');
        contactItem.classList.add('contact-item');
  
        // Check if the contact matches the search query
        if (
          contacts[i].patientName.toLowerCase().includes(searchQuery) ||
          contacts[i].relationship.toLowerCase().includes(searchQuery) ||
          contacts[i].phoneNumber.toLowerCase().includes(searchQuery)
        ) {
          contactItem.innerHTML = '<p><strong>Patient Name:</strong> ' + contacts[i].patientName + '</p>' +
                                  '<p><strong>Relationship:</strong> ' + contacts[i].relationship + '</p>' +
                                  '<p><strong>Phone Number:</strong> ' + contacts[i].phoneNumber + '</p>' +
                                  '<p><strong>Patient age:</strong> ' + contacts[i].age + '</p>' +
                                  '<p><strong>Patient address:</strong> ' + contacts[i].address + '</p>' +
                                  '<p><strong>Patient gender:</strong> ' + contacts[i].gender+ '</p>' +
                                  '<button class="btn btn-danger delete-contact" data-index="' + i + '">Delete</button>' +
                                  '<button class="btn btn-primary edit-contact" data-index="' + i + '">Edit</button>';
  
          contactList.appendChild(contactItem);
        }
      }
    }
  }
  
  // Event listener for search input
  document.getElementById('searchInput').addEventListener('input', function() {
    updateContactList();
  });
  
  // Event listener for delete buttons
  document.getElementById('contactList').addEventListener('click', function(e) {
    if (e.target.classList.contains('delete-contact')) {
      var index = e.target.getAttribute('data-index');
      deleteContact(index);
      updateContactList();
    }
  });
  
  // Event listener for edit buttons
  document.getElementById('contactList').addEventListener('click', function(e) {
    if (e.target.classList.contains('edit-contact')) {
      var index = e.target.getAttribute('data-index');
      editContact(index);
    }
  });
  
  // Function to delete a contact
  function deleteContact(index) {
    var contacts = localStorage.getItem('contacts');
  
    if (contacts) {
      contacts = JSON.parse(contacts);
      contacts.splice(index, 1);
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }
  
  // Function to edit a contact
  function editContact(index) {
    var contacts = localStorage.getItem('contacts');
  
    if (contacts) {
      contacts = JSON.parse(contacts);
  
      var contact = contacts[index];
  
      document.getElementById('patientName').value = contact.patientName;
      document.getElementById('relationship').value = contact.relationship;
      document.getElementById('phoneNumber').value = contact.phoneNumber;
      document.getElementById('age').value = contact.age;
      document.getElementById('gender').value = contact.gender
      document.getElementById('address').value = contact.address;
    }
  }
  
//   Function to save a contact
  function saveContact() {
    var patientName = document.getElementById('patientName').value;
    var relationship = document.getElementById('relationship').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var age = document.getElementById('age').value;
    var gender = document.getElementById('gender').value;
    var address = document.getElementById('address').value;
  
    var contact = {
      patientName: patientName,
      relationship: relationship,
      phoneNumber: phoneNumber,
      age: age,
      gender: gender,
      address:address
      
    };
  
    var contacts = localStorage.getItem('contacts');
  
    if (contacts) {
      contacts = JSON.parse(contacts);
      contacts.push(contact);
    } else {
      contacts = [contact];
    }
  
    localStorage.setItem('contacts', JSON.stringify(contacts));
  
    document.getElementById('patientName').value = '';
    document.getElementById('relationship').value = '';
    document.getElementById('phoneNumber').value = '';
    document.getElementById('address').value = '';
    document.getElementById('gender').value = '';
    document.getElementById('age').value = '';
  
}
updateContactList();
  
  // Event listener for form submit
  document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    saveContact();
  });


  // Get the search input element
const searchInput = document.getElementById('searchInput');

// Get the contact list element
const contactList = document.getElementById('contactList');

// Add an event listener to the search input
searchInput.addEventListener('input', function() {
  // Check if the search input value is empty
  if (searchInput.value.trim() === '') {
    // If the search input is empty, hide the contact list
    contactList.classList.add('hidden');
  } else {
    // If the search input is not empty, show the contact list
    contactList.classList.remove('hidden');
  }
});




