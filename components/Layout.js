import Nav from './Nav'
import Footer from './Footer'
import Meta from './Meta'
import LayoutStyles from '../styles/Layout.module.css'
import '../styles/Layout.module.css'
import { createContext, useState } from 'react'

export const darkmodeContext = createContext(false)

const Layout = ({children}) => {
  const [darkmode, setdarkmode] = useState(false)

  const toggleDarkmode = () => {
    setdarkmode(!darkmode)
  }

  return (
    // Create a provider for the darkmodeContext
    <darkmodeContext.Provider value={{darkmode, toggleDarkmode}}>
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
    </darkmodeContext.Provider>
  )
}

export default Layout