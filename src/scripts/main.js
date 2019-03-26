const allCars = [
  {
      model: "Mustang",
      color: "Midnight Blue",
      year: 1976,
      length: 120,
      width: 62,
      height: 47
  },
  {
      model: "Xterra",
      color: "Forest Green",
      year: 2011,
      length: 144,
      width: 71,
      height: 55
  },
  {
      model: "Thunderbird",
      color: "Red",
      year: 2005,
      length: 115,
      width: 58,
      height: 42
  },
  {
      model: "Suburban",
      color: "Grey",
      year: 2015,
      length: 149,
      width: 73,
      height: 58
  }
]

const outputElement = document.querySelector("#app")

// Iterate the array of cars. Individual objects stored in `car`.
allCars.forEach(car => {
  const arrayOfObjectValues = Object.values(car)
  console.log(arrayOfObjectValues)

    // Iterate all of the values of the current car
    for (const value of arrayOfObjectValues) {
      console.log(value)
      outputElement.innerHTML += `<div>${value}</div>`
    }
})
