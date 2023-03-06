import Image from 'next/image';
import styles from '../styles/front-end-test.module.scss';
import { Poppins } from 'next/font/google'
import Link from 'next/link';

const poppings = Poppins({weight: "400", subsets: ["latin"]})
const poppingsTitle = Poppins({weight: "600", subsets: ["latin"]})

export default function FrontEndTest() {
  return (
    <section className={`${styles.container} ${poppings.className}`}>
      <div className={styles.columnImage} />
      <div className={styles.columnContent}>
        <Link 
          href={''}
        >
          <img src="/assets/app_icon.png" alt="" />
        </Link>
        <h5>MESSENGER FOR ANONYMOUS</h5>
        <h1 className={poppingsTitle.className}>Send voice and text message anonymously</h1>
        <p>Aria is a messenger for people who prefer anonymity. Chat, call and hangout with friends anonymously. Aria is a tor for private conversations. None can catch thou.</p>
        <div className={styles.downloads}>
          <h5>DOWNLOAD ARIA FOR FREE ON</h5>
          <Link href={''}>
            <Image 
              src={'/assets/playstore.png'}
              width={200}
              height={66}
              alt={'PlayStore'}
            />
          </Link>
          <Link href={''}>
              <Image 
                src={'/assets/appstore.png'}
                width={200}
                height={66}
                alt={'PlayStore'}
              />
          </Link>
        </div>
        <footer>
          <span>© Aria Messenger 2016</span>
          <Link href={''}>Facebook</Link>
          <Link href={''}>Twitter</Link>
          <Link href={''}>Instagram</Link>
        </footer>
      </div>
    </section>
  )
}