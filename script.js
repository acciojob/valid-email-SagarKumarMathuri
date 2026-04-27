// function validEmail(str) {
//   //your JS code here.
// }

// // Do not change the code below.
// const str = prompt("Enter an email address.");
// alert(validEmail(str));
function validEmail(str) {
  let regex = /^[\w.-]+@[\w-]+(\.[\w-]{2,3})+$/;
  return regex.test(str);
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));