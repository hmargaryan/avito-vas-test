import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addColor } from '../../store/color/action'
import Color from '../Color/Color'
import Button from '../Button/Button'

import styles from './ColorPicker.module.scss'

const ColorPicker = () => {
  const colors = useSelector(({ color }) => Object.values(color))
  const dispatch = useDispatch()
  
  const onAddColorButtonClick = () => {
    dispatch(addColor())
  }

  return (
    <div className={styles.inputGroup}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.headerCell}>Color:</th>
            <th className={styles.headerCell}>End (%):</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
            {colors.map(({ id, color, end }) => {
              return (
                <Color
                  key={id}
                  id={id}
                  colorValue={color}
                  endValue={end}
                  canBeDeleted={colors.length === 1}
                />
              )
            })}
        </tbody>
      </table>
      <Button type="button" text="Add color" onClick={onAddColorButtonClick} />
    </div>
  )
}

export default ColorPicker
