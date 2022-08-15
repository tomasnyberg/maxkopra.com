import styles from '../styles/Footer.module.css'
import { useContext } from 'react'
import { darkmodeContext } from './Layout'

const Footer = () => {
  const { darkmode, toggleDarkmode } = useContext(darkmodeContext)
  return (

    <div className={`${styles.footer} ${darkmode ? styles.dark:styles.light}`}>
      <p className={styles.footertext}>
        Sign up for the newsletter (Coming soon)
      </p>
    </div>
  )
}

export default Footer