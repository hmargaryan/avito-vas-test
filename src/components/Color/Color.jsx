import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { changeColor, removeColor } from '../../store/color/action'

import styles from './Color.module.scss'

const Color = ({ id, colorValue, endValue, canBeDeleted }) => {
  const [color, setColor] = useState(colorValue)
  const [end, setEnd] = useState(endValue)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(changeColor(id, color, +end))
  }, [color, end])

  const onColorChange = (e) => {
    setColor(e.target.value)
  }

  const onEndChange = (e) => {
    setEnd(e.target.value)
  }

  const onRemoveColorButtonClick = () => {
    dispatch(removeColor(id))
  }

  return (
    <tr>
      <td>
        <input
          type="color"
          value={color}
          onChange={onColorChange}
          className={styles.colorInput}
        />
      </td>
      <td>
        <input
          type="number"
          value={end || ''}
          onChange={onEndChange}
          className={styles.endInput}
        />
      </td>
      <td>
        <button
          type="button"
          style={{ display: canBeDeleted && 'none' }}
          onClick={onRemoveColorButtonClick}
          className={styles.removeColorButton}
        ></button>
      </td>
    </tr> 
  )
}

export default Color
