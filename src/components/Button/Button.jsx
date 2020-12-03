import React from 'react'
import classNames from 'classnames'

import styles from './Button.module.scss'

const Button = ({ type, text, onClick, className }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={classNames(styles.button, className)}
    >
      {text}
    </button>
  )
}

export default Button
