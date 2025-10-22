//Update Jobs applied
const availableInput = document.getElementById("counterAvailableJob");
//availableInput.textContent = '0';
//Update jobs available
//const appliedInput = document.getElementById("counterAppliedJob");
//appliedInput.textContent = '0';

document.getElementById('myForm').addEventListener('submit', function(event){
  
  //stop the page reload
  event.preventDefault();
  
  //get the data
  const linkInput = document.getElementById('link');
  const linkValue = linkInput.value.trim();
  
  //simple validation
  if (linkValue ===''){
    alert('Link is required!');
    return; //stop the function if lavidation fails
  }

    //function to get only date
    function getOnlyDateString(dateObject) {
      return dateObject.toDateString();
      }

    const now = new Date();
    const dateOnly = getOnlyDateString(now);
   
// Test to see if the browser supports the HTML template element by checking
// for the presence of the template element's content attribute.
if ("content" in document.createElement("template")) {
  // Instantiate the table with the existing HTML tbody
  // and the row with the template
  const tbody = document.querySelector("tbody");
  const template = document.querySelector("#jobrow");

  // Clone the new row and insert it into the table
  const clone = template.content.cloneNode(true);
  let td = clone.querySelectorAll("td");
  td[0].textContent = dateOnly;
  td[1].textContent = linkValue;

  tbody.appendChild(clone);

} else {
  // Find another way to add the rows to the table because
  // the HTML template element is not supported.
}
  
  //clear the form
  document.getElementById('myForm').reset();

  //give feedback that entry was added
  console.log(`New entry added:${linkValue}`);


//update values from the rows of the table
 var tableCounter = document.getElementById("dataBody").rows.length;
 availableInput.textContent = tableCounter;

});

function updateCheckedCount() {
  // 1. Select all checkboxes that belong to the table rows
  const checkboxes = document.querySelectorAll('#dataTable .row-checkedbox');

  // 2. Filter the NodeList to only include checked checkboxes
  // and get the length of the resulting array
   let count = 0;
  checkboxes.forEach(checkbox => {
     if (checkbox.checked) {
       count++;
     }
   });
  
  // A more modern way using Array.from and filter:
  //const count = Array.from(checkboxes).filter(checkbox => checkbox.checked).length;

  // 3. Select the text input field
  const countField = document.getElementById('counterAppliedJob');

  // 4. Update the value of the text field
  countField.textContent = count;
}

// Optional: Run the function once on page load to initialize the count
document.addEventListener('DOMContentLoaded', updateCheckedCount);

function clearValue() {
  document.getElementById('myForm').reset();
}