// event delegation is a design pattern, single parent element is used to manage and handle events for multiple child elements.
// event propagation is the phase including event capturing and event bubbling.
// Event capturing and event bubbling are two distinct phases of event propagation.


//Event capturing in JavaScript is when an event is first captured by the outermost element and propagated to the inner elements.
// event bubbling, events propagate outwards from the target to the outer elements.  

// event capturing-- outermost element to inner elements (target)
// event bubbling-- inner elements (target) to outermost

// event delegation example
document.getElementById("myList").addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    alert("Clicked on " + event.target.innerText);
  }
});

// event caputuring example
const outer = document.querySelector('#outer');
const middle = document.querySelector('#middle');
const inner = document.querySelector('#inner');

outer.addEventListener('click', () => console.log('outer div clicked'), true);
middle.addEventListener('click', () => console.log('middle div clicked'), true);
inner.addEventListener('click', () => console.log('inner div clicked'), true);

// event bubbling example
// we need to pass false as in third parameter. By default it is passed as false, so no need to pass any thing. 

const outer1 = document.querySelector('#outer1');
const middle1 = document.querySelector('#middle1');
const inner1 = document.querySelector('#inner1');
outer1.addEventListener('click', () => console.log('outer div clicked'));
middle1.addEventListener('click', () => console.log('middle div clicked'));
inner1.addEventListener('click', () => console.log('inner div clicked'));