const inputTag =document.getElementsByClassName("form-control")[0];
const shoppingTag=document.getElementsByClassName("ShoppingListContainer")[0];

let productId=1;

const handleChange =(event) => {
    const inputValue=event.target.value;
    const parentDiv=document.createElement("div");
    parentDiv.classList.add("productName");
    const spanTag=document.createElement("span");
    const trashIcon=document.createElement("i");
    trashIcon.classList.add("fa-regular","fa-trash");
    parentDiv.addEventListener("click", ()=>{
        const classExist= parentDiv.classList.contains("purchased")
        if (classExist){
            parentDiv.classList.remove("purchased")
        }else{
            parentDiv.classList.add("purchased")
        }
    })
    spanTag.id = productId;
    const product = productId.toString()+". " + inputValue;
    spanTag.append(product);
    parentDiv.append(spanTag,trashIcon);
    shoppingTag.append(parentDiv);
    inputTag.value="";
    productId += 1;
}
inputTag.addEventListener("change",handleChange)