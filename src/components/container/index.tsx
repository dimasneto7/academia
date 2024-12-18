import { ReactNode } from 'react'
import styles from './styles.module.scss'

export function Container({ children }: ReactNode) {
  return <div className={styles.container}>{children}</div>
}
