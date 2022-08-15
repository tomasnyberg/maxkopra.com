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
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores eligendi reiciendis modi sint enim suscipit adipisci consequatur, quibusdam ad. Placeat dolore dolorum illo eaque natus perspiciatis. Dicta distinctio repellat tempora, maxime laboriosam molestias voluptas velit minima facilis, tempore temporibus non recusandae. Voluptates, exercitationem ipsam. Iste, quia architecto nemo accusamus asperiores doloremque reiciendis, fuga hic perferendis saepe debitis minus optio maxime earum repellat delectus. Repellat sint earum quod adipisci ea accusamus quas maxime iusto magni officia aliquid esse tempora est minus corrupti, possimus dicta dolorum consequuntur hic! Debitis quod corporis est exercitationem laborum minima molestiae, tenetur non expedita commodi sequi quibusdam!</p>
      <Link href="/">Go back</Link>
    </>
  )
}

export default about