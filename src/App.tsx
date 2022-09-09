import { Header } from "./Components/Header"

import styles from './App.module.css'

import './global.css'
import { NewTaskInput } from "./Components/NewTaskInput"

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <NewTaskInput />
      </div>
    </>
  )
}

export default App
