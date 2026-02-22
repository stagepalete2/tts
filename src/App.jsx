import { Outlet } from 'react-router-dom'

import Header from '@/components/Header/Header'
import Sidebar from '@/components/Sidebar/Sidebar'

import styles from './App.module.scss'

const App = () => {
  return (
    <div className={styles.layout}>
      <Sidebar />
      
      <main className={styles.content}>
        <Header />
        <div className={styles.inner_content}>
				  <Outlet />
        </div>
			</main>
    </div>
  )
}

export default App