import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'

const Form = ({ addItem }) => {
  const [newItemName, setNewItemName] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newItemName) {
      toast.error('Please enter an item name')
      return
    }
    addItem(newItemName)
    setNewItemName('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <h4>Grocery Bud</h4>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          value={newItemName}
          onChange={(event) => setNewItemName(event.target.value)}
        />
        <button type="submit" className="btn">
          Add Item
        </button>
      </div>
    </form>
  )
}

export default Form
