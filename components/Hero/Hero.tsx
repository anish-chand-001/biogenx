
import Image from 'next/image'
import styles from './Hero.module.css'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.imageContainer}>
        <Image
          src="/hero/biogenx-hero.png"
          alt="Mother and Baby"
          fill
          priority
          sizes="(max-width: 768px) 50vw, 55vw"
          className={styles.heroImage}
        />
      </div>

      <div className={styles.content}>
        <h1>
          Empowering
          <br />
          <span>Motherhood.</span>
          <br />
          Nurturing
          <br />
          <span>Childhood.</span>
        </h1>

        <p>
          Science-backed healthcare solutions
          for women and growing families.
        </p>

        <Link href="/solutions" passHref>
          <button>
            Explore Our Products →
          </button>
        </Link>
      </div>
    </section>
  )
}