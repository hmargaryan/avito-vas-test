import React from 'react'
import Preview from '../Preview/Preview'
import Form from '../Form/Form'

import styles from './App.module.scss'

const App = () => {
  return (
    <main role="main" className={styles.wrapper}>
      <h1 className="visually-hidden">Avito Banner Creator</h1>
      <Preview />
      <Form />
    </main>
  )
}

export default App
