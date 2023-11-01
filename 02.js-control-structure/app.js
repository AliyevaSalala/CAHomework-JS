let a = 10;
let b = 8;
let c = 3;

if ((a + b > a + c) & (a + b > b + c)) {
  console.log(`Big sum result ${a} and ${b}`);
} else if ((b + c > a + c) & (b + c > a + b)) {
  console.log(`Big sum result ${b} and ${c}`);
}else if(a+c> b+c & a+c> a+b){
  console.log(`Big sum result ${a} and ${c}`)
}



//QUESTION-1

let katet1 = 3;
let katet2 = 4;
let hipotenuz = 5;

//let katet1=3;
//let katet2=3;
//let hipotenuz=8;

if (katet1 ** 2 + katet2 ** 2 == hipotenuz ** 2) {
  console.log(`Duzbucaqli ucbucaqdir..`);
} else {
  console.log(`Duzbucaqli ucbucaq degil..`);
}

//QUESTION-3

let month ="January";
switch (month) {
  case "January":
    console.log(`${month} has 31 days`)
    break;
  case "February":
    console.log(`${month} has 28 days`)
    break;
  case "March":
    console.log(`${month} has 31 days`)
    break;
  case "April":
    console.log(`${month} has 30 days`)
    break;
  case "May":
    console.log(`${month} has 31 days`)
    break;
  case "June":
    console.log(`${month} has 30 days`)
    break;
  case "April":
    console.log(`${month} has 31 days`)
    break;
  case "July":
    console.log(`${month} has 30 days`)
    break;
  case "Auguts":
    console.log(`${month} has 31 days`)
    break;
  case "September":
    console.log(`${month} has 31 days`)
    break;
  case "October":
    console.log(`${month} has 31 days`)
    break;
  case "November":
    console.log(`${month} has 31 days`)
    break;
  case "December":
    console.log(`${month} has 31 days`)
    break;

  default:
    break;
}

  //QUESTION-4
let d=5;
if(d%2==0){
  console.log(`${d} cut ededdir`)
}else{
  console.log(`${d} tek ededdir`)
}

//QUESTION-5


let e=2;
let f=2;
let g=2;
if(e==f==g){
  console.log(`berabeterfli ucbucaqdir`)
}else{
  console.log(`beraberterfli ucbucaq degil`)
}

//QUESTION-6
let h=2;
let j=2;
let s=4;
if(h==j & j!=s ){
  console.log(`beraberyanli ucbucaqdir`)
}else{
  console.log(`beraberyanli ucbucaq degil`)
}



//QUESTION-7
