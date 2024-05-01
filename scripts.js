function openEntryForm() {
  document.getElementById("entryForm").style.display = "block";
  document.getElementById("entriesTable").style.display = "none";
}

function openEntriesTable() {
  document.getElementById("entryForm").style.display = "none";
  document.getElementById("entriesTable").style.display = "block";
  displayEntries();
}

function saveEntry() {
  var companyName = document.getElementById("companyName").value;
  var wasteType = document.getElementById("wasteType").value;
  var checkInTime = document.getElementById("checkInTime").value;
  var checkOutTime = document.getElementById("checkOutTime").value;
  var created = new Date().toLocaleString();
  var updated = new Date().toLocaleString();

  var table = document.getElementById("entriesTableData");
  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  cell1.innerHTML = companyName;
  cell2.innerHTML = wasteType;
  cell3.innerHTML = checkInTime;
  cell4.innerHTML = checkOutTime;
  cell5.innerHTML = created;
  cell6.innerHTML = updated;
}

function displayEntries() {
  // You can fetch entries from a database here and populate the table
}
