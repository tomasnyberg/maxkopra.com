import styles from '../styles/Nav.module.css'
import Link from 'next/link'

const Nav = () => {
  return (
    <>
      <div className={styles.nav}>
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
        </ul>
      </div>
    </>
  )
}

export default Nav