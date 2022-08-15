import styles from '../styles/Nav.module.css'
import Link from 'next/link'
import { useContext } from 'react'
import { darkmodeContext } from './Layout'

const Nav = () => {

  const { darkmode } = useContext(darkmodeContext)

  return (
    <>
      <div className={`${styles.nav} ${darkmode ? styles.dark:styles.light}`}>
        <ul>
          <Link  href="/about">
            <li className={styles.link}>
                About
            </li>
          </Link>
          <Link href="/">
            <li className={styles.link}>
                Blog
            </li>
          </Link>
          <Link href="/books">
            <li className={styles.link}>
                Books
            </li>
          </Link>
          <Link href="/">
            <li className={styles.link}>
                Editing
            </li>
          </Link>
        </ul>
      </div>
    </>
  )
}

export default Nav