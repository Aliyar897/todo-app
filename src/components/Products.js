import React from 'react'

export default function Products() {
//   const products = ['laptop','TV','Mobile','Gamer'];
    // const products = [
    //     {id:1,name:'Laptop',price:500},
    //     {id:2,name:'Phone',price:200},
    //     {id:3,name:'Modem',price:50},
    //     {id:4,name:'Laptop',price:900},

    // ];

    const fruits = ['Apple', 'Banana', 'Orange']

  const fruitLists = fruits.map((fruit,index)=> 
  
  (<h3 key={index}>{fruit}</h3>));
  
  
     return (
    <div>
        {
            fruitLists
        }
    </div>
  )
}
