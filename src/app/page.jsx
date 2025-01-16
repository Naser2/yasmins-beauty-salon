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

export const footerNavigation = {
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
      href: 'https://www.facebook.com/share/r/15AM6Mtnfq/?mibextid=wwXIfr',
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
      href: 'https://www.instagram.com/yasminsbeautysalon',
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
    // {
    //   name: 'X',
    //   href: '#',
    //   icon: (props) => (
    //     <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    //       <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
    //     </svg>
    //   ),
    // },
    // {
    //   name: 'GitHub',
    //   href: '#',
    //   icon: (props) => (
    //     <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    //       <path
    //         fillRule="evenodd"
    //         d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    //         clipRule="evenodd"
    //       />
    //     </svg>
    //   ),
    // },
    {
      name: 'TikTok',
      href: 'https://www.tiktok.com/@yasmine.benz3?_t=8s22SzlrRfi&_r=1',
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
        name: 'Beautiful & blonde',
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
        name: '5x5 | PRE-LIGHTENED',
        role: '$520',
        image: { src: Bessseller3 },
        href: '#/services/5x5-hd-lace-closure'
      },
      {
        name: '5x5 | RE-LIGHTENED',
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
                            <p className="font-display text-base/6 font-semibold tracking-wide text-black text-[#011211]">
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
              mainly means adding your logo to the Shopify store template we&apos;ve
              used for the past six years.
            </ListItem>
            <ListItem title="Custom content management">
              At MbeauteNoir we understand the importance of having a robust and
              customised CMS. That&apos;s why we run all of our client projects out
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
     <FadeIn className="max-w-7x">
       <div>
        <div className='page-container drawer-page-content massi' >
          <div className='main-content'>
            <div className="relative sm:-mt-38 lg:-mt-[0%] slideshow__slide  slick-slide slick-current slick-active index-section lg:!min-h-[643px] " data-slick-index="0" aria-hidden="false"
            style={{width:"100%", position: 'relative', left: '0px', top: '0px', 'z-index':'999', opacity: 1}} >
              <div href="#HOME" className="slideshow__link lg:!min-h-[643px] " tabindex="0" >
              <img src={'/yasmin_intro_desktop.gif'} id="DESKTOP_IMG"  className='h-full ] w-full max-[700px]:hidden h-full !aspect-[410/281] lg:!aspect-[410/238] xl:!aspect-[410/218] '/>
              <img src={'/yasmin_intro_mobile.gif'} id="MOBILE_IMG" className='h-full aspect-[5/8] object-center object-cover min-h-[60vh lg:!min-h-[643px]  sm:!h-full  w-full min-[700px]:hidden'/>
            
           </div> 
            <Intro />
          </div>
         <FadeInStagger key={'New Collection'}>
            <FadeIn>
              <div id="COLLECTION" className="relative shopify-section index-section  overflow-hidden">
                  <div className="page-width pt-4 sm:pt-12" id="1a23616c-8a74-41e2-a062-803892398db5"> 
                    <div className="section-header home text-center wow fadeIn" style={{visibility: 'visible', animationName:'fadeIn'}}>
                      <h2>NEW COLLECTION</h2>      
                          <p className='text-[#011211]'> CUSTOM WIGS | PRE-SELECTED STYLES &amp; COLOR</p>        
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
     
     
      <div id="quiz-kit-intro" className="py-24 relative sc-AxjAm knkQuy center-center "  data-aos="fade-up">
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
            <div  className="h-[fit-content] sc-fzpdbB gZFNLC md:bottom-[-79%] mx-auto max-w-12xl  lg:px-8 " id="SERVICES">
              <div id="quiz-kit-container"  className="sc-AxirZ jddkUx center-center bg-yasmin-main  opacity-0.5  sm:border boder-[#021c1a] rounded-sm ">
                  <h1 id="quiz-kit-intro-title" 
                      className="sc-AxhCb bNQaQH aos-init aos-animate" 
                      style={{fontWeight: '700', width: '100%', margin: '0px auto 20px', lineHeight: '1.2', fontSize: '40px', textTransform: "none" ,letterSpacing: "initial"}}>
                      NEED A SERVICE?
                  </h1>
                  <p id="quiz-kit-intro-text" font-size="16" font-family="Questrial"  font-weight="400" letter-spacing="0" data-aos="fade-up" data-aos-delay="150"
                    className="sc-AxhCb bosNnv aos-init aos-animate  text-[#011211] -mt-4"  >
                        Review our catalogue, and explore an array of services. 
                  </p >
                  <div className="gap-x-6  md:gap-x-24 sm:space-x-4 ">
                  <a href="#LOCATION"><button href="#/contact"
                      id="quiz-kit-intro-button" kind="fill" font-size="13" font-family="Rubik" letter-spacing="0" font-weight="600" data-aos="fade-up" data-aos-delay="300"
                      className="sc-fznxsB cYgHSw aos-init aos-animate mr-6"
                      style={{padding: '16px', borderRadius: "0px", width: "auto", minWidth: "160px", fontSize: '13px', fontWeight: '600', margin: '10px 0px 0px', color: 'black', backgroundColor: 'white', border: '1px solid rgb(0, 0, 0)', lineHeight: '1.3', height: 'auto', minHeight: 'auto', letterSpacing: "initial"}}>
                        Address</button></a>
                    <a href="#CALL">
                      <button href="#/services"
                      id="quiz-kit-intro-button" kind="fill" font-size="13" font-family="Rubik" letter-spacing="0" font-weight="600" data-aos="fade-up" data-aos-delay="300"
                      className="sc-fznxsB cYgHSw aos-init aos-animate bg-[#03302c] text-white hover:bg-pink-400 hover:text-white" 
                      style={{padding: '16px', borderRadius: "0px", width: "auto", minWidth: "160px", fontSize: '13px', fontWeight: '600', margin: '10px 0px 0px', border: '1px solid rgb(0, 0, 0)', lineHeight: '1.3', height: 'auto', minHeight: 'auto', letterSpacing: "initial"}}>
                        Booking
                    </button>
                  </a>
              </div>
            </div>
            </div>
          </FadeIn> 
      </FadeInStagger>
     </div>
 
 
        
      <div className='text-center mt-32 bg-black border-t border-black min-[700px]:hidden' />
        <BestSellers />
          <div className="max-w-4xl mx-auto p-6 my-8">
            <h2 className='py-6'>Testimonials  </h2>
            <Testimonial className="..lg:mt-40"
                client={{ name: 'Phobia', logo: '/cropped-YasminBeautyShop.png'}}>
                Testimonials Coming Soon
              </Testimonial> 
        <div className="px-6 py-4 sm:mx-0 sm:py-8 md:px-12 border-b border-orange-300 bg-[#6420ff] bg-apricot border border-3xl rounded-xl shadow-lg ">
          <div className="flex justify-between items-center">
            {/* Left-aligned text */}
            <h1 className="product-details__product-title ec-header-h3 font-display text-2xl font-semibold !text-white ">
              Get A Gift Card
            </h1>

            {/* Right-aligned link */}
            <span className="flex text-sm mr-4 border bg-[#c3a5baad]  border-[#7c5f74]  shadow-sm   rounded-3xl">
              <Link
                href="/gift"
                data-tooltip-target="card-nav-tabs-example-copy-clipboard-tooltip"
                data-tooltip-placement="bottom"
                type="button"
                className="flex items-center px-3 py-2 text-xs font-medium text-gray-600 hover:text-blue-700"
              >
                <svg
                  fill="none"
                  height="24"
                  shapeRendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  viewBox="0 0 44 44"
                  width="24"
                  aria-hidden="true"
                  style={{ color: 'white' }}
                  className="Navbar_chevronDown__BsZjb rotate-[-85deg]"
                >
                  <path d="M11 9l11 11 11-11"></path>
                </svg>
              </Link>
            </span>
          </div>
          </div>
        </div>

        <div id="CONTACT">
          <NewContactSection/>
        </div>
        <div className="w-full bardrop-blur ">
        <div className="mx-auto max-w-7xl overflow-hidden px-6 sm:pb-6 lg:px-8">
          <div className="mt-[em] flex justify-center  gap-x-3 lg:gap-x-7">
            {footerNavigation.social.map((item) => (
              <a key={item.link} href={item.href} className="text-[wheat] hover:text-pink-600  bg-black/60 p-1  p-[0.5rem] rounded-full">
                <span className="sr-only">{item.name}</span>
                <item.icon aria-hidden="true" className="h-6 w-6" />
              </a>
            ))}
          </div>
         
        </div>
      </div>
       <div className="max-w-4xl mx-auto p-6 my-8">
          <h2 class="group-hover:!text-white group-hover:text-pink-500 font-semibold mb-2 -mt-6  sm:text-center">
            Location</h2>
          <div id="MAP" class="sm:mx-auto max-w-2xl rounded-4xl">
            <div class="lg:rounded-4xl overflow-hidden">
              <div class="lg:p-[0.3rem] rounded-2xl  overflow hover:border hover:border-gray-100 lg:border-gray-200 ">
              <img src={'/yasmins_location_img.png'} 
              className='h-full w-full rounded-2xl'/>
            </div>
            </div>
          </div>
        </div>


        {/* <ContactSection /> */}
      <div className="group bg-theme-2  lg:bg-black relative lg:mt-12  lg:mt-24 slideshow__slide  slick-slide slick-current slick-active border-t  border-[#03302c] " data-slick-index="0" aria-hidden="false" style={{width:"100%", position: 'relative', left: '0px', top: '0px',  opacity: 1}} >
        <div href="#/services" className="slideshow__link flex " tabindex="0">
            <img src={'yasmin_img_desktop.png'} className='h-full w-full max-[700px]:hidden'/>
            <img src={'/yasmin_img_mobile.png'} className='h-full w-full min-[700px]:hidden'/>
          <FadeInStagger key={'INTRO'}>
            <FadeIn>
              <div className="absolute inset-x-0 lg:inset-x-20 top-[54%] md:top-[45%] lg:top-40%] mx-6 rounded-md py-4  md:py-12 md:px-12 scontent-center !bg-[#ff149305] transition duration-150 transform home text-center wow fadeIn text-white max-w-7xl justify-centr mx-auto rs-parallax-wrap  min-[600px]:mt-[10%]"  style={{visibility:"visible", animationName:"fadeIn"}}>
              <div className="rs-parallax-wrap mb-4 inset-x-0 xl:!pb-24"  style={{position: 'absolute' , display: 'block' ,'pointer-events': 'auto', 'z-index': 9, visibility: 'visible', perspective: '601px'}}>
                <h2 className={clsx('animation !font-bold  inline-flex text-[wheat] !text-[2.3em]  lg:text-[wheat] md:!text-[5em]  lg:!text-[4em] xl:!text-[6em]  signature-font  animated-logo pb-5')}>
                YASMINS BEAUTY</h2>
                </div> 
                <div className='justify-center lg:text-3xl lg:text-[wheat] max-[700px]:pt-[10%] pt-[12%] xl:pt-[11%]'>
              <p className={clsx('justify-center text-xl sm:text-[1.8em] transition duration-250 transform text-sm text-white !text-[#f8e8cd] ')}> Our specialists at your service.</p>
                </div> 
                <div >
                <div className="justify-center flex align-center pt-2 lg:pt-10 ease-in duration-300">
                  <Link className={clsx(" hover:!text-[#f8e8cd] rounded-xl  !border-[wheat] ClassicButton_button__ETGhE transition group-hover:!text-[wheat]  duration-150 transform btn text-white justify-center bg-[#03302c] !border-[wheat]] group-hover:!bg-black flex align-center border-2  max-w-2xl m-4 transition ease-in-out delay-250 group-hover:-translate-y-1 group-hover:scale-110 duration-360")}
                    href="#CALL"
                    >Book Now </Link>
                </div>
                </div> 
              </div>
            </FadeIn>
          </FadeInStagger>
        </div>
        
        <div class="px-6 pt-0 md:pt-0  sm:mx-0 sm:pt-5 md:px-12 border-b hover:border-teal-800 bg-[#272423] ">
          <div href="#/gift-card"  class="mx-auto max-w-7xl p-0 md:px-4 lg:px-8  grid w-full grid-cols-2">
                  <ul className="max-w-4xl lg:max-w-none flex text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                    <li>
                      <span className="inline-block w-full py-2 px-3">
                        <Link href="/about" className="-mb-1 product-details__product-title text-xl  font-semibold !text-white" itemprop="name" style={{"text-transform": 'none !important' }}>Learn More</Link>
                      </span>
                    </li>
                  </ul>
                    <div class="flex justify-end">
                      <Link   href="/about" data-tooltip-target="card-nav-tabs-example-copy-clipboard-tooltip" data-tooltip-placement="bottom" type="button"  className="flex items-center px-3 py-2 text-xs font-medium text-gray-600 hover:text-blue-700">
                        <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" viewBox="0 0 44 44" width="24" aria-hidden="true" style={{color: 'white'}} class="Navbar_chevronDown__BsZjb rotate-[-85deg]"><path d="M11 9l11 11 11-11"></path></svg>
                      </Link>
                    </div>
                  </div>  
              </div>
          </div>

        {/* <Services /> */}
          <div className="max-[700px]:hidden">
             {/* <PageLinks
                className="!text-left z-[999]"
                title="Contact"
                intro="Please fell free to reach out to us if you have any question."
                pages={blogArticles}
                padding={true}
              
              /> */}
            </div>
        </div>
        </FadeIn>
      {/* </Container> */}

      {/* <Clients /> */}

      {/* <CaseStudies caseStudies={caseStudies} /> */}

  

      {/* <Services /> */}

      {/* <ContactSection /> */}
      </FadeInStagger>
    </>
  )
}


