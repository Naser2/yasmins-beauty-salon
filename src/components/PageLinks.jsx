import Link from 'next/link'
import clsx from 'clsx'

import { Border } from '@/components/Border'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridPattern } from '@/components/GridPattern'
import { SectionIntro } from '@/components/SectionIntro'
import { formatDate } from '@/lib/formatDate'

function ArrowIcon(props) {
  return (
    <svg viewBox="0 0 24 6" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 3 18 .5v2H0v1h18v2L24 3Z"
      />
    </svg>
  )
}

function PageLink({ page }) {
  return (
    <article key={page.href}>
      <Border
        position="left"
        className="relative flex flex-col items-start pl-8"
      >
        <h3 className="mt-6 text-base font-semibold text-neutral-950">
          {page.title}
        </h3>
        <time
          dateTime={page.date}
          className="order-first text-sm text-neutral-600"
        >
          {formatDate(page.date)}
        </time>
        <p className="mt-2.5 text-base text-neutral-600">{page.description}</p>
        <Link
          href={page.href}
          className="mt-6 flex gap-x-3 text-base font-semibold text-neutral-950 transition hover:text-neutral-700"
          aria-label={`Read more: ${page.title}`}
        >
          Read more
          <ArrowIcon className="w-6 flex-none fill-current" />
          <span className="absolute inset-0" />
        </Link>
      </Border>
    </article>
  )
}

export function PageLinks({ title, intro, pages, className, textColor, invert, padding  }) {
  console.log("PADDING", padding)
  return (
    <div className={clsx('', className)}>
      <div className="e inset-x-0 z-40 bottom-[0%]  rounded-t-4xl bg-gradient-to-b from-neutral-50">
        {intro && padding == true?<div  className={`py-6 bg-black mx-0 lg:py-12`}> 
        <SectionIntro invert textLeft title={title} smaller className={`bg-black mx-0`}>
        <div className='mx-auto max-w-7xl px-6 lg:px-8 text-left'>
          <p className='mb-3 lg:mb-6 '>{intro}  
          <a href="#" className="my-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-white  hover:bg-indigo-500 focus:ring-4 focus:outline-none focus:ring-blue-300 
        dark:bg-white hover:text-white dark:focus:bg-[#a06f63]">
           Gift Card 
             <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a></p> 
      </div>
    </SectionIntro>
    </div>
    : intro && !padding ==true  && <SectionIntro invert textLeft title={title} smaller className={`bg-black  max-w-full my-3  md:py-4 md:pb-10`}>
          <p>{intro}</p>
        </SectionIntro>
        }
        
      </div>
      
    
      {/* <Container className={intro ? 'mt-14 lg:mt-32' : 'lg:mt-24'}>
        <FadeInStagger className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          {pages.map((page) => (
            <FadeIn key={page.href}>
              <PageLink page={page} />
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container> */}
    </div>
  )
}
