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
import { isMotionValue, motion, MotionConfig, useReducedMotion } from 'framer-motion'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import  Footer  from '@/components/Footer'
import { GridPattern } from '@/components/GridPattern'
import { Logo, Logomark } from '@/components/Logo'
import { GiftCard } from '@/components/GiftCard'
import { SocialMedia } from '@/components/SocialMedia'


import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'

const products = [
  { name: 'Braids', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Scalp Treatments', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Front Laces', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Eyelashes ', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },

]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resizeIconAnimation, setResizeIconAnimation] = useState("33vw");
  const [navBG, setnavBG] = useState("bg-gradient-to-tr from-white via-[#f4d7db]  to-[#ecaee5]");``

  useEffect(() => {
    let timeout;
    if (mobileMenuOpen) {
      setResizeIconAnimation("w-[240px] mt-4 sm:w-[480px] sm:-mt-1");
      timeout = setTimeout(() => {
        setResizeIconAnimation("w-[240px] mt-4 sm:w-[200px] sm:-mt-1");
      }, 500); // 0.5 seconds timeout
    } else {
      setResizeIconAnimation("w-[140px] mt-4 sm:w-[380px] sm:-mt-1");
    }

    // Cleanup function to clear timeout if mobileMenuOpen changes quickly
    return () => clearTimeout(timeout);
  }, [mobileMenuOpen]);
  useEffect(() => {
    let timeout;
    if (!mobileMenuOpen) {
      setnavBG(" bg-gradient-to-tr from-white via-[#f4d7db]   via-main to-[#ecaee5]");
      timeout = setTimeout(() => {
        setnavBG("bg-sky-300");
      }, 500); // 0.5 seconds timeout
    } else {
      setnavBG("bg-gradient-to-tr from-white via-[#f4d7db]  to-[#ecaee5]");
    }

    // Cleanup function to clear timeout if mobileMenuOpen changes quickly
    return () => clearTimeout(timeout);
  }, [mobileMenuOpen]);

  return (
    <header className={clsx(`bg-white  mt-[2rem] lg:mt-[2.7rem]`)}   style={{
      transition: "all 1.8s ease-in-out",
      
    }}>
      <nav aria-label="Global" className={clsx( mobileMenuOpen && navBG ,"mx-auto  max-h-[5rem] flex max-w-7xl items-center justify-between p-6 lg:px-8  bg-gradient-to-tr from-white  via-white via-white  to-[#f6e0e3] lg:bg-gradient-to-tr lg:from-white lg:via-white  to-[#f6e0e3]  to-[#ecaee5] " )}>
      <div
         className={(clsx(`${mobileMenuOpen ? "bg-[#021c1a]" :"bg-[#093834de]"} absolute left-0 right-0 top-0 z-10 pt-3 px-4 text-center  hover:border-b border-pink-400   border-t border-[#eed1e3]`))} 
          aria-hidden={mobileMenuOpen ? 'true' : undefined}
          inert={mobileMenuOpen ? '' : undefined}
          >
          <Link href="#"><h4 className="text-white ">
             Welcome to Yasmins</h4>
          </Link>
        </div>
        <Link href="/" role="link" className="-ml-4 mr-4">
                <div id="DIALOG_LOGO" className={ clsx(mobileMenuOpen ? resizeIconAnimation : "w-[140px] mt-4 sm:w-[180px] sm:-mt-1") }
                  style={{
                    transition: "all 1.8s ease-in-out",
                    // width: mobileMenuOpen ? "200px" : {resizeIconAnimation},
                   
                    // maxHeight: mobileMenuOpen ? "unset" : "5.5rem",
                    // overflow: "hidden",
                    display: "inline-block",
                  }}
                >
                  <img
                    src={
                      mobileMenuOpen
                        ? "/ZXhLlC01.svg"
                        : "/cropped-YasminBeautyShop.png"
                    }
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                    alt="YasminBeauty Hair Salon Logo"
                    id="logo"
                    data-height-percentage="54"
                    data-actual-width="356"
                    data-actual-height="67"
                  />
                </div>
              </Link>
        {/* <div className="mt-[4.5rem] lg:mt-1 flex lg:flex-1"
          aria-hidden={mobileMenuOpen ? 'true' : undefined}>
          
          <Link href="#" className="">
            <span className="sr-only">Your Company</span>
           <Link href="/" role="link" class="mr-4">
              <img src="/cropped-YasminBeautyShop.png"
               class="max-w-[63vw] sm:!max-h-[4rem] lg:!max-h-[5.5rem] " width="356" height="67" alt="YasminBeauty Hair Salon Logo" id="logo" data-height-percentage="54" data-actual-width="356" data-actual-height="67" />
            </Link>  
          </Link>
        </div> */}
        <div className="..flex ..lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-7 w-7" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <PopoverButton className=" flex items-center gap-x-1 text-sm/6 font-semibold text-[#000000db]   ">
              Product
              <ChevronDownIcon aria-hidden="true" className="h-7 w-7 flex-none text-gray-400" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-black hover:text-white"
                  >
                    <div className="flex h-7 w-71 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon aria-hidden="true" className="h-7 w-7 text-gray-600 group-hover:text-indigo-600" />
                    </div>
                    <div className="flex-auto">
                      <Link href={item.href} className="block font-semibold text-gray-900">
                        {item.name}
                        <span className="absolute inset-0" />
                      </Link>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                {callsToAction.map((item) => (
              <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-[#000000db]   hover:bg-gray-100"
                  >
                    <item.icon aria-hidden="true" className="h-7 w-7 flex-none text-gray-400" />
                    {item.name}
                  </Link>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <Link href="/about" className="text-sm/6 font-semibold  black">
           About
          </Link>
          <Link href="/gift" className="text-sm/6 font-semibold text-gray-900">
            Gift Cards
          </Link>
          <Link href="#" className="text-sm/6 font-semibold text-gray-900">
            Company
          </Link>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="#" className="text-sm/6 font-semibold text-gray-900">
           Call Us <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} id="DIALOG" className="">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className={clsx(`${mobileMenuOpen && "hover:bg-gradient-to-tr from-[#f4d7db]  via-main to-[#ecaee5]"} fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10`)}>
          <div className="flex items-center justify-between ">
          <div href="#" className="-m-1.5 p-1.5 lg:hidden">
              <span className="sr-only">Your Company</span>
              <Link href="/" role="link" className="-ml-4 mr-4">
                <div id="DIALOG_LOGO"
                  style={{
                    transition: "all 1.8s ease-in-out",
                    width: mobileMenuOpen ? "200px" : "33vw",
                    // maxHeight: mobileMenuOpen ? "unset" : "5.5rem",
                    // overflow: "hidden",
                    display: "inline-block",
                  }}
                >
                  <img
                    src={
                      mobileMenuOpen
                        ? "/ZXhLlC01.svg"
                        : "/cropped-YasminBeautyShop_svg"
                    }
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                    alt="YasminBeauty Hair Salon Logo"
                    id="logo"
                    data-height-percentage="54"
                    data-actual-width="356"
                    data-actual-height="67"
                  />
                </div>
              </Link>
            </div>

            <Link href="#" className="w-[50%] -m-1.5 p-1.5 sr-only lg:not-sr-only text-black footer-label block py-4 lg:pt-0 lg:mb-4 text-lg font-sans uppercase">
              <span className="sr-only">Your Company</span>
              <Link href="/" role="link" class="mr-4 font-serif mb-1  pt-1 lg:p-0">
             MENU 
            </Link>  
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-7 w-7" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6 ">
                <Disclosure as="div" className="..-mx-3 lg:!max-w-[20rem]">
                  <DisclosureButton className="hover:bg-black hover:text-white header-tab group flex w-full items-center justify-between   border-2  border-[#7d3b9287] border-black hover:!border-[#7d3b9287] py-2 pl-6 pr-3.5 text-base/7 font-semibold text-[#000000db]   hover:bg-black hover:text-white lg:!rounded-[0px]  lg:!border-black lg:!border-[1px]  lg:hover:!border-[1px]  sm:!px-6 lg:!pt-4 lg:!pb-0">
                  <label for="products" class="footer-label block py-4  lg:!pb-0 lg:pt-0 lg:mb-4 font-sans uppercase">PRODUCTS</label>
                    <ChevronDownIcon aria-hidden="true" className="h-7 w-7 flex-none group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2 header-content">
                    {[...products, ...callsToAction].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="font-serif mb-1  pt-1  block py-2 pl-6 pr-3  bg-[#ae92b84d] pl-2 "
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <div className="flex flex-col space-y-4">
                  <Link
                        href="/"
                        className="header-tab  headerr-label block py-4  lg:!pb-0 lg:pt-0 lg:mb-4 text-lg font-sans uppercase  block  hover:bg-[#7208996e] hover:text-white   border-[#7d3b9287]  border-b hover:!border-[#7d3b9287] border w-80 px-3 py-2 text-base font-semibold text-[#000000db]   hover:bg-black hover:text-white border-black  lg:!rounded-[0px]  lg:!border-black lg:!border-[1px]  lg:hover:!border-[1px]  sm:!px-6 !pl-6  !pl-6  !pl-6 "
                      >
                        Home
                      </Link>
                  <Link
                        href="/about"
                        className="header-tab  headerr-label block py-4  lg:!pb-0 lg:pt-0 lg:mb-4 text-lg font-sans uppercase  block  hover:bg-[#7208996e] hover:text-white   border-[#7d3b9287]  border-b hover:!border-[#7d3b9287] border w-80 px-3 py-2 text-base font-semibold text-[#000000db]   hover:bg-black hover:text-white border-black  lg:!rounded-[0px]  lg:!border-black lg:!border-[1px]  lg:hover:!border-[1px]  sm:!px-6 !pl-6  !pl-6  !pl-6 "
                      >
                        About
                      </Link>
                  <Link
                        href="/gift"
                        className="header-tab  headerr-label block py-4  lg:!pb-0 lg:pt-0 lg:mb-4 text-lg font-sans uppercase  block  hover:bg-[#7208996e] hover:text-white   border-[#7d3b9287]  border-b hover:!border-[#7d3b9287] border w-80 px-3 py-2 text-base font-semibold text-[#000000db]   hover:bg-black hover:text-white border-black  lg:!rounded-[0px]  lg:!border-black lg:!border-[1px]  lg:hover:!border-[1px]  sm:!px-6 !pl-6  !pl-6  !pl-6 "
                      >
                        Gift Cards
                      </Link>
                   
                  <Link
                        href="/map"
                        className="header-tab  headerr-label block py-4  lg:!pb-0 lg:pt-0 lg:mb-4 text-lg font-sans uppercase  block  hover:bg-[#7208996e] hover:text-white   border-[#7d3b9287]  border-b hover:!border-[#7d3b9287] border w-80 px-3 py-2 text-base font-semibold text-[#000000db]   hover:bg-black hover:text-white border-black  lg:!rounded-[0px]  lg:!border-black lg:!border-[1px]  lg:hover:!border-[1px]  sm:!px-6 !pl-6  !pl-6  !pl-6 "
                      >
                      LOCATION
                      </Link>
                  <Link
                        href="/contact"
                        className="header-tab  headerr-label block py-4  lg:!pb-0 lg:pt-0 lg:mb-4 text-lg font-sans uppercase  block  hover:bg-[#7208996e] hover:text-white   border-[#7d3b9287]  border-b hover:!border-[#7d3b9287] border w-80 px-3 py-2 text-base font-semibold text-[#000000db]   hover:bg-black hover:text-white border-black  lg:!rounded-[0px]  lg:!border-black lg:!border-[1px]  lg:hover:!border-[1px]  sm:!px-6 !pl-6  !pl-6  !pl-6 "
                      >
                     Contact
                      </Link>
                  <Link
                        href="/terms"
                        className="header-tab  headerr-label block py-4  lg:!pb-0 lg:pt-0 lg:mb-4 text-lg font-sans uppercase  block  hover:bg-[#7208996e] hover:text-white   border-[#7d3b9287]  border-b hover:!border-[#7d3b9287] border w-80 px-3 py-2 text-base font-semibold text-[#000000db]   hover:bg-black hover:text-white border-black  lg:!rounded-[0px]  lg:!border-black lg:!border-[1px]  lg:hover:!border-[1px]  sm:!px-6 !pl-6  !pl-6  !pl-6 "
                      >
                     Policy
                      </Link>
                    </div>

                   <footer className="mt-[1em]  sm:mt-[4em] w-full bardrop-blur ">
                      <div className="mx-auto max-w-7xl overflow-hidden px-6 pb-[4rem] lg:pt-20 sm:pb-6 lg:px-8">
                      <p href="/contact" className=" text-center ooter-label block py-4  lg:!pb-0 lg:pt-0 lg:mb-4 text-lg font-sans uppercase headerr-label block py-4  lg:!pb-0 lg:pt-0 lg:mb-4 text-lg font-sans uppercase  block rounded-lg  hover:bg-[#7208996e] hover:text-white   px-3 py-2 text-base font-semibold text-[#000000db] hover:bg-black hover:text-white">
                      Social Media</p>
                        <div className="mt-[1em] flex justify-center  gap-x-3 lg:gap-x-7">
                          {footerNavigation.social.map((item) => (
                            <Link key={item.link} href={item.href} className="text-[wheat]  hover:text-[main]  hover:bg-black/60  bg-black  p-1  p-[0.5rem] rounded-full">
                              <span className="sr-only">{item.name}</span>
                              <item.icon aria-hidden="true" className="h-6 w-6" />
                            </Link>
                          ))}
                        </div>
                       
                      </div>
                    </footer>
              </div>
            </div>
          </div>
        
        </DialogPanel>
        
      </Dialog>
       
     
    </header>
  )
}


const footerNavigation = {
  main: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Jobs', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Accessibility', href: '#' },
    { name: 'Partners', href: '#' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'X',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
}
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
          <Button href="/contact" invert={invert}>
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
      className={`${className ? className : 'bg-neutral-950 '}  group relative isolate -mx-6 lg:pl-12 lg:py-10 even:mt-px sm:mx-0 sm:px-0 sm:py-16 sm:odd:pr-16 sm:even:mt-0 sm:even:border-l sm:even:border-neutral-800 sm:even:pl-16`}
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
    <Example />
      {/* <header>
        <div
         className={`absolute left-0 right-0 top-0 z-40 pt-3 px-4 text-center bg-[#021c1a] hover:border-b border-pink-400 hover:bg-[#093834de]  border-t border-[#eed1e3]`} 
          aria-hidden={expanded ? 'true' : undefined}
          inert={expanded ? '' : undefined}>
          <Link href="#"><h4 className="text-white ">
             Welcome to Yasmins</h4>
          </Link>
        </div>
        <div class="mt-[2.5rem] z-30 bg-[#eed1e3] w relative pt-2 pb-2 px-4 lg:px-20 bg-white" bandcolor="main-bg-yellow">
          <div class="flex items-center justify-between mr-4">

            <Link href="/" role="link" class="mr-4">
              <img src="/cropped-YasminBeautyShop.png" class="max-w-[33vw] sm:!max-h-[4rem] lg:!max-h-[5.5rem] " width="356" height="67" alt="YasminBeauty Hair Salon Logo" id="logo" data-height-percentage="54" data-actual-width="356" data-actual-height="67" />
            </Link>  
              <Navigation />
            <div class="flex space-x-4">     
            <span class='text-sm md:text-lg lg:text-lg text-[#011211] hover:text-pink-400'><Link href="/">Home</Link></span>
             <span class='text-sm md:text-lg lg:text-lg text-[#011211] hover:text-pink-400'><Link href="/about">About</Link></span>
              <span class='text-sm md:text-lg lg:text-lg text-[#011211] hover:text-pink-400'><Link href="/#SERVICES">Services</Link></span>
              <span class='text-sm md:text-lg lg:text-lg text-[#011211] hover:text-pink-400 max-lg:hidden'><Link href="/gift">Gift Cards</Link></span>
              <span class='text-sm md:text-lg lg:text-lg text-[#011211] hover:text-pink-400'><Link href="/#CONTACT">Contact</Link></span>
         
           
       
            </div>
          </div>
        </div>
      </header> */}
   
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
