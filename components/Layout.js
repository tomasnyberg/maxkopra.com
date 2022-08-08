import Nav from './Nav'
import Header from './Header'
import Footer from './Footer'
import LayoutStyles from '../styles/Layout.module.css'

const Layout = ({children}) => {
  return (
    <div className={LayoutStyles.container}>
      <Nav></Nav>
      <div>
        <main className={LayoutStyles.main}>
          <Header>
            
          </Header>
          {children}
          <Footer>

          </Footer>
        </main>
      </div>
    </div>
  )
}

export default Layout