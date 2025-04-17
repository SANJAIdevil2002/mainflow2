import React from 'react'



import LineItem from './LineItem';
const ItemList = ({item,handleCheck,handledelete}) => {
  return (
    <div>
      <ul>
        {item.map((item) => (
        // list and key
       <LineItem
       item={item}
       //key to assign the value in the item so it not show error in console
      // key={item.id}
        key={item.id}
       handleCheck={handleCheck}
       handledelete={handledelete}/>
        )
        )}
{/* jsx syntax */}

    </ul>
    </div>
  )
}

export default ItemList
