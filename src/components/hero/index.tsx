import Image from 'next/image'
import { ReactNode } from 'react'
import styles from './styles.module.scss'

interface HeroProps {
  heading: string
  buttonUrl: string
  buttonTitle: string
  bannerUrl: string
  icon: ReactNode
}

export function Hero({
  heading,
  buttonUrl,
  buttonTitle,
  bannerUrl,
  icon,
}: HeroProps) {
  return (
    <main className={styles.main}>
      <div className={styles.containerHero}>
        <h1 className={styles.title}>{heading}</h1>
        <a target="_blank" href={buttonUrl} className={styles.link}>
          {icon}
          {buttonTitle}
        </a>
      </div>
      <div className={styles.contentBanner}>
        <Image
          src={bannerUrl}
          alt={heading}
          priority={true}
          quality={100}
          fill={true}
          className={styles.banner}
          sizes="(max-width: 480px) 100vw, (max-width: 1024px) 75vw, 60vw"
        />
      </div>
    </main>
  )
}
