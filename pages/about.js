import Link from 'next/link'
import Meta from '../components/Meta'
import styles from '../styles/about.module.css'
import Image from 'next/image'
import maxPic from '../public/max2.PNG'

const about = () => {
  return (
    <>
      <Meta title="About"></Meta>
      <h1>About me</h1>
      <Image className={styles.pfp} width="200px" height="200px" src={maxPic}></Image>
      <p>Some more text</p>
      <Link href="/">Go back</Link>
    </>
  )
}

export default about