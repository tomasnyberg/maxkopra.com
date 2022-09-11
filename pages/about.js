import Link from 'next/link'
import Meta from '../components/Meta'
import styles from '../styles/about.module.css'
import Image from 'next/image'
import maxPic from '../public/maxprofessionalcrop.png'

const about = () => {
  return (
    <>
      <Meta title="About"></Meta>
      <h1>About me</h1>
      <Image className={styles.pfp} width="200px" height="200px" src={maxPic}></Image>
      <div>
      <p>Max Kopra is a writer, artist, and soon-to-be Master of Social Sciences.</p>
      <p>Currently Kopra writes on a very secret Work-in-progress that will be dark, epic, and absolutely spicy. Get a sneak peek <a href="/books">here</a></p>
      </div>
      <Link href="/">Go back</Link>
    </>
  )
}

export default about