//Operations

//Arimethic Operations

//(addtion)"+"
let num1=2;
let num2=1;
num3=num1+num2;

//(substration)"-"
let num1a=4;
let num2b=2;
num2a=num1a-num2b;

//(multiple) "*"
let n1=3;
let n2=2;
n3=n1*n2;

//(mudole)"**"
let n1a=4;
let n2b=2;
n2c =n1a**n2b;

//(diviced)"/"
let nN=20;
let nN1=4;
nNN=nN/nN1;

//(remider)"%"
let number=10;
let number1=2;
numberA= number%number1;

//(grather than)">"
6>2;//true
2>5;//false

//(grather or equal)">="
4>=2;//true
2>=4;//false

//(less than)
5<19;//true
3<1;//false

//(less than or equal)
4<=6;//true
6<=3;//false

//comparesion

//==vs===
let num=5;
num=="5"//true
num==="5"//false

//!=vs!==
let num5=6
num5!=6;//false
num5!==6;//false
/* 
let num5="6";
num5!=6; (false)
num5!==6; (true) 
*/

//contitional stament
//if & else if & else
const n1n=23;
let n2n=32;
if (n1n===2) {
    n2n += 23;
} else if(n1n>=22) {
    n2n += 23;
} else {
    n2n+=3;
}
/************************************************************************/

/*switch contational*/
const staMent=10;
let stament=0;

switch (staMent) {
    case 1:
        stament = staMent*2;
        break;
    case 5:
        stament= staMent*1;
        break;
    case 0:
        stament=staMent**staMent;
        break;
    default:
        stament+=staMent
        break;    
}
/**************************************************************************/

//function
let num4=0;
 function albert (number) {
    num4=number**2;
    num4=number*2;
    num4-=10;
    num4+=2;
    num4/=10;
}//albert(2)

//NaN=Not a Number
//return function
function alber(number) {
    return number;
    number += 5;//return ရဲ့အောက်မှာရေးတဲ့ဟာမှန်သမျှဆက်မrunပေးပါ
}
undefined
const myNumber=alber(3);
undefined
myNumber;

/************************************************************************/

//ES6 function
()=>{}
const keyWord=(param1,param2)=>{
    param1**param2;
}
keyWord(4,2)//ခေါသုံးနည်း

/**************************************************************************/

//windown
//alert & console
albert();
alert("My name is san linn htun");
console.log("Wellcome to my programming page")//ဖတ်ပေး

/**************************************************************************/

//object
{}//empty object, unordered collection
const objection= {
    Name: "San Linn Htun",
    Age: 21,
    City:"Mandalay",
    Homedown:"Somara",
    isProgrammer: true,
    doNow: ()=>{
        alert("He is writing programming...")//objectထဲမှာရေးတဲ့functionကို methodလို့‌ခေါ လ
    }
}
//object ခေါသုံးနည်း
objection.Age
objection.doNow()//methodခေါသုံးနည်း 
//or 
objection["Age"]
objection['doNow']()//methodခေါသုံးနည်း
const newObject={
    excitWindor: "left",
    carParking: "In the ground builting...",
    canParkedcar: "About 200 car..",
    es6: () =>{
        console.log("Wellcome to myanmar..")
        alert("alert this world")
    }
}
objection.isMale =true;//add new value
objection.newAssig= newObject;//objectထဲမှာ objectတည့်နည်း
objection.newAssig.canParkedcar;
objection.newAssig.es6()//objectထဲမှာရှိတဲ့objectရဲ့ method ကို‌ခေါသုံးနည်း
const input1Value="";
const input2Value="";
const donateProgram = "donatedBy" + input1Value;
objection[donateProgram]=input2Value;//This way can be create Dynamic object
ordered.push(newObject)//add object in the array
ordered[4].es6()//arrayထဲမှ objectထဲမှ function ကိုခေါသုံးနည်း

/*************************************************************************/

//array
//[] empty array,order coollection
const ordered=[
    "Apple",
    "Orange",
    "Waltermallo",
    "Lemontea"
]
ordered[2] //way of called
ordered.push("banana")//add element(in the last)
ordered[ordered.length-1]//get last items as array
ordered.pop()//delet last itmes
ordered.shift()//delet first itmes
ordered.unshift("Mangoe")//add in the first 
ordered.splice(poso, 2)//posotion & delet number
ordered.indexOf("Mango")//Search Element

/*************************************************************************/

//for loops
const orderedArray=[
    {name: "Myo Myo", emailAdress:"myomyo@gmail.com", isTeacher:true, gender:"Female" },
    {name: "San Ei", emailAdress:"sanei@gmail.com", isSwinmer:false, gender:"Female"},
    {name: "Han Su Ywe", emailAdress:"hansuywe@gamil.com", isSwinmer: true, gender:"Female"},
    {name: "L San Linn Htun", emailAdress:"lsanlinnhtun@gmail.com", isDeveloper:true, gender:"Male"},
    {name: "Indexer", emailAdress:"indexer@gmail.com", isDeveloper:true, gender: "Male"}
]   

const sendName=(gender)=>{
    console.log("Sending sex to:", gender);
}

for(let i=0; i<orderedArray.length; i++){
    let customerSex=orderedArray[i].gender;
    sendName(customerSex);
}

for(let i=0; i<orderedArray.length; i++) {
    console.log(orderedArray[i].emailAdress)
}

for (let i = 0; i <cities.length; i++) {
    console.log(cities[i], i)
}

for(stametn1; stament2; stament3) {
    console.log("hello")
}

const cities=[
    "Mandalay", "Yangon", "Myitgitna", "Bejine", "Shanhi", "Newyork"
    ];

/***************************************************************************/

//for in loops
const variable={
    name: "L San Linn Htun", 
    emailAdress:"lsanlinnhtun@gmail.com", 
    isDeveloper:true, sex:"Male"
}
variable.name //L San Linn htun
variable["name"] //L San Linn htun

for (i in variable){
    console.log(i, ":", variable[i]);
}

/**************************************************************************/

//while loop
let validNumber=true;
while(validNumber){
    let promptValue= prompt("Please entery number between 1 and 10");
    const parseIntValue= parseInt(promptValue, 10);
    if(1<parseIntValue && 10>parseIntValue){
        console.log("Enty run don't exit", parseIntValue);
        validNumber=false;//exict
    }
}

/************************************************************************/

//error handing
const users=["Aller", "Estain", "Hellomaer", "MyUsers"];

const showFirstSideBar = ()=>{
    for(const i=0; i<users.length; i++){
        console.log("First side bar is true..:");
    }
}

const showSecondSideBar = ()=>{
    console.log("Second side bar is true..:");
}

const showThirdSideBar = ()=>{
    console.log("Third side bar is true..:");
}
/**************/
//try..catch
try{
    showFirstSideBar();
}catch(err){
    console.log("Your err is here..:", err)
}

showFirstSideBar();
showSecondSideBar();
showThirdSideBar();

/******************************************************************/

//scope
//Local vs Globle
function myFunction() {
    var name ="Hla Hla";//local scope
    namer = "New Name"//Globle scope but first call function e.g => myFunction
}
myFunction();

console.log(name);//undifine
console.log(namer)//comfirm console.log *myFunction();* မ‌ခေါထားရင် errorတက်
//var name="index" နဲ့ name="index" window မှာobject တစ်ခုအနေနဲ့ သတ်မှတ်ပေး
//let name="index" နဲ့ const name"index" window မှာobject တစ်ခုအနေနဲ့ မသတ်မှတ်ပေးပါ
const city="Mandalay";
function myFunction() {
    var value= 10;
    number=23;
    console.log("My city name is..:", city);
}
myFunction()
//result => My city name is..: Mandalay

//Block scope
const test = () => {
    var num=1;

    if (num === 1) {
        var num=true;
        let num1="False";
        const num2= "Straing";
    }
    const innerFunction = () => {
        console.log(num);
    }
    innerFunction();
    console.log(num);
    console.log(num1);
    console.log(num2);
}
innerFunction();//will raise error

/************************************************************************/

//Continue & Break

for(i=0; i<orderedArray.length; i++){
    let orderedValue=orderedArray[i];
    if(orderedValue.gender==="Male"){
        continue;
    }
    console.log("Customer email is here...:",orderedValue.emailAdress)
}


for(i=0; i<orderedArray.length; i++){
    let orderedValue=orderedArray[i];
    console.log("Customer email is here...:",orderedValue.emailAdress)
    if(i===2){
        break;
    }
}

while(i<orderedArray.length){
    let orderedValue=orderedArray[i];
    i++;//exict containtion
    if(orderedValue.gender==="Female"){
        continue;
    }
    console.log("Developer!..Discont is here:",orderedValue.emailAdress)
}
let i=0;
while(i<orderedArray.length){
    let orderedValue=orderedArray[i];
    console.log("Primeum cumstomer...",orderedValue.name);
    i++;
    if(i===3){
        break;
    }
}

/***************************************************************************************/

/*Two dimensional(2D) array */
const twoArray=[
    ["U Swe Phoh","Daw Sie Phine Thia"],
    ["Shar Nar Phine","Swe Si San"],
    ["Nay Linn Swe","Si Mang Pan"],
    ['San Linn Htun','Swen Thia','Larh Thai']
];
for(let i=0;i<twoArray.length;i++){
    let familyName=twoArray[i];
    for(let j=0; j<familyName.length; j++){
        let listName=familyName[j];
        console.log('List of the fmaily name..:',listName,j)
    }
}

/*********************************************************************/

/*Destructing, Spread Operator, Rest Parameter*/

/*Destructing in object*/
const cumstoInfo={name:"cumstomer1", email:"cumstomer@gamil.com", gender:"female"}
const {name, email, gender}=cumstoInfo;
/*Spread Operator in object (...)*/
const copyObject ={...cumstoInfo};
const copyOldversion= Object.assign({},cumstoInfo);//old version copy method
//Add object ==> const copyObject ={...cumstoInfo, isFemale: true};

/*Destructing in array */
const citiesArray=["Yangon", "Mandalay", "Somara",];
const [cityOne, cityTwo, cityThree ]=citiesArray;
//e.g cityTwo ကိုချန်ထားချင်ရင်=> const [cityOne, ,cityThree]=copyArray
const copyOldversionArray=[].concat(citiesArray);
/*Spread Operator in Array(...) */
const copyArray=[...citiesArray];
//add array ==> const copyArry =[...citiesArray,"New Yourk"]

const cacula =(...param) => {
    let total =0;
   for(let i=0; i<param.length; i++){
     total += param[i];
   }
   return total;
}

cacula(1,3,4,5);

/********************************************************************/

/*Calledback function*/
const dataFt=(Calledback)=>{
    console.log("Starting data...." )
    /*
    Asynchronous function    
    Asynchronous function
    Asynchronous function
    */
   console.log("Loding your data...")
    Calledback();
}

const ouderData=()=>{
    const innerData=()=>{
        console.log("Finishing data")
    }
    dataFt(innerData);
}

/*****************************************************************/
/*Array filter*/

const cumstomerInfo =[
    {name:"cumstomer1", email:"cumsto1@gmail.com", gender:"femal", age:"43"},
    {name:"cumstomer2", email:"cumsto2@gmail.com", gender:"male", age:"24"},
    {name:"cumstomer3", email:"cumsto3@gmail.com", gender:"femal", age:"45"},
    {name:"cumtomer4", email:"cumsto4@gmail.com", gender:"male", age:'21'},
    {name:"cumstomer5", email:"cumsto5@gmail.com", gender:"male", age:"32"}
]

const specialCumsto = (arrayElement) => {
    return arrayElement.gender === 'male'&& arrayElement.age < 24;
}
cumstomerInfo.filter(specialCumsto);

//အတိုကောက်ဖြင့် ရေးနည်း
cumstomerInfo.filter(arrayElement => arrayElement.gender === 'femal' && arrayElement.age > 24);

/**********************************************************************/

/*arry map*/
/* start */

for (let i=0; i<cumstomerInfo.length; i++){
    cumstomerInfo[i].booking=[];
}//for loop ကိုသုံးခြင်း

//same result but short and long 
cumstomerInfo.map(element =>element.booking=[])//short

cumstomerInfo.map(element =>{
    element.booking=[];
    return element;
})//long

/* end */

/*************************************************************************/

/*Useful Build-In Method */
const stringtext= "Welcome To Myanmar";
stringtext.toUpperCase();//WELCOME TO MYANMAR
stringtext.toLowerCase();//welcome to myanmar
stringtext.length//return 18
const numPro="23";
parseInt (numPro, 10);//changes string to number
const numProMax=12;
numProMax.toString();//changes number to string

const iosPhone={name:"iPhone",model:"14 proMax", pYear:"2022" }
Object.keys(iosPhone) // return "name", "modle", "pYear"
Object.values(iosPhone)//return "iPhone", "14 proMax", "2022"
//check object
iosPhone.hasOwnProperty("model")// return "true"
iosPhone.hasOwnProperty("country")// return "false"

const letters=['A','B','C','D','E','F'];

letters.length// return 6
letters[letters.length-1]// return 'F'
letters.pop()//delete last "F"
letters.push("G")// add "G"
letters.indexOf("E")//4
letters.indexOf("Z")//-1
letters.slice(0, 4)//A to D return
letters.splice(0, 3)// delete 3 element
letters.join("-")// joined by "-"

//Java Script Summary
// var (gobal scope, function scope) & const and let (gobal scope, block scope{})
//block scope ကို for loop & while loop တို့နဲ့တွဲသုံး

//2D or two dimentional array
const arrayName=[
    [1,2,3],
    [4,5,6],
    [7,8,9],
];
for(let i=0;i<arrayName.length;i++){
    let variableArray=arrayName[i];
    for(let j=0;j<variableArray.length;j++){
        console.log("your data is here...;",variableArray[j])
    }
}

//ternary operator
const isMale=true;
isMale? console.log("He is a men"): console.log("He is not men");
/*******************************************************************/

for (let i=0;i<cumstomerInfo.length; i++){
    let example=cumstomerInfo[i];
    for(let property in example){
        console.log(example[property])
    }
}

for(let i=0;i<cumstomerInfo.length;i++){
    console.log(cumstomerInfo[i].email)
}

//email : cumsto1@gmail.com
//email : cumsto2@gmail.com
//email : cumsto3@gmail.com
//email : cumsto4@gmail.com
//email : cumsto5@gmail.com

const exaArray=[1,2,3,4,5,6,7,8,9];
let getNumber=0;
for (let i=0; i<exaArray.length;i++){
    if (exaArray[i]===9)[
        getNumber += exaArray[i]
    ]
    console.log("Your code is",getNumber)
}    
