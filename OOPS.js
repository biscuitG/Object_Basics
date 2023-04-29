const a={
    Myname:"Purushottam" ,
    "age":21 ,
    Adress :{
         city:"patna",
         State : "Bihar"
    },
    printFunc : ()=>{
       console.log('hi');
    }
}
// object and object literlas are  different
// key : pair is obect literals 
// key is always string here , value can be anything
console.log(a);
console.log(a.Myname);
console.log(a['Myname']);
console.log(a['Adress']);

// everything in js is object
// string is also object
// string,Number,null,undefined,etc are primitive data type , means can't be changed immutable
// objects are non-primitive
// primitive pass by value
// non-primitive by reference\

// Fctory function -> return object , use to create multiple instance of object with same behave

function WWE(name,weight){

     return {
       Myname: name,
       weight:weight,
       greet : ()=>{
          console.log(`my name is ${this.Myname} `);
       }
     }

}

const o1=WWE("roman",50);
const o2=WWE("regins",80);
console.log(o1);


// constructor function
// first Name should be capital

function Star(name,weight){
    this.name=name;  // impor this is always use here as constructor
    this.weight=weight;
}
const khali=new Star("khali",40); // object create by constructor function
console.log(khali);
khali.quote="HI bro";
console.log(khali);
console.log(khali.constructor);


// object in javascript
const newval=new Object({a:23,'myNmae':"Jha"});
console.log(newval.a);

// main difference b/w obj literal(just for simple instances) and obj is that obj provide oops feature which literals don't

// everything in js is object
// array as object see

const arr=new Array(1,2,23,43,4,34,34,34,32,43,32);
arr.sample="hello" // sample:hello
console.log(arr);
console.log(arr.constructor);

// function is also object

const asd=function(){
    console.log("hello");
}

console.log(asd.constructor);

// as reference value is when we copy non-primitive to each other
// so we use spread operator (...arr)

function Hero(name,weight){
    this.name=name;
    this.weight=weight;
}

const h1=new Hero("akash",23);
const h2={...h1,add:true};

const arr1=new Array(1,1,43,432,43,4,324,3);
const arr2=[...arr1,24,424,4,2344];

console.log(arr1,arr2);



