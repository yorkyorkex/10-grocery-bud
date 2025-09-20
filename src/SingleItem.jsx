import React, { useState } from 'react'

const SingleItem = ({ item, removeItem, editItem }) => {
  //const [isChecked, setIsChecked] = useState(item.completed)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }

  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => editItem(item.id)}
      />
      <p
        style={{
          textTransform: 'capitalize',
          textDecoration: item.completed && 'line-through',
        }}
      >
        {item.name}
      </p>
      <button
        onClick={() => removeItem(item.id)}
        className="btn remove-btn"
        type="button"
      >
        Remove
      </button>
    </div>
  )
}

export default SingleItem
