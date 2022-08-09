import Nav from './Nav'
import Header from './Header'
import Footer from './Footer'
import Meta from './Meta'
import LayoutStyles from '../styles/Layout.module.css'

const Layout = ({children}) => {
  return (
    <div className={LayoutStyles.container}>
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