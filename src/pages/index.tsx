import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.scss'
import Link from 'next/link'

import { Poppins } from 'next/font/google'

const poppings = Poppins({weight: "400", subsets: ["latin"]})
const poppingsTitle = Poppins({weight: "600", subsets: ["latin"]})

export default function Home() {
  return (
    <>
      <Head>
        <title>Oplab Challenge</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.main}>
        <div className={styles.description}>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <Image
            className={styles.thirteen}
            src="/thirteen.svg"
            alt="13"
            width={40}
            height={31}
            priority
          />
        </div>

        <div className={styles.grid}>
          <Link className={poppings.className} href={'/front-end-test'}>Ir para Teste Front-end</Link>
          <Link className={poppings.className} href={'/back-end-test'}>Ir para Teste Back-end</Link>
        </div>
      </section>
    </>
  )
}
