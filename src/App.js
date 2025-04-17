import React from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import Content1 from './component/Content1';
import { useState } from 'react';
import AddItem from './AddItem';
function App() {
   const [item, setItem] = useState([
      {
        id: 1,
        checked: true,
        item: "practice react"
      },
      {
        id: 2,
        checked: false,
        item: "practice react1"
      }
      , {
        id: 3,
        checked: false,
        item: "practice react2"
      }
    ]);
    // add new item using form input
    const [newItem,setnewItem]=useState("")
    const handleCheck=(id)=>{
      //console.log(`id:${id}`)
      const list=item.map((item)=>
      item.id===id?{...item,checked:!item.checked}:item);
      setItem(list);
      //if you change the state by click mean it stored in localstorage
  
          localStorage.setItem("todo_list",JSON.stringify(list));
  
    }
    const handledelete=(id)=>{
      // const list1=item.map((item)=>
      //   item.id===id?{}: item)
      const listitem=item.filter((item)=>
      item.id!==id)
      setItem(listitem);
      localStorage.setItem("todo_list",JSON.stringify(listitem));
  
  
    }
    //is there any submit is click then it print t according
    const handleSubmit=(e)=>{
      e.preventDefault()
      console.log("submitted");
    }
  return (
    <div className='App'>
      {/* parameter to assin the header instead of "to do list"[i.e] drilling [i.e]prop[i.e] it is object */}
      <Header title="to do list"  />
      
      <AddItem
      newItem={newItem}
      setnewItem={setnewItem}
      handleSubmit={handleSubmit}/>
      <Content1
      item={item}
      setItem={setItem}
      handleCheck={handleCheck}
      handledelete={handledelete}/>
      <Footer
      length={item.length}/>
     
    </div>
  )
}

export default App