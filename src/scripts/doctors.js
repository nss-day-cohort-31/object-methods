// Lightning Exercise 1: Create an object that represents a bill from your doctor's office. It should have the following properties: officeName, streetAddress, doctorName, patientName, visitDate, amountBilled, dueDate. You provide example values for each one.

const doctorBill = {
  officeName: "Advanced Foot and Ankle Care",
  streetAddress: "123 Nolensville Pike",
  doctorName: "Dr. Mitchell",
  patientName: "Jisie",
  visitDate: "03-25-2019",
  amountBilled: 250.35,
  dueDate: "04-25-2019"
};

// Lightning Exercise 2: Copy the code below and paste it above your object.

const dateVisited = "visitDate";
const owed = "amountBilled";
const patient = "patientName";
// Use square bracket notation to output the value of those three properties to the console in Chrome.

console.log("date visited", doctorBill[dateVisited]);
console.log("amount owed", doctorBill[owed]);
console.log("patient name", doctorBill[patient]);

// Lightning Exercise 3: Use Object.values() to output all the property values to the console in Chrome.
console.log("All values in doctorBill object:");
for (const value of Object.values(doctorBill)) {
  console.log(value);
}

// Lightning Exercise 1: Output all of the key names from your doctor's office bill to the console in Chrome.
console.log("All keys in doctorBill object:");
for (const key of Object.keys(doctorBill)) {
  console.log(key);
}

// Lightning Exercise 2: Output all of the key names from your doctor's office bill to the DOM inside a parent <section> element. Wrap each one in a <span> element.

{
  /* <section>
  <span>officeName</span>
  <span>streetAddress</span>
  ...
</section> */
}

const doctorApp = document.querySelector("#doctor-app");

//createElement
const doctorh1 = document.createElement("h1");
doctorh1.textContent = "Doctor Bill Object Keys";
// doctorApp.appendChild(doctorh1)

const doctorKeysSection = document.createElement("section");

for (const taco of Object.keys(doctorBill)) {
  const doctorKeySpan = document.createElement("div");
  doctorKeySpan.textContent = taco;
  doctorKeysSection.appendChild(doctorKeySpan);
  // debugger
}

// doctorApp.appendChild(doctorKeysSection)

//innerHTML

let doctorKeysHtml = "<h1>Doctor Bill Object Keys</h1>";

let keysSpanHtml = ""
for (const taco of Object.keys(doctorBill)) {
  // debugger
  keysSpanHtml += `<span>${taco}</span>`
}
// debugger
doctorKeysHtml += `<section>${keysSpanHtml}</section>`

doctorApp.innerHTML = doctorKeysHtml;
