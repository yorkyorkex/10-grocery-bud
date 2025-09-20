import { useState } from 'react'
import React from 'react'
import Form from './Form'
import { nanoid } from 'nanoid'

import Items from './Items'

const setLocalStorage = (items) => {
  localStorage.setItem('list', JSON.stringify(items))
}

const App = () => {
  const [items, setItems] = useState([])

  const addItem = (itemName) => {
    const newItem = {
      id: nanoid(),
      name: itemName,
      completed: false,
    }
    const newItems = [...items, newItem]
    setLocalStorage(newItems)
    setItems(newItems)
  }

  const removeItem = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId)
    setLocalStorage(newItems)
    setItems(newItems)
  }

  return (
    <section className="section-center">
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} />
    </section>
  )
}

export default App
