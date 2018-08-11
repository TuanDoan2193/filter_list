// Get input element
let filterInput = document.getElementById("filter");
// Add event listener
filterInput.addEventListener("keyup", filterNames);

function filterNames() {
  // Get value of input
  let filterValue = document.getElementById("filter").value.toUpperCase();
  //Get items list
  let ul = document.getElementById("items");
  //Get items and put in array
  let li = ul.querySelectorAll("li.item");
  //Loop through them
  for (let i = 0; i < li.length; i++) {
    let a = li[i].getElementsByTagName("a")[0];
    //Check if it matches. compare chosen word with filter value using indexOf.
    if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
