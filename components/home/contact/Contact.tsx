import { Reveal } from '@/components/utils/Reveal'
import styles from './contact.module.scss'
import { AiFillMail } from 'react-icons/ai'
import Link from 'next/link'
import { useState, type ChangeEvent, FormEvent } from 'react'
import { StandardButton } from '@/components/buttons/StandardButton'
import { OutlineButton } from '@/components/buttons/OutlineButton'

export const Contact = () => {
  return (
    <section className="section-wrapper" id="contact">
      <div className={styles.contactWrapper}>
        <Reveal width="100%">
          <h4 className={styles.contactTitle}>
            Contact<span>.</span>
          </h4>
        </Reveal>
        <Reveal width="100%">
          <p className={styles.contactCopy}>
            I&apos;d love to discuss more with you! Reach out to me through{' '}
            <Link
              href="https://www.linkedin.com/in/david-crimi/"
              target="_blank"
              rel="nofollow"
            >
              Linkedin
            </Link>{' '}
            or by email using the form below if that&apos;s more your speed.
          </p>
        </Reveal>
        <Reveal width="100%">
          {/* Submit Button */}
          <div className="flex justify-center items-center">
            <a href="mailto:davidcrimi6@gmail.com">
              <StandardButton>Email</StandardButton>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
