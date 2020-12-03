import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { exportComponentAsPNG } from 'react-component-export-image'
import { useClipboard } from 'use-clipboard-copy'
import Button from '../Button/Button'
import styleBackground from '../../utils/styleBackground'

import styles from './Preview.module.scss'

const Preview = () => {
  const image = useSelector(({ image }) => image)
  const text = useSelector(({ text }) => text)
  const link = useSelector(({ link }) => link)
  const colors = useSelector(({ color }) => Object.values(color))
  const banner = useRef(null)
  const clipboard = useClipboard()

  const onSaveAsPNGButtonClick = () => {
    exportComponentAsPNG(banner)
  }

  const onCopyHTMLButtonClick = () => {
    clipboard.copy(banner.current.outerHTML)
  }

  const onCopyJSONButtonClick = () => {
    clipboard.copy(JSON.stringify({
      image,
      text,
      link,
      colors: colors.map(({ color, end }) => ({ color, end }))
    }))
  }

  return (
    <>
      <a
        href={link}
        target="_blank"
        ref={banner}
        style={{ background: styleBackground(colors) }}
        className={styles.banner}
      >
        {image && <img src={image} alt="Banner image" width={90} height={90} className={styles.image} />}
        <p className={styles.text}>{text}</p>
      </a>
      <div className={styles.buttons}>
        <Button type="button" text="Save as PNG" onClick={onSaveAsPNGButtonClick} className={styles.button} />
        <Button type="button" text="Copy HTML" onClick={onCopyHTMLButtonClick} className={styles.button} />
        <Button type="button" text="Copy JSON" onClick={onCopyJSONButtonClick} className={styles.button} />
      </div>
    </>
  )
}

export default Preview

