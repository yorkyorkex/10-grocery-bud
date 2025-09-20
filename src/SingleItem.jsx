import React, { useState } from 'react'

const SingleItem = ({ item, removeItem }) => {
  const [isChecked, setIsChecked] = useState(item.completed)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }

  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <p
        style={{
          textTransform: 'capitalize',
          textDecoration: isChecked && 'line-through',
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
