'use client'

import {
  createContext,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { motion, MotionConfig, useReducedMotion } from 'framer-motion'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import  Footer  from '@/components/Footer'
import { GridPattern } from '@/components/GridPattern'
import { Logo, Logomark } from '@/components/Logo'
import { Offices } from '@/components/Offices'
import { SocialMedia } from '@/components/SocialMedia'

const RootLayoutContext = createContext({})

function XIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="m5.636 4.223 14.142 14.142-1.414 1.414L4.222 5.637z" />
      <path d="M4.222 18.363 18.364 4.22l1.414 1.414L5.636 19.777z" />
    </svg>
  )
}

function MenuIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M2 6h20v2H2zM2 16h20v2H2z" />
    </svg>
  )
}

function Header({
  panelId,
  invert = false,
  icon: Icon,
  expanded,
  onToggle,
  toggleRef,
}) {
  let { logoHovered, setLogoHovered } = useContext(RootLayoutContext)

  return (
    <Container>
      <div className="flex items-center justify-between">
        <Link
          href="/"
          aria-label="Home"
          onMouseEnter={() => setLogoHovered(true)}
          onMouseLeave={() => setLogoHovered(false)}
        >
          <Logomark
            className="h-8 sm:hidden"
            invert={invert}
            filled={logoHovered}
          />
          <Logo
            className="hidden h-8 sm:block"
            invert={invert}
            filled={logoHovered}
          />
        </Link>
        <div className="flex items-center gap-x-8">
          <Button href="https://mbeautehair.glossgenius.com/contact" invert={invert}>
            Contact us
          </Button>
          <button
            ref={toggleRef}
            type="button"
            onClick={onToggle}
            aria-expanded={expanded.toString()}
            aria-controls={panelId}
            className={clsx(
              'group -m-2.5 rounded-full p-2.5 transition ring-2 ring-indigo-500 hover:bg-[#0d79d8] bg-[#6420ff]',
              invert ? 'hover:bg-white/10' : 'hover:bg-[#0d79d8]'
            )}
            aria-label="Toggle navigation"
          >
            <Icon
              className={clsx(
                'h-6 w-6',
                invert
                  ? 'fill-white group-hover:fill-neutral-200'
                  : 'fill-purple-100 group-hover:fill-purple-100'
              )}
            />
          </button>
        </div>
      </div>
    </Container>
  )
}

function NavigationRow({ children }) {
  return (
    <div className="even:mt-px sm:bg-neutral-950">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2">{children}</div>
      </Container>
    </div>
  )
}

function NavigationItem({ href, className, children }) {
  return (
    <Link
      href={href}
      className={`${className ? className : 'bg-neutral-950 '}  group relative isolate -mx-6 lg:pl-12 px-6 py-10 even:mt-px sm:mx-0 sm:px-0 sm:py-16 sm:odd:pr-16 sm:even:mt-0 sm:even:border-l sm:even:border-neutral-800 sm:even:pl-16`}
    >
      {children}
      <span className="absolute inset-y-0 -z-10 w-screen bg-neutral-900 opacity-0 transition group-odd:right-0 group-even:left-0 group-hover:opacity-100" />
    </Link>
  )
}

function Navigation() {
  return (
    <nav className="mt-px font-display text-5xl font-medium tracking-tight text-white">
      <NavigationRow>
        <NavigationItem href="/work" className={'bg-[#0d79d8]'}>Our Work</NavigationItem>
        <NavigationItem href="/about" className="bg-[#0d79d8]">About UsS</NavigationItem>
      </NavigationRow>
      <NavigationRow>
        <NavigationItem href="/process">Our Process</NavigationItem>
        <NavigationItem href="/blog">Blog</NavigationItem>
      </NavigationRow>
    </nav>
  )
}

function RootLayoutInner({ className, children }) {
  let panelId = useId()
  let [expanded, setExpanded] = useState(false)
  const [mainBackground, setMainBackground]= useState('bg-black')
  let openRef = useRef()
  let closeRef = useRef()
  let navRef = useRef()
  let shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    function onClick(event) {
      if (event.target.closest('a')?.href === window.location.href) {
        setExpanded(false)
      }
    }

    window.addEventListener('click', onClick)

    return () => {
      window.removeEventListener('click', onClick)
    }
  }, [])
  useEffect(() => {
    setTimeout(() => {setMainBackground("bg-[#f3e8ff]")}, 5500)
  }, [mainBackground])
  useEffect(() => {
    setTimeout(() => {setMainBackground("bg-[#6420ff]")}, 11000)
  }, [mainBackground])


  return (
    <MotionConfig transition={shouldReduceMotion ? { duration: 0 } : undefined}>
      <header>
        <div
         className={`absolute left-0 right-0 top-0 z-40 pt-3 px-4 text-center bg-[#ed209f]  border-t border-[#eed1e3]`} 
          aria-hidden={expanded ? 'true' : undefined}
          inert={expanded ? '' : undefined}
        >
       
          <a href="#"><h4 className="text-white ">
           Welcome to Yasmins</h4></a>
         

        </div>
        <div class="mt-[2.5rem] z-30 bg-[#eed1e3] w relative pt-2 pb-2 px-4 lg:px-20 bg-white" bandcolor="main-bg-yellow">
          <div class="flex items-center justify-between mr-4">

            <a href="#" role="link" class="mr-4">
              <img src="/cropped-YasminBeautyShop.png" class="max-w-[33vw] sm:!max-h-[4rem] lg:!max-h-[5.5rem] " width="356" height="67" alt="YasminBeauty Hair Salon Logo" id="logo" data-height-percentage="54" data-actual-width="356" data-actual-height="67" />
            </a>

            <div class="flex space-x-4">
              <span class='text-sm md:text-lg lg:text-lg'><a href="#SERVICES">Services</a></span>
              <span class='text-sm md:text-lg lg:text-lg'><a href="#CONTACT">Contact</a></span>
              <span class='text-sm md:text-lg lg:text-lg'><a href="#ABOUT">About</a></span>
            </div>
          </div>
        </div>
      </header>

      <motion.div
        layout
        style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
        className="relative flex flex-auto overflow-hidden bg-white"
      >
        <motion.div
          layout
          className="relative isolate flex w-full flex-col"
        >
        
          <main className={clsx(className, "w-full flex-auto")}>
          
          {children}
          </main>

          <Footer />
        </motion.div>
      </motion.div>
    </MotionConfig>
  )
}

export function RootLayout({ classN, children }) {
  console.log("CLASS", classN)
  let pathname = usePathname()
  let [logoHovered, setLogoHovered] = useState(false)

  return (
    <RootLayoutContext.Provider value={{ logoHovered, setLogoHovered }} className={classN}>
      <RootLayoutInner className={classN}  key={pathname}>{children}</RootLayoutInner>
    </RootLayoutContext.Provider>
  )
}
