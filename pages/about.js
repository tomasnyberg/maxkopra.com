import Link from 'next/link'
import Meta from '../components/Meta'
import styles from '../styles/about.module.css'

const about = () => {
  return (
    <>
      <Meta title="About"></Meta>
      <h1>About me</h1>
      <p>Some more text</p>
      <Link href="/">Go back</Link>
    </>
  )
}

export default about