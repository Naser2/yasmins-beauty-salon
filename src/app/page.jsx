import Image from 'next/image'
import Link from 'next/link'

// import { ContactSection } from '@/components/ContactSection'

import NewContactSection from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-light.svg'
import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg'
import logoUnseal from '@/images/clients/unseal/logo-light.svg'
import imageLaptop from '@/images/laptop.jpg'
import { loadMDXMetadata } from '@/lib/loadMDXMetadata'
import clsx from 'clsx'
import { GiftCardSection } from '@/components/ContactSection'
import { GridList, GridListItem } from '@/components/GridList'

import { PageLinks } from '@/components/PageLinks'

import imageAngelaFisher from '@/images/team/angela-fisher.jpeg'
import massiLG from '@/images/massi/massi_imageLG.jpeg'
import massi from '@/images/massi/massi_image.jpeg'
import client1 from '@/images/massi/client-1.png'
import client2  from '@/images/massi/client-2.jpeg'
import client3 from '@/images/massi/client-3.jpeg'
import client4 from '@/images/massi/client-4.jpeg'
import client5 from '@/images/massi/client-5.png'

import Bessseller1 from '@/images/massi/Bessseller-1.webp'
import Bessseller2  from '@/images/massi/Bessseller-2.webp'
import Bessseller3 from '@/images/massi/Bessseller-3.png'

import Intro from '@/components/Intro'
let blogArticles = (await loadMDXMetadata('blog')).slice(0, 2)

// const clients = [
//   ['Phobia', logoPhobiaLight],
//   ['Family Fund', logoFamilyFund],
//   ['Unseal', logoUnseal],
//   ['Mail Smirk', logoMailSmirk],
//   ['Home Work', logoHomeWork],
//   ['Green Life', logoGreenLife],
//   ['Bright Path', logoBrightPath],
//   ['North Adventures', logoNorthAdventures],
// ]

// function Clients() {
//   return (
//     <div className="mt-24  bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
//       <Container>
//         <FadeIn className="flex items-center gap-x-8">
//           <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
//             We’ve worked with hundreds of amazing people
//           </h2>
//           <div className="h-px flex-auto bg-neutral-800" />
//         </FadeIn>
//         <FadeInStagger faster>
//           <ul
//             role="list"
//             className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
//           >
//             {clients.map(([client, logo]) => (
//               <li key={client}>
//                 <FadeIn>
//                   <Image src={logo} alt={client} unoptimized />
//                 </FadeIn>
//               </li>
//             ))}
//           </ul>
//         </FadeInStagger>
//       </Container>
//     </div>
//   )
// }
const team = [
  // {
  //   title: 'Leadership',
  //   people: [
  //     {
  //       name: 'Nasser Sanou',
  //       role: 'Co-Founder / CEO',
  //       image: { src: imageNasserSanou },
  //     },
  //     {
  //       name: 'Michael Foster',
  //       role: 'Co-Founder / CTO',
  //       image: { src: imageMichaelFoster },
  //     },
  //     {
  //       name: 'Dries Vincent',
  //       role: 'Design & Front-End ',
  //       image: { src: imageDriesVincent },
  //     },
  //   ],
  // },
  {
    title: 'Recent Clients',
    people: [
      {
        name: ' Beautiful & blonde',
        role: 'Wig Coloring & Frontal Installation ✨',
        image: { src: client1 },
      },
      {
        name: 'Color Me Blond ',
        role: 'Coloring & Frontal Installation✨',
        image: { src: imageAngelaFisher },
      },

      {
        name: 'Once Blonde-Always blonde',
        role: 'VP, Human Resources ✨',
        image: { src: client5  },
      },
      {
        name: 'Better in blond',
        role: 'Double process color✨',
        image: { src: client2 },
      },
      {
        name: 'Client Calm',
        role: 'Silk press & updo + Silk press & Ponytail ✨',
        image: { src: client3 },
      },
      {
        name: 'Better in blond',
        role:  'Double process color✨',
        image: { src: client4 },
      },
     
    ],
  },
]
const bestSellers = [
  {
    title: 'Best Sellers',
    people: [
      {
        name: '5x5 HD LACE CLOSURE',
        role: '$220',
        image: { src: Bessseller1 },
        href: '#/services/5x5-hd-lace-closure'
      },
      {
        name: 'No Slip | Wig Grip',
        role: '$12',
        image: { src: Bessseller2 },
        href: '#/services/5x5-hd-lace-closure'
      },
      {
        name: '5x5 | ‘PRE-LIGHTENED’',
        role: '$520',
        image: { src: Bessseller3 },
        href: '#/services/5x5-hd-lace-closure'
      },
      {
        name: '5x5 | ‘PRE-LIGHTENED’',
        role: '$520',
        image: { src: Bessseller3 },
        href: '#/services/5x5-hd-lace-closure'
      },
    ],
  },
]
function Team() {
  return (
    // <Container className="mt-4 sm:mt-24 lg:mt-12">
      <div className="space-y-24">
        {team.map((group) => (
          <FadeInStagger key={group.title}>
              {/* <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  {group.title}
                </h2>
              </FadeIn> */}
            {/* <Border as={FadeIn} /> */}
            <div className="grid grid-cols-1 gap-6 pt-4 sm:pt-6 lg:grid-cols-3 xl:gap-8">
            
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  {group.people.map((person) => (
                    <li key={person.name}>
                      <FadeIn>
                        <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                          <Image
                            alt=""
                            {...person.image}
                            className="h-96 w-full object-cover  transition duration-500 motion-safe:group-hover:scale-105 aspec-[2/4]"
                          />
                          {/* grayscale */}
                          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                            <p className="font-display text-base/6 font-semibold tracking-wide text-white group-hover:text-[#f1cc8f]">
                              {person.name}
                            </p>
                            <p className="mt-2 text-sm text-white">
                              {person.role}
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    // </Container>
  )
}

function BestSellers() {


  return (
    // <Container className="mt-4 sm:mt-24 lg:mt-12">
      <div className="max-[700px]:mt-[-12%] lg:space-y-24 mx-auto max-w-7xl">
        {bestSellers.map((group) => (
          <FadeInStagger key={group.title}>
              <FadeIn>
                <h2 className="text-center mt-24 font-display text-2xl font-semibold text-neutral-950">
                  {group.title}
                </h2>
              </FadeIn>
            {/* <Border as={FadeIn} /> */}
            <div className="grid grid-cols-1 gap-6 pt-4 sm:pt-16 lg:grid-cols-3 xl:gap-8">
            
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-8"
                >
                  {group.people.map((person) => (
                    <a key={person.name}   href='#/services/5x5-hd-lace-closure'>
                      <FadeIn>
                        <div className="group relative overflow-hidden rounded-1xl bg-neutral-100 rind-black ring-0">
                          <Image
                            alt=""
                            {...person.image}
                            className="h-96 w-full object-cover  transition duration-500 motion-safe:group-hover:scale-105 aspec-[2/4]"
                          />
                          {/* grayscale */}
                          <div className="relative inset-0  bottom-0 flex flex-col justify-end p-6">
                      {/* bg-gradient-to-t from-black to-black/0 to-40%  */}
                            <p className="font-display text-base/6 font-semibold tracking-wide text-black">
                              {person.name}
                            </p>
                            <p className="mt-2 text-sm text-black">
                              {person.role}
                            </p>
                          </div>
                        </div>
                      </FadeIn> 
                     
                    </a>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    // </Container>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="We help you identify, explore and respond to new opportunities."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          As long as those opportunities involve giving us money to re-purpose
          old projects — we can come up with an endless number of those.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Web development">
              We specialise in crafting beautiful, high quality marketing pages.
              The rest of the website will be a shell that uses lorem ipsum
              everywhere.
            </ListItem>
            <ListItem title="Application development">
              We have a team of skilled developers who are experts in the latest
              app frameworks, like Angular 1 and Google Web Toolkit.
            </ListItem>
            <ListItem title="E-commerce">
              We are at the forefront of modern e-commerce development. Which
              mainly means adding your logo to the Shopify store template we’ve
              used for the past six years.
            </ListItem>
            <ListItem title="Custom content management">
              At MbeauteNoir we understand the importance of having a robust and
              customised CMS. That’s why we run all of our client projects out
              of a single, enormous Joomla instance.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata = {
  title: 'Yasmines Beauty Salon & Haircare NJ',
  description:"Yasmines Beauty Salon NJ",
  template: 'Yasmines Beauty Salon NJ',
  description:
    'Yasmines Beauty Salon and Haircare specialist located in New Jesrsey. 1 N Harrison St, East Orange, NJ #NJ #haircare #beautysalon #newjerseybeautysalon.',
}

export default async function Home() {
  let caseStudies = (await loadMDXMetadata('work')).slice(0, 4)

  return (
    <>
  <FadeInStagger key={'HOME-PAGE'}>
      {/* <Container className="mt-24 sm:mt-32 md:mt-56"> */}
        <FadeIn className="max-w-7x">
        <>
     
     <div className='page-container drawer-page-content massi' >
       <div className='main-content'>
         <div className="relative sm:-mt-38 lg:-mt-[0%] slideshow__slide  slick-slide slick-current slick-active index-section " data-slick-index="0" aria-hidden="false"
         style={{width:"100%", position: 'relative', left: '0px', top: '0px', 'z-index':'999', opacity: 1}} 
         >
           <a href="#COLLECTION" className="slideshow__link" tabindex="0">
           <img src={'/yasmin_intro_desktop.gif'} id="DESKTOP_IMG"  className='h-full ] w-full max-[700px]:hidden'/>
           <img src={'/yasmin_intro_mobile.gif'} id="MOBILE_IMG" className='aspect-[5/6] object-center object-cover min-h-[60vh h-full w-full min-[700px]:hidden'/>
           {/* <img src={massiLG.src} className='h-full w-full max-[700px]:hidden'/>
           <img src={massi.src} className='h-full w-full min-[700px]:hidden'/> */}
           </a> 
         <Intro />
         </div>
 
        <FadeInStagger key={'New Collection'}>
         <FadeIn>
           <div id="COLLECTION" className="relative shopify-section index-section  overflow-hidden">
               <div className="page-width pt-4 sm:pt-12" id="1a23616c-8a74-41e2-a062-803892398db5"> 
                 <div className="section-header home text-center wow fadeIn" style={{visibility: 'visible', animationName:'fadeIn'}}>
                   <h2>NEW COLLECTION</h2>      
                       <p> CUSTOM WIGS | PRE-SELECTED STYLES &amp; COLOR</p>        
                 </div>
                   <div id="products-1a23616c-8a74-41e2-a062-803892398db5" className="grid-products">
                   <Team />
                   </div>
                 </div>
               </div>  
             </FadeIn> 
         </FadeInStagger>
        </div>
      </div>
    
      <div id="quiz-kit-intro" className="py-24 relative sc-AxjAm knkQuy center-center " 
      data-aos="fade-up" 
      > 
      <FadeInStagger key={'Book Now 2'}>
         <FadeIn>
        <picture>
         <source media="(max-width: 767px)" srcset="https://d33x1o3gj9io8i.cloudfront.net/images/4190/OqULuoMQkaQGSqCQuu46" type="image/gif"/>
         <source media="(max-width: 1200px)" srcset="https://d33x1o3gj9io8i.cloudfront.net/images/4190/md_DnRYal1MQ7qrNOSkcVUP" type="image/gif"/>
         <img src="https://d33x1o3gj9io8i.cloudfront.net/images/4190/DnRYal1MQ7qrNOSkcVUP" alt="NEED A LITTLE HELP?"/>
         </picture>
         </FadeIn> 
         </FadeInStagger>
     
         <FadeInStagger key={'Book Now 2'}>
         <FadeIn>
      <div  className="h-[fit-content] sc-fzpdbB gZFNLC md:bottom-[-79%] mx-auto max-w-12xl  lg:px-8" id="SERVICES">
       <div id="quiz-kit-container"
             className="sc-AxirZ jddkUx center-center bg-yasmin-main  opacity-0.5">
          <h1 id="quiz-kit-intro-title" 
              className="sc-AxhCb bNQaQH aos-init aos-animate" 
              style={{fontWeight: '700', width: '100%', margin: '0px auto 20px', lineHeight: '1.2', fontSize: '40px', textTransform: "none" ,letterSpacing: "initial"}}>
              NEED A SERVICE?</h1>
            <p id="quiz-kit-intro-text" font-size="16" font-family="Questrial"  font-weight="400" letter-spacing="0" data-aos="fade-up" data-aos-delay="150"
              className="sc-AxhCb bosNnv aos-init aos-animate   -mt-4"  >
                  Review our catalogue, and explore an array of services. 
            </p >
                  <div className="gap-x-6  md:gap-x-24 sm:space-x-4 ">
                  <a href="#LOCATION"><button href="#/contact"
                      id="quiz-kit-intro-button" kind="fill" font-size="13" font-family="Rubik" letter-spacing="0" font-weight="600" data-aos="fade-up" data-aos-delay="300"
                      className="sc-fznxsB cYgHSw aos-init aos-animate mr-6"
                      style={{padding: '16px', borderRadius: "0px", width: "auto", minWidth: "160px", fontSize: '13px', fontWeight: '600', margin: '10px 0px 0px', color: 'black', backgroundColor: 'white', border: '1px solid rgb(0, 0, 0)', lineHeight: '1.3', height: 'auto', minHeight: 'auto', letterSpacing: "initial"}}>
                        Address</button></a>
                <a href="#CALL"><button href="#/services"
                      id="quiz-kit-intro-button" kind="fill" font-size="13" font-family="Rubik" letter-spacing="0" font-weight="600" data-aos="fade-up" data-aos-delay="300"
                      className="sc-fznxsB cYgHSw aos-init aos-animate bg-black  text-white hover:bg-pink-400 hover:text-white" 
                      style={{padding: '16px', borderRadius: "0px", width: "auto", minWidth: "160px", fontSize: '13px', fontWeight: '600', margin: '10px 0px 0px', border: '1px solid rgb(0, 0, 0)', lineHeight: '1.3', height: 'auto', minHeight: 'auto', letterSpacing: "initial"}}>
                        Booking</button></a>
              </div>
           </div>
        </div>
      
             </FadeIn> 
         </FadeInStagger>
 
            </div>
 
 
        
           <div className='text-center mt-32 bg-black border-t border-black min-[700px]:hidden' />
 
 
 
       <BestSellers />
 
  <GiftCardSection /> 
  <div id="CONTACT">
      <NewContactSection/>
  </div>

  {/* <ContactSection /> */}
 <div className="group bg-theme-2  lg:bg-black relative mt-12  lg:mt-24 slideshow__slide  slick-slide slick-current slick-active " data-slick-index="0" aria-hidden="false"
 style={{width:"100%", position: 'relative', left: '0px', top: '0px',  opacity: 1}} 
 >
   <div href="#/services" className="slideshow__link flex" tabindex="0">
       <img src={'yasmin_img_desktop.png'} className='h-full w-full max-[700px]:hidden'/>
       <img src={'/yasmin_img_mobile.png'} className='h-full w-full min-[700px]:hidden'/>
    <FadeInStagger key={'INTRO'}>
     <FadeIn>
       
     <div className="absolute inset-x-0 lg:inset-x-20 top-[54%] md:top-[50%] lg:top-40%] mx-6 rounded-md py-4  md:py-12 md:px-12 scontent-center !bg-[#ff149321] transition duration-150 transform home text-center wow fadeIn text-white max-w-7xl justify-centr mx-auto rs-parallax-wrap  min-[600px]:mt-[10%]"  style={{visibility:"visible", animationName:"fadeIn"}}>
     <div className="rs-parallax-wrap mb-4 inset-x-0 xl:!pb-24"  style={{position: 'absolute' , display: 'block' ,'pointer-events': 'auto', 'z-index': 9, visibility: 'visible', perspective: '601px'}}>
      <h2 className={clsx('animation !font-bold  inline-flex text-[wheat] !text-[2.3em]  lg:text-[wheat] md:!text-[5em]  lg:!text-[4em] xl:!text-[6em]  signature-font  animated-logo pb-12')}
      >
      YASMINS MBEAUTY</h2>
      </div> 
      <div className='justify-center lg:text-3xl lg:text-[wheat] max-[700px]:pt-[10%] pt-[12%] xl:pt-[11%]'>
     <p className={clsx('justify-center text-[1.4em] sm:text-[1.8em] transition duration-250 transform text-sm text-white !text-[#f8e8cd] ')}> Our specialists at your service.</p>
      </div> 
      {/* <div className='justify-center max-[700px]:hidden lg:text-3xl lg:text-[wheat] md:max-w-2xl md:px-[20%]  pt-14  lg:pt-24  xl:!mt-24 lg:max-w-4xl lg:px-[10%] xl:max-w-7xl xl:px-[0%] xl:text-center'>
     <p className='transition duration-150 ease-in-out justify-center max-[700px]:hidden lg:text-3xl lg:text-[wheat]'> NYC haircare specialist located in Harlem. Our goal is to promote clean beauty. <span className='max-[700px]:hidden'>Where mindfulness and wellness meet consciousness. Glow inside and out with us! </span> </p>
      </div>  */}
      <div >
      <div className="justify-center flex align-center pt-2 lg:pt-10 ease-in duration-300">
         <a className={clsx(" hover:!text-[#f8e8cd] rounded-xl  !border-[wheat] ClassicButton_button__ETGhE transition group-hover:!text-[wheat]  duration-150 transform btn text-white justify-center bg-black !border-[wheat]] group-hover:!bg-black flex align-center border-2  max-w-2xl m-4 transition ease-in-out delay-250 group-hover:-translate-y-1 group-hover:scale-110 duration-360")}
          href="#/services"
          >Book Now </a>
      </div>
      </div> 
   
     
     </div>
     </FadeIn>
     </FadeInStagger>
   </div>
  
   <div class="px-6 pt-0 md:pt-0  sm:mx-0 sm:pt-5 md:px-12 border-b border-orange-300 bg-[#272423] ">
   <a href="#/gift-card"  class="mx-auto max-w-7xl p-0 md:px-4 lg:px-8  grid w-full grid-cols-2">
            <ul className="max-w-4xl lg:max-w-none flex text-sm font-medium text-center text-gray-500 dark:text-gray-400">
               <li>
                 <span className="inline-block w-full py-2 px-3">
                   <h3 class="-mb-1 product-details__product-title text-xl  font-semibold !text-white" itemprop="name" style={{"text-transform": 'none !important' }}>Learn More</h3>
                 </span>
               </li>
             </ul>
               <div class="flex justify-end">
                 <button data-tooltip-target="card-nav-tabs-example-copy-clipboard-tooltip" data-tooltip-placement="bottom" type="button"  className="flex items-center px-3 py-2 text-xs font-medium text-gray-600 hover:text-blue-700">
                   <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" viewBox="0 0 44 44" width="24" aria-hidden="true" style={{color: 'white'}} class="Navbar_chevronDown__BsZjb rotate-[-85deg]"><path d="M11 9l11 11 11-11"></path></svg>
                 </button>
               </div>
             </a>  
         </div>
     </div >
       <div className="max-[700px]:hidden">
       <PageLinks
         className="!text-left z-[999]"
         title="Contact"
         intro="Please fell free to reach out to us if you have any question."
         pages={blogArticles}
         padding={true}
       
       />
     </div>
     </>
        </FadeIn>
      {/* </Container> */}

      {/* <Clients /> */}

      {/* <CaseStudies caseStudies={caseStudies} /> */}
=
    <Testimonial
        className="..lg:mt-40"
        client={{ name: 'Phobia', logo: '/cropped-YasminBeautyShop.png'}}
      >
        Testimonials Coming Soon
      </Testimonial> 

      {/* <Services /> */}

      {/* <ContactSection /> */}
      </FadeInStagger>
    </>
  )
}


