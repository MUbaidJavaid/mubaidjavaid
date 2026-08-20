'use client'

import { BookOpen, FolderGit2, Timer, type LucideIcon } from 'lucide-react'
import Link from 'next/link'

import styles from './ProofRotatingCards.module.css'

const proofIcons = {
  'folder-git2': FolderGit2,
  'book-open': BookOpen,
  timer: Timer
} as const satisfies Record<string, LucideIcon>

export type ProofStatIcon = keyof typeof proofIcons

export type ProofStat = {
  label: string
  value: string
  hint: string
  icon: ProofStatIcon
  href: string
}

type ProofRotatingCardsProps = {
  stats: ProofStat[]
}

/** Rotating proof cards — pause in place + slight zoom on hover. */
export function ProofRotatingCards ({ stats }: ProofRotatingCardsProps) {
  const items = stats.slice(0, 3)

  return (
    <div className='flex flex-col items-center'>
      <div className={styles.proofWrap} aria-label='Proof metrics carousel'>
        {items.map(stat => {
          const Icon = proofIcons[stat.icon]
          const ghost = stat.value.replace(/[^\d]/g, '') || stat.value

          return (
            <Link
              key={stat.label}
              href={stat.href}
              className={styles.card}
              aria-label={`${stat.label}: ${stat.value}. ${stat.hint}`}
            >
              <div className={styles.content}>
                <span aria-hidden>{ghost}</span>
                <div className={styles.contentIcon} aria-hidden>
                  <Icon strokeWidth={2} className='h-9 w-9' />
                </div>
                <p className={styles.contentValue}>{stat.value}</p>
                <p className={styles.contentLabel}>{stat.label}</p>
                <p className={styles.contentHint}>{stat.hint}</p>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
