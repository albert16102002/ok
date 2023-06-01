const myArray=[
    "https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
    "https://images.unsplash.com/photo-1685266324976-02cf0cc45f01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
    "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGNhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
    "https://media.istockphoto.com/id/1362716866/photo/3d-render-of-an-orange-retro-american-muscle-car-isolated-on-white.webp?b=1&s=170667a&w=0&k=20&c=6uknD33i1V-FJPjH8qmaRuir-oHp6fytTR89Vk1m0p8=",
    "https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29mZmVlfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
]

const myId=document.getElementById("myButton");
const myImage=document.getElementsByClassName("imgCollection")[0];
const originImage= myImage.src;
let counter=0;
const myFunction= ()=> {
    if (counter===5){
        myImage.src=originImage;
        counter=0;
        return;
    }
    const imageLinks = myArray[counter]
    myImage.src=imageLinks;
    counter+=1;
    console.log("Counter value is:",counter)
}

myId.addEventListener("click",myFunction)