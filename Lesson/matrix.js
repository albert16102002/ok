//DOM(document object model) CRUD
//C=creat
const divElement=document.createElement("div");//creat div
const stringElement=document.createTextNode("Welcome to Myanmar!");//write text
divElement.appendChild(stringElement);//connet div and text
const tagCollection= document.getElementsByTagName("body")//connet HTML body script &  but show HTMLcollections
const bodyElement=tagCollection [0]
bodyElement.appendChild(divElement);

//R=read
const readElement = document.getElementsByTagName("div")[0];
console.log("What is this element?..",readElement.textContent)

//U=update
readElement.textContent="Welcome to Mandalay!"

//D=delet
readElement.remove();