let array = [
  { name: "James", age: 30, country: "United States" },
  { name: "Ronny", age: 31, country: "United Kingdom" },
  { name: "Peter", age: 58, country: "Canada" },
  { name: "Marks", age: 81, country: "Spain" },
  { name: "Ali", age: 20, country: "Iran" },
  { name: "Alex", age: 90, country: "United States" },
  { name: "Steve", age: 4, country: "Brazil" },
  { name: "Clair", age: 48, country: "Canada" },
  { name: "Luigi", age: 20, country: "Italy" },
];
function tableManager(array) {
  let tbody = document.getElementsByTagName("tbody")[0];
  array.forEach((item) => {
    let values = Object.values(item);
    let row = tbody.insertRow();
    let name = row.insertCell();
    let age = row.insertCell();
    let country = row.insertCell();
    name.innerHTML = values[0];
    age.innerHTML = values[1];
    country.innerHTML = values[2];
    tbody.lastChild.classList.add("py-10", "py-10");
    tbody.lastChild.children[0].classList.add("p-6", "border-2");
    tbody.lastChild.children[1].classList.add("p-6", "border-2");
    tbody.lastChild.children[2].classList.add("p-6", "border-2");
    if (values[1] < 10) {
      tbody.lastChild.classList.add("bg-yellow-300");
    } else if (10 <= values[1] && values[1] < 40) {
      tbody.lastChild.classList.add("bg-green-500");
    } else if (40 <= values[1] && values[1] < 80) {
      tbody.lastChild.classList.add("bg-red-500");
    } else {
      tbody.lastChild.classList.add("bg-blue-500");
    }
  });
}

tableManager(array);
