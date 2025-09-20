import { useState } from 'react'
import React from 'react'
import Form from './Form'
import { nanoid } from 'nanoid'

import Items from './Items'
import { ToastContainer, toast } from 'react-toastify'

const getLocalStorage = () => {
  let list = localStorage.getItem('list')
  return list ? JSON.parse(list) : []
}

const setLocalStorage = (items) => {
  localStorage.setItem('list', JSON.stringify(items))
}
const defaultList = JSON.parse(localStorage.getItem('list')) || []
const App = () => {
  const [items, setItems] = useState(defaultList)

  const addItem = (itemName) => {
    const newItem = {
      id: nanoid(),
      name: itemName,
      completed: false,
    }
    const newItems = [...items, newItem]
    setLocalStorage(newItems)
    setItems(newItems)
    toast.success('Item added to the list')
  }

  const removeItem = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId)
    setLocalStorage(newItems)
    toast.success('Item removed from the list')
    setItems(newItems)
  }

  const editItem = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        return { ...item, completed: !item.completed }
      }
      return item
    })
    setLocalStorage(newItems)
    setItems(newItems)
  }

  return (
    <section className="section-center">
      <ToastContainer position="top-center" />
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} editItem={editItem} />
    </section>
  )
}

export default App
