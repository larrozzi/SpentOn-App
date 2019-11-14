
//****  object Desctructuring */

// const person ={
//     //name:'Yassine', //anonymous is used as a default 
//     age:28,
//     location:{
//         city:'LA',
//         temp:70
//     }
// }

// const {name:firstname='anonymous',age}=person; //equivalent to the next two lines
// // const name=person.name; 
// // const age =person.age;
// console.log(`${name} is ${age}`);

// const{city,temp}=person.location
// if(city && temp){
//     console.log(`it's ${temp} in ${city}` );
// } //equvalent to next syntax
// // if(person.location.city && person.location.temp){
// // console.log(`it's ${person.location.temp} in ${person.location.city}` );
// // }

// const{  temp:temperature } = person.location; // once decalared you can't decalre city again
// if(city && temperature){
//     console.log(`it's ${temperature} in ${city}.` );
// }


// const book={
//     title:'ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name:'Penguin'
//     }
// };
   
// const {name:publisherName='Self-published' }=  book.publisher;
// console.log(publisherName);


//****  Array Desctructuring */
const address=['123 sylvan st', 'LA','Cali' , '91411'];

// console.log(`You are in ${address[1]} ${address[2]}`);

const[, city, myState='QC']=address  //QC is the default
console.log(`You are in ${city} ${myState}`);

const item=['coffee(hot)','$2.00','$2.50','2.75'];
//const item=[]; // only way default vals work
const [itemName='iced Coffee',,medium]=item;

console.log(`A medium ${itemName} costs ${medium}`);

