function getAdd() {
  let val1 = document.getElementById("val1").value;
  let val2 = document.getElementById("val2").value;
  let result = document.getElementById("result");
  let add = Number(val1) + Number(val2);
  if (add % 2 === 0) {
    result.classList.remove("text-red-400");
    result.classList.add("text-blue-400");
  } else {
    result.classList.remove("text-blue-400");
    result.classList.add("text-red-400");
  }
  result.innerHTML = add;
}
