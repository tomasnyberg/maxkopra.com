import Link from 'next/link'
import Meta from '../components/Meta'
import styles from '../styles/books.module.css'
import Image from 'next/image'
import comingsoon from '../public/comingsoon.png'

const books = () => {
  return (
    <>
      <Meta title="Books"></Meta>
      <h1 className={styles.booktitle}>WIP #1</h1>
      <Image className={styles.coverart} width="200px" height="200px" src={comingsoon}></Image>
      <p>The fields are burning.</p>
      <p>War tears the land apart.</p>
      <p>The sun sets, and the dragon comes...</p>
      <Link href="/">Go back</Link>
    </>
  )
}

export default books