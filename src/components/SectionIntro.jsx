import clsx from 'clsx'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'

export function SectionIntro({
  eyebrow,
  title,
  textLeft,
  eyebrowTextColor,
  children,
  smaller = false,
  invert = false,
  highlight,
  ...props
}) {
  console.log("EYBROW 2", props.eyebrow2)
  return (
    <Container {...props}>
      <FadeIn className="max-w-2xl">
        <h2>
        {eyebrow && (
            <>
              <span href={`/${eyebrow}`}
                className={clsx(
                  `mb-6 block font-display text-base font-semibold mx-4`,
                   textLeft ? '!text-left' : 'text-center',
                  invert ? 'text-white' : 'text-neutral-950',
                  eyebrowTextColor  && eyebrowTextColor,
                  highlight ? 'inline-flex justify-center rounded-full px-4 py-1.5 text-sm font-semibold transition  bg-[#0d79d8] text-white hover:bg-neutral-800 hover:ring-2 hover:ring-purple-500' :''
                )}
              >
                {eyebrow}
              </span>
              <span className="sr-only"> - </span>
            </>
          )}
        {props.eyebrow2 && (
            <>
              <span href={props.eyebrow2.href}
                className={clsx(
                  `mb-6 block font-display text-base font-semibold`,
                   textLeft ? '!text-left' : 'text-center',
                  invert ? 'text-white' : 'text-neutral-950',
                  highlight ? 'inline-flex justify-center rounded-full px-4 py-1.5 text-sm font-semibold transition  bg-[#6420ff] text-white hover:bg-neutral-800 hover:ring-2 hover:ring-purple-500' :''
                )}
              >
                {props.eyebrow2.text}
              </span>
              <span className="sr-only"> - </span>
            </>
          )}
          <span
            className={clsx(
              'block font-display tracking-tight [text-wrap:balance]  pt-1 pb-1  lg:pt-4 lg:pb-4',
              smaller
                ? 'text-2xl font-semibold'
                : 'text-4xl font-medium sm:text-5xl',
                textLeft ? 'text-left pl-[4%] lg:pl-[4%]' : 'text-center',
              invert ? 'text-white' : 'text-neutral-950'
            )}
          >
            {title}
          </span>
        </h2>
        {children && (
          <div
            className={clsx(
              'lg:-mt-8  text-xl',
              invert ? 'text-neutral-300' : 'text-neutral-600'
            )}
          >
            {children}
          </div>
        )}
      </FadeIn>
    </Container>
  )
}
