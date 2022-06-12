//EX2
let primary = document.querySelector(".PRIMARY");
primary.classList.add("bg-blue-200");
let secondary = document.querySelector(".SECONDARY");
secondary.classList.add("bg-pink-300");
let success = document.querySelector(".SUCCESS");
success.classList.add("bg-green-200");
let danger = document.querySelector(".DANGER");
danger.classList.add("bg-red-300");
let warning = document.querySelector(".WARNING");
warning.classList.add("bg-yellow-300");
let info = document.querySelector(".INFO");
info.classList.add("bg-violet-300");
let dark = document.querySelector(".DARK");
dark.classList.add("bg-gray-900");
//////////////////////////////////
//EX3
let tr = document.getElementsByTagName("tr");
let dltButton = document.querySelector(".dlt-btn");
function dlt() {
  for (let i = 0; i < 5; i++) {
    tr[1].remove();
  }
}
dltButton.addEventListener("click", dlt);
//////////////////////////////////
//EX4
let addButton = document.querySelector(".add-btn");
function add() {
  let tbody = document.getElementsByTagName("tbody")[0];
  for (let i = 0; i < 3; i++) {
    let row = tbody.insertRow();
    let cell1 = row.insertCell();
    let cell2 = row.insertCell();
    let cell3 = row.insertCell();
    cell1.innerHTML = "NEW";
    cell2.innerHTML = "cell";
    cell3.innerHTML = "cell";
    tbody.lastChild.classList.add(
      "bg-gradient-to-r",
      "from-indigo-500",
      "via-purple-500",
      "to-pink-500",
      "border-b",
      "dark:bg-gray-800",
      "dark:border-gray-700",
      "text-white"
    );
    tbody.lastChild.firstChild.classList.add(
      "px-6",
      "py-4",
      "font-medium",
      "dark:text-white"
    );
  }
}
addButton.addEventListener("click", add);
