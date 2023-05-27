const cumstomerInfo =[
    {name:"cumstomer1", email:"cumsto1@gmail.com", gender:"femal", age:"43"},
    {name:"cumstomer2", email:"cumsto2@gmail.com", gender:"male", age:"24"},
    {name:"cumstomer3", email:"cumsto3@gmail.com", gender:"femal", age:"45"},
    {name:"cumtomer4", email:"cumsto4@gmail.com", gender:"male", age:'21'},
    {name:"cumstomer5", email:"cumsto5@gmail.com", gender:"male", age:"32"}
]

for (let i=0;i<cumstomerInfo.length; i++){
    let example=cumstomerInfo[i];
    for(let property in example){
        if(property==="email")
         console.log(property,example[property])
     }
}