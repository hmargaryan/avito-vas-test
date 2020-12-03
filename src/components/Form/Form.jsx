import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { changeImage } from '../../store/image/action'
import { changeText } from '../../store/text/action'
import { changeLink } from '../../store/link/action'
import ColorPicker from '../ColorPicker/ColorPicker'

import styles from './Form.module.scss'

const Form = () => {
  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()
  }

  const onImageChange = (e) => {
    dispatch(changeImage(e.target.value))
  }

  const onTextChange = (e) => {
    dispatch(changeText(e.target.value))
  }

  const onLinkChange = (e) => {
    dispatch(changeLink(e.target.value))
  }

  return (
    <form onSubmit={onSubmit}>
      <label className={styles.inputGroup}>
        <span className={styles.inputName}>Image:</span>
        <input type="text" onChange={onImageChange} className={styles.input} />
      </label>

      <label className={styles.inputGroup}>
        <span className={styles.inputName}>Text:</span>
        <input type="text" onChange={onTextChange} className={styles.input} />
      </label>

      <label className={styles.inputGroup}>
        <span className={styles.inputName}>Link:</span>
        <input type="url" onChange={onLinkChange} className={styles.input} />
      </label>

      <ColorPicker />
    </form>
  )
}

export default Form
