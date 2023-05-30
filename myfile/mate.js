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

const cssStyle=document.getElementsByClassName("style")[0];
console.log("css style of new", cssStyle.style.height)
console.log("css style of width:", getComputedStyle(cssStyle).width)
console.log("css style of height:", getComputedStyle(cssStyle).height)
console.log("css style of background-colour:", getComputedStyle(cssStyle).backgroundColor)

const myIdName= document.getElementById("myId");

const myFunction =() => {
    console.log("Your code is running......")
}

const myFunction2 =() => {
    console.log("Your code is running in second interaction......")
}

//myIdName.onclick=myFunction;

myIdName.addEventListener("click",myFunction)
myIdName.addEventListener("click",myFunction2)