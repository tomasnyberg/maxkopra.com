import Nav from './Nav'
import Footer from './Footer'
import Meta from './Meta'
import LayoutStyles from '../styles/Layout.module.css'
import '../styles/Layout.module.css'
import { useState } from 'react'

const Layout = ({children}) => {
  const [darkmode, setdarkmode] = useState(false)
  return (
    <div className={`${LayoutStyles.container} ${darkmode ? LayoutStyles.dark:LayoutStyles.light}`}>
      <Meta></Meta>
      <Nav></Nav>
      <div>
        <main className={LayoutStyles.main}>
          {children}
        </main>
          <Footer/>
      </div>
    </div>
  )
}

export default Layout