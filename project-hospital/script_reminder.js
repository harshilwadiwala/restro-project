// Medication list array
var medicationList = [];

// Function to add medication
function addMedication() {
  var medicationName = document.getElementById('medicationName').value;
  var medicationTime = document.getElementById('medicationTime').value;

  // Create a medication object
  var medication = {
    name: medicationName,
    time: medicationTime
  };

  // Add the medication to the list
  medicationList.push(medication);

  // Refresh the medication list display
  displayMedicationList();

  // Set the timeout for medication reminder
  var currentTime = new Date();
  var medicationTimeParts = medicationTime.split(':');
  var medicationDateTime = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate(), parseInt(medicationTimeParts[0]), parseInt(medicationTimeParts[1]), 0);
  var timeDiff = medicationDateTime.getTime() - currentTime.getTime();

  // Display the alert when medication time elapses
  setTimeout(function() {
    alert('It is time to take your medication: ' + medication.name);
  }, timeDiff);

  // Clear the form fields
  document.getElementById('medicationName').value = '';
  document.getElementById('medicationTime').value = '';
}

// Function to handle form submission
document.getElementById('medicationForm').addEventListener('submit', function(e) {
  e.preventDefault();
  addMedication();
});

// Function to display the medication list
function displayMedicationList() {
  var medicationListElement = document.getElementById('medicationList');
  medicationListElement.innerHTML = '';

  for (var i = 0; i < medicationList.length; i++) {
    var medicationItem = medicationList[i];
    var listItem = document.createElement('li');
    listItem.classList.add('medication-item');
    listItem.innerHTML = '<span class="medication-name">' + medicationItem.name + '</span>' +
                         '<span class="medication-time">' + medicationItem.time + '</span>' +
                         '<button class="edit-button" onclick="editMedication(' + i + ')">Edit</button>' +
                         '<button class="delete-button" onclick="deleteMedication(' + i + ')">Delete</button>';

    medicationListElement.appendChild(listItem);
  }
}

// Function to handle edit button click
function editMedication(index) {
  var medicationItem = medicationList[index];
  var newMedicationName = prompt('Enter new medication name:', medicationItem.name);
  var newMedicationTime = prompt('Enter new medication time:', medicationItem.time);

  if (newMedicationName && newMedicationTime) {
    medicationList[index].name = newMedicationName;
    medicationList[index].time = newMedicationTime;
    displayMedicationList();
  }
}

// Function to handle delete button click
function deleteMedication(index) {
  medicationList.splice(index, 1);
  displayMedicationList();
}

// Initial display of the medication list
displayMedicationList();
