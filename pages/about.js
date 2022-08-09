import Link from 'next/link'
import Meta from '../components/Meta'

const about = () => {
  return (
    <>
      <Meta title="About"></Meta>
      <h3>This is the about page</h3>
      <p>Some more text</p>
      <Link href="/">Go back</Link>
    </>
  )
}

export default about