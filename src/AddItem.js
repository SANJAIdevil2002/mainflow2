import React from 'react'
import{FaPlus}from 'react-icons/fa'
const AddItem = ({newItem,setnewItem,handleSubmit}) => {
  return (
    // form
    <form className='addForm' onSubmit={handleSubmit}>
        {/* in html ,we use for ,here we use htmlfor */}
        <label htmlFor='addItem'>Add Item</label>
        <input autoFocus
        id='addItem'
        type="text"
        placeholder='Add Item'
        required
        value={newItem}
        onChange={(e)=>setnewItem(e.target.value)}/>
        <button 
        type='submit'
        aria-label="Add Item"
        ><FaPlus/></button>
        </form>
  )
}

export default AddItem
