import React from 'react'


const Header = ({title}) => {

  return (
    <header >
      {/* now i want to recieve the  value */}
        <h1 >{title}</h1>
    </header>
  )
  //if above code value is not assign in the title,then default value given below
 
};
Header.defaultProps={
  title:"to do list",
};
export default Header
// import React from 'react'
// // prop is consider as object
// const Header = (prop) => {
// //  const  headerStyle={backgroundColor:"blue",  color:"white"};
//   return (
//     <header >
//       {/* now i want to recieve the  value */}
//         <h1 >{prop.title}</h1>
//     </header>
//   )
// }

// export default Header
// import React from 'react'
// // prop is consider as object
// const Header = () => {
// //  const  headerStyle={backgroundColor:"blue",  color:"white"};
//   return (
//     <header >
//       {/* now i want to recieve the  value */}
//         <h1 >to do list</h1>
//     </header>
//   )
// }

// export default Header