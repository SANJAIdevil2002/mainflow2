// //CREATE DO LIST
// import React from 'react';
// import { useState } from 'react';
// import { FaTrashAlt } from "react-icons/fa";
// const Content = () => {
//   const [item, setItem] = useState([
//     {
//       id: 1,
//       checked: true,
//       item: "practice react"
//     },
//     {
//       id: 2,
//       checked: false,
//       item: "practice react1"
//     }
//     , {
//       id: 3,
//       checked: false,
//       item: "practice react2"
//     }
//   ]);
//   const handleCheck=(id)=>{
//     //console.log(`id:${id}`)
//     const list=item.map((item)=>
//     item.id===id?{...item,checked:!item.checked}:item);
//     setItem(list);
//     //if you change the state by click mean it stored in localstorage

//         localStorage.setItem("todo_list",JSON.stringify(list));

//   }
//   const handledelete=(id)=>{
//     // const list1=item.map((item)=>
//     //   item.id===id?{}: item)
//     const listitem=item.filter((item)=>
//     item.id!==id)
//     setItem(listitem);
//     localStorage.setItem("todo_list",JSON.stringify(listitem));


//   }

//   //example = map for pointing the item in list 
//   // const number=[-1,-1,0,1,2];
//   // const items=number.filter(n=>n>=0).map((n=>({number:n})));
//   // console.log(items);
//   //map the object to items
//   return (
//     <main>

//       <ul>
//         {item.map((item) => (
//           // list and key
//           <li className="item" key={item.id} >
//             <input type="checkbox"
//             onChange={()=>handleCheck(item.id)} 
//               checked={item.checked}
//             />
//             <label 
//             style={(item.checked)?{textDecoration:'line-through'}:null}
//             onDoubleClick={()=>handleCheck(item.id)}>{item.item}</label>
//             <FaTrashAlt
//               roll="button"
//               onClick={()=>handledelete(item.id)}
//               tabIndex="0"
//             />

//           </li>
//         )
//         )}


//       </ul>
//     </main>
//   )
// }

// export default Content

// ///////////////////////////////////////////////////////////////three class
// ///USE
// // import {useState} from 'react';
// // import React from 'react'

// // const Content = () => {
// //   const [name,setName]=useState("earn");
// //       function handlenamechange(){
// //         const names=["earn","Grow","give"];
// //         // for random pick
// //         const int =Math.floor(Math.random()*3);
// //         setName(names[int]);
// //       }
// //   return (
// //     <main>
// //       <p>let {name} money</p>
// //       <button onClick={handlenamechange}>click</button></main>
// //   )
// // }

// // export default Content
// // // const Content = () => {
// // //   // useState();
// // //   // useState();
// // //   // useState();
// // //   // useState();
// // //   ///we can not use the use state in condition statement
// // //   // if(true){
// // //   //   useState();
// // //   // }

// // //     function handlenamechange(){
// // //         const names=["earn","Grow","give"];
// // //         // for random pick
// // //         const int =Math.floor(Math.random()*3);
// // //         return names[int];
// // //       }
// // //       //arrow function
// // //       const handleClick=(name)=>{
// // //         console.log(`thank you ${name}`);
// // //       }
// // //       // const handleClick2=(e)=>{
// // //       //   console.log(e);
// // //       // }
// // //       const handleClick2=(e)=>{
// // //         // console.log(e.target);
// // //         console.log(e.target.innerText);
// // //       }
// // //       function name1(){
// // //         return console.log("visit ak website");
// // //       }
// // //       // const [count,setCount]=useState(99);
// // //       const [count,setCount]=useState(99);
// // //       //it lead to some error mutiple use of useState it display in console
// // //       // const [name,setname]=useState(name1());
// // //       const [name,setname]=useState(()=>name1());
// // //       function incrementfunction(){
// // //         // setCount(count+1)
// // //         // setCount(count+1)
// // //         // setCount(count+1)
// // //         // this above all increment one time
// // //         //to imperative the above code we can use the function inside the setCount
// // //         setCount((prevcount)=>{return prevcount+1});
// // //         setCount((count)=>{return count+1});
// // //         setCount((count)=>{return count+1});
// // //         // this above code will increment 3 times


// // //       }
// // //       function decrementfunction(){
// // //         // setCount(count-1)
// // //         // setCount(count-1)
// // //         // setCount(count-1)
// // //         // this above all decrement one time
// // //         //to imperative the above code we can use the function inside the setCount
// // //         setCount((prevcount)=>{return prevcount-1});
// // //         setCount((count)=>{return count-1});
// // //         setCount((count)=>{return count-1});
// // //         // this above code will decrement 3 times

// // //       }

// // //   return (
// // //     <main>
// // //       {/* ondouble click event */}
// // //     {/* <p onDoubleClick={()=>handleClick('sanjai')}>let handle {handlenamechange()}</p> */}
// // //     {/* this print in console already */}
// // //         {/* <button onClick={handleClick2()}>click</button> */}

// // //     {/* <button onClick={handleClick2}>click</button> */}
// // //     {/* anamus function */}
// // //     {/* <button onClick={()=>handleClick("sanjai")}>click</button> */}
// // //     {/*
// // // SyntheticBaseEvent {_reactName: 'onClick', _targetInst: null, type: 'click', nativeEvent: PointerEvent, target: button, …}
// // //  */}
// // //     {/* <button onClick={(e)=>handleClick2(e)}>click</button> */}
// // //     <p>let earn money</p>
// // //     <button>click</button>
// // //     <button onClick={decrementfunction}>-</button>
// // //     <span>{count}</span>
// // //     <button onClick={incrementfunction}>+</button>

// // //     </main>
// // //   )
// // // }

// // // export default Content