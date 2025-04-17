import React from 'react'

function Footer({length}) {
  
  return (
    
      <header >
       <h1> {length} list {length===1?"item":"items"}</h1>
      </header>
    
  )
}

export default Footer