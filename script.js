// CS10 Grade Calculator
// Button click listener
document.getElementById("btn").addEventListener("click", bclick);

// event function
function bclick() {
  // input
  let c1 = +document.getElementById("cs1").value;
  let s1 = +document.getElementById("sp1").value;
  let s2 = +document.getElementById("sp2").value;
  let c2 = +document.getElementById("cs2").value;
  let pro = +document.getElementById("pa").value;

  // process
  let grade = Math.round(c1 + s1 + s2 + c2 + pro);

  // output

  document.getElementById("output").innerHTML = Math.round(grade);
}
