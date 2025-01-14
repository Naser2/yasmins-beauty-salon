"use client"

import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Logo } from '@/components/Logo'
import { socialMediaProfiles } from '@/components/SocialMedia'

const navigation = [
  {
    title: 'WORK',
    links: [
      { title: 'Porfolio', href: '#/portfolio' },
      { title: 'Services', href: '#/services' },
     
      {
        title: (
          <>
            See all <span aria-hidden="true">&rarr;</span>
          </>
        ),
        href: '#/services',
      },
    ],
  },
  {
    title: 'MBEAUTENOIR',
    links: [
      { title: 'About', href: '#/about' },
   
      { title: 'Contact', href: '#/contact' }, 
        { title: 'Shop With Us', href: '/process' },
    ],
  },
  {
    title: 'SOCIAL',
    links: socialMediaProfiles,
  },
]

export function Navigation() {
  return (
    <nav>
      <ul role="list" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
        {navigation.map((section) => (
          <li key={section.title}>
            <div className="font-display text-sm font-semibold tracking-wider text-neutral-950">
              {section.title}
            </div>
            <ul role="list" className="mt-4 text-sm text-neutral-700">
              {section.links.map((link) => (
                <li key={link.title} className="mt-4">
                  <Link
                    href={link.href}
                    className="transition hover:text-neutral-950"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export function ArrowIcon(props) {
  return (
    <svg viewBox="0 0 16 6" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3 10 .5v2H0v1h10v2L16 3Z"
      />
    </svg>
  )
}

export function NewsletterForm() {
  return (
    <form className="max-w-sm">
      <h2 className="font-display text-sm font-semibold tracking-wider text-neutral-950">
        Sign up for our newsletter
      </h2>
      <p className="mt-4 text-sm text-neutral-700">
        Subscribe to get the latest design news, articles, resources and
        inspiration.
      </p>
      <div className="relative mt-6">
        <input
          type="email"
          placeholder="Email address"
          autoComplete="email"
          aria-label="Email address"
          className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
        />
        <div className="absolute inset-y-1 right-1 flex justify-end">
          <button
            type="submit"
            aria-label="Submit"
            className="flex aspect-square h-full items-center justify-center rounded-xl bg-black ring-purple-100 ring-2  text-white transition hover:bg-neutral-800"
          >
            <ArrowIcon className="w-4" />
          </button>
        </div>
      </div>
    </form>
  )
}

function  Footer(){
  return <div id="shopify-section-footer" class="shopify-section">    <footer class="relative flex flex-col overflow-hidden">
  <div class="bg-crema lg:p-smm">
      <div class="flex justify-between flex-col-reverse lg:flex-row">
          <ul class="container py-10 lg:p-0 w-full lg:w-8/12 flex flex-col lg:grid lg:grid-cols-3 lg:gap-x-5">
              <li class="text-lg footer-tab">
                  <input class="hidden" type="checkbox" id="footer-1" data-index="1"/>
                  <label for="footer-1" class="footer-label block py-4 lg:pt-0 lg:mb-4 text-lg font-sans uppercase">
                      Company
                  </label>
                  <div class="footer-content">
                       
                      <div class="font-serif mb-1  pt-1 lg:p-0">
                          <a href="/pages/about" class="inline">About</a>
                      </div> 
                       
                      <div class="font-serif mb-1 ">
                          <a href="/pages/store-locator" class="inline">Store Finder</a>
                      </div> 
                       
                     
                       
                      <div class="font-serif mb-1 ">
                          <a href="/pages/beauty-burden" class="inline">Beauty Burden</a>
                      </div> 
                       
                      <div class="font-serif mb-1 ">
                          <a href="/pages/friend" class="inline">Get $10 Off</a>
                      </div> 
                      
                  </div> 
              </li>
              <li class="text-lg footer-tab">
                  <input class="hidden" type="checkbox" id="footer-2"/>
                  <label for="footer-2" class="footer-label block py-4 lg:pt-0 lg:mb-4 text-lg font-sans uppercase">
                      Help
                  </label>
                  <div class="footer-content">
                       
                      <div class="font-serif mb-1  pt-1 lg:p-0">
                          <a href="/pages/faq" class="inline">FAQ</a>
                      </div> 
                       
                      <div class="font-serif mb-1 ">
                          <a href="/pages/recycling" class="inline">Recycling</a>
                      </div> 
                       
                      <div class="font-serif mb-1 ">
                          <a href="/pages/shipping-returns" class="inline">Shipping &amp; Returns</a>
                      </div> 
                       
                      <div class="font-serif mb-1 ">
                          <a href="/pages/contact-us" class="inline">Contact Us</a>
                      </div> 
                        
                  </div> 
              </li>
              <li class="text-lg footer-tab">
                  <input class="hidden" type="checkbox" id="footer-3"/>
                  <label for="footer-3" class="footer-label block py-4 lg:pt-0 lg:mb-4 font-sans uppercase">
                      Community
                  </label>
                  <div class="footer-content">
                       
                      <div class="font-serif mb-1  pt-1 lg:p-0">
                          <a href="https://www.instagram.com/yasminsbeautysalon" class="inline" target="_blank">Instagram</a>
                      </div> 
                       
                      <div class="font-serif mb-1 ">
                          <a href="https://www.tiktok.com/@yasmine.benz3?_t=8s22SzlrRfi&_r=1" class="inline" target="_blank">Tiktok</a>
                      </div> 
                       
                      <div class="font-serif mb-1 ">
                          <a href="/carrers" class="inline" target="_blank">Careers</a>
                      </div> 
                        
                  </div>
              </li>
              <li class="block lg:hidden text-lg footer-tab">
                  <input class="hidden" type="checkbox" id="footer-4"/>
                  <label for="footer-4" class="footer-label block py-4 lg:pt-0 lg:mb-4 font-sans uppercase">
                     Legal
                  </label>
                  <div class="footer-content">
                      <div class="font-serif mb-1 pt-1 lg:p-0">
                          <a href="/terms-conditions" class="inline">Terms and Conditions</a>
                      </div>
                      <div class="font-serif mb-1">
                          <a href="/pages/privacy-policy" class="inline">Privacy Policy</a>
                      </div>
                      <div class="font-serif mb-1">
                          <a data-acsb-custom-trigger="true" class="inline cursor-pointer">Accessibility</a>
                      </div>
                  </div> 
              </li>
          </ul> 
          <div class="container py-10 lg:p-0 w-full lg:w-4/12 bg-apricot lg:bg-pink-100/70 lg:rounded-lg">
              <form class="flex flex-col text-lg newsletter-form text-white/90 lg:p-4">
                  <div class="mb-10 serializer">
                      <span><p><strong>10% OFF YOUR FIRST VISIT </strong>— Signup for the latest offers, news, first-person essays, and expert hair tips.</p></span> 
                  </div>   
                  <div class="relative pb-2 md:w-1/2 lg:w-full flex items-center border-b border-ochre val-w-email">
                      <input class="w-full bg-transparent outline-none uppercase font-sans placeholder-ochre text-white text-ochre" type="text" placeholder="ENTER YOUR EMAIL" data-index="0"/> 
                      <div class="absolute right-0 text-ochre font-sans text-xs tracking-plus leading-relaxed">
                          <span>Incorrect format, please try again.</span>
                      </div>
                      <button type="submit" role="submit" title="submit" class="absolute right-0 w-3 h-3 focus:outline-none">
                          <svg class="fill-current text-ochre">
                              <use href="#svg-arrow"></use>
                          </svg>
                      </button>  
                  </div>
              </form>
          </div>  
      </div>
  </div>
  <div class="container bg-ochre">
      <div class="flex justify-between items-center text-white  hover:text-flamingo h-btn">
          <span class="uppercase text-sans-xs-caps">© 2025 YASMINS BEAUTY SALON LLC</span>
          <ul class="font-sans text-xs tracking-plus leading-relaxed flex">
              <li class="mr-6 hidden lg:block">
                  <a href="/pages/terms-conditions">Terms &amp; Conditions</a>
              </li>
              <li class="mr-6 hidden lg:block">
                  <a href="/pages/privacy-policy">Privacy Policy</a>
              </li>
              <li class="mr-6 hidden lg:block">
                  <a data-acsb-custom-trigger="true" class="cursor-pointer">Accessibility</a>
              </li> 
              <li>
              <div class="site-cta text-sm  cursor-pointer select-none lg:hidden">By Nas</div>
                  <div class="site-cta text-sm  cursor-pointer select-none max-lg:hidden">By NasStudios.co</div>
              </li>
          </ul>
      </div>
  </div> 
  <div class="transform translate-y-full site-credit bottom-0 right-0 left-0 absolute container bg-flamingo">
      <div class="flex justify-between items-center h-btn font-sans text-xs tracking-plus leading-relaxed"> 
          <ul class="flex"> 
              <li>
                  <div class="flex"><span class="block">Designed by&nbsp;</span><a href="https://www.lottanieminen.com/" target="_blank" class="underline">Lotta Nieminen</a></div>
              </li>
              <li class="ml-3">
                  <div class="flex"><span class="block">Built by&nbsp;</span><a href="https://www.baggy.studio/" target="_blank" class="underline">Baggy</a></div>
              </li>  
          </ul>
          <ul class="flex">  
              <li><div class="site-cta cursor-pointer select-none">Close</div></li>
          </ul>
      </div>
  </div>
</footer>

</div>
}

 export default  Footer




 // export function Footer() {
//   return (
//     <div as="footer" className="pt-12 w-full md:mt-0 lg:mt-10 mx-auto max-w-none border-b-[0.17em] border-b border-purple-600">
   
//      <div className="bg-[rgb(137 96 86 / 7%)] max-[700px]:-pt-[15%] -pt-[15%] max-w-7xl">
//       <FadeIn>
//         <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2 px-6 lg:px-8 ">
//           <Navigation />
//         </div>
//         <div className="lg:!hidden mb-[0] mt-14 flex-wrap items-end justify-between gap-x-6 gap-y-4 pt-0 border-t border-neutral-950/10 pt-12 bg-[#faebd7]">
    
//      <div className=" px-6 justify-center !pt-8 lg:px-8 bg-[black] lg:!bg-white !h-[8em] py-[5%] pt-[10%] max-[700px]:pt-[3%]  max-[700px]:py-[2%]   md:!px-[10%] lg:!px-[22%] xl:!px-[20%]"  style={{position: 'relative' , display: 'block' ,'pointer-events': 'auto', 'z-index': 9, visibility: 'visible', perspective: '601px'}}>
//      <h2 className='inline-flex text-white lg:text-black  text-center  !w-[100%]  !text-[2.04em]  lg:text-black md:!text-[4em] md:text-center  lg:text-[9em] xl:!text-[6em] xl:!py-14 max-w-3xl !font-bold signature-font  animated-logo'
//      >
//        ✨ MBEAUTé NOIR ✨</h2>
      
//      </div> 
        
//         </div>
//       </FadeIn>
//       </div>
//       <div className="mb-[0] flex-wrap items-end justify-between gap-x-6 gap-y-4 pt-4 border-t border-neutral-950/10  bg-[#faebd7]">
//           <Link href="/" aria-label="Home">
//             <Logo className="h-8" fillOnHover />
//           </Link>
//           </div>
//     </div>
//   )
// }
