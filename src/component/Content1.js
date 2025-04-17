//CREATE DO LIST
import React from 'react';
//  import { useState } from 'react';

import ItemList from './ItemList';
const Content1 = ({item,setItem,handleCheck,handledelete}) => {
    // below[array element]
  // const [item, setItem] = useState([
  //   {
  //     id: 1,
  //     checked: true,
  //     item: "practice react"
  //   },
  //   {
  //     id: 2,
  //     checked: false,
  //     item: "practice react1"
  //   }
  //   , {
  //     id: 3,
  //     checked: false,
  //     item: "practice react2"
  //   }
  // ]);
  // const handleCheck=(id)=>{
  //   //console.log(`id:${id}`)
  //   const list=item.map((item)=>
  //   item.id===id?{...item,checked:!item.checked}:item);
  //   setItem(list);
  //   //if you change the state by click mean it stored in localstorage

  //       localStorage.setItem("todo_list",JSON.stringify(list));

  // }
  // const handledelete=(id)=>{
  //   // const list1=item.map((item)=>
  //   //   item.id===id?{}: item)
  //   const listitem=item.filter((item)=>
  //   item.id!==id)
  //   setItem(listitem);
  //   localStorage.setItem("todo_list",JSON.stringify(listitem));


  // }

  // //example = map for pointing the item in list 
  // // const number=[-1,-1,0,1,2];
  // // const items=number.filter(n=>n>=0).map((n=>({number:n})));
  // // console.log(items);
  // //map the object to items
  //below it is abstraction
  return (
    <main>
        {(item.length)?(
          <ItemList 
          item={item}
          handleCheck={handleCheck}
          handledelete={handledelete}
          />
        ):(<p style={{marginTop:'2rem'}}>list is empty</p>)}
        
        
    </main>
  )
}

export default Content1
