import Link from 'next/link'
const about = () => {
  return (
    <>
      <h3>This is the about page</h3>
      <p>Some more text</p>
      <Link href="/">Go back</Link>
    </>
  )
}

export default about