// app.js
function showEmployeeDetails() {
    const employeeName = document.getElementById('employeeName').value;
    const dob = document.getElementById('dob').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
  
    const languages = [];
    const languageCheckboxes = document.querySelectorAll('input[name="language"]:checked');
    languageCheckboxes.forEach((checkbox) => {
      languages.push(checkbox.value);
    });
  
    if (employeeName.length < 5) {
      alert('Employee name must be at least 5 characters.');
      return;
    }
  
    const tableBody = document.querySelector('#employeeTable tbody');
    const newRow = tableBody.insertRow();
    newRow.insertCell(0).textContent = employeeName;
    newRow.insertCell(1).textContent = dob;
    newRow.insertCell(2).textContent = gender;
    newRow.insertCell(3).textContent = languages.join(', ');
  
    // Clear form fields after displaying details
    document.getElementById('employeeForm').reset();
  }
  