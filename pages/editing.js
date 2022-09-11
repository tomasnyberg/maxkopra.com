import Link from 'next/link'
import Meta from '../components/Meta'
import styles from '../styles/Editing.module.css'

const books = () => {
  return (
    <>
      <Meta title="Editing"></Meta>
      <h1 className={styles.headertext}>Editing services</h1>
      <h2>(coming soon!)</h2>
      <div>
      <p>Tired of vague feedback on your drafts? Want to take your writing to the next level through a systematic editing approach?</p>
      <p>Kopra will soon be offering editing services to help you take your story to the next level!</p>

      </div>
      <Link href="/">Go back</Link>
    </>
  )
}

export default books