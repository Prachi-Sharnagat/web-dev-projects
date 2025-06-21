// how to referre html tag
// queryselector to refer by id , class name , tag
// getelementid bhi use kar skate hai 

const countValue = document.querySelector('#count');

// lets make a function
const increment = () =>{
//   here it will be given in string form
    let value = parseInt(countValue.innerText);
// convert to number form by typescripting
// parseInt() is a built-in JavaScript function used to convert a string into an integer
 value = value + 1;
 countValue.innerText = value;
}

const decrement = ()=>{
    let value = parseInt(countValue.innerText);
     value = value - 1;
 countValue.innerText = value;
}

// eventlisten try karke dekhugi mai
