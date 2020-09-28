console.log(`test
writing code in more than one line
also here
`);

//get the input with id="fname" to work with it in JavaScript
var firstNameEl = document.getElementById("fname");
//var firstNameEl = document.querySelector("input#fname");
console.log(firstNameEl)

//console.log the value written in the input field
function functionName(e){
    e.preventDefault();
    console.log(e)
    var inputVal = firstNameEl.value;
    console.log(inputVal);
}


