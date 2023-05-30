const divElement=document.createElement("div");
divElement.classList.add("parant","myClass");

const divOneElement=document.createElement("div");
divOneElement.append("diviloper one");
divOneElement.classList.add("child")

const divTwoElement=document.createElement("div");
const stringTwoElement=document.createTextNode("diviloper two");
divTwoElement.appendChild(stringTwoElement);
divTwoElement.classList.add("child")
divTwoElement.classList.remove("child")



divElement.append(divOneElement,divTwoElement);

const tagCollection=document.getElementsByTagName("body");
const bodyElement= tagCollection[0];

bodyElement.appendChild(divElement);