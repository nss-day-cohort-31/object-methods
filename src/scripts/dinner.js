// Lightning Exercise 1: Create an object to represent your favorite dinner item (e.g. meatloaf, spaghetti, fried fish, gumbo). Each object should have a name property, but you can add any other properties that you like, such as size, weight, ethnicity, vegetarian boolean.

let dinner = {
  name: "meatloaf",
  size: "One slice",
  weight: 8,
  ethnicity: "American",
  vegetarian: false
};

// Lightning Exercise 2: Output all of the key/value pairs into the DOM inside an <article> element with a class of food.

const dinnerArray = Object.entries(dinner);
console.log(dinnerArray);

const dinnerApp = document.querySelector("#dinner-app");

let dinnerEntriesHtml = "";
for (const entry of dinnerArray) {
  dinnerEntriesHtml += `<p>${entry[0]}: ${entry[1]}</p>`;
}

dinnerApp.innerHTML = `
  <h1>Dinner Entry</h1>
  <article class="food">
    ${dinnerEntriesHtml}
  </article>
`;
