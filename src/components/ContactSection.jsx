import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { Location, Offices } from '@/components/Offices'
import { PhoneIcon, MapIcon, LockOpenIcon, CalendarIcon, ExclamationCircleIcon  } from '@heroicons/react/24/solid'
import Link from 'next/link'

const contactDetails = [
  { id:"CALL",
    icon: <PhoneIcon />, // Phone icon
    title: "Phone",
    content: "862-252-6325 | 973-395-3900",
    href: "862-252-6325"
  },
  { id:"LOCATION",
    icon: <MapIcon />, // Map pin icon
    title: "Address",
    content: "11 N Harrison St, East Orange, NJ",
    href: "https://maps.app.goo.gl/1ccoZ1b9kdXKK9Eg8",
  },
  { id:"HOURS",
    icon: <LockOpenIcon />, // Clock icon
    title: "Hours",
    content: "Open Daily: 4:00 a.m. - 5:00 p.m.",
  },
  { id:"APOINTMENTS",
    icon: <CalendarIcon />, // Calendar icon
    title: "Appointments",
    content: "No appointment, WALK-INS ONLY",
    href: "terms"
  },
  {  id:"POLICY",
    icon: <ExclamationCircleIcon />, // Exclamation icon
    title: "Policy",
    content: "NO HAIR PROVIDED FOR BOHO | CASH ONLY",
    href: "terms"
  },
  { id:"POLICY-2",
    href:"/terms#ADDITIONAL_TERMS",
    icon: <ExclamationCircleIcon />, // Exclamation icon
    title: "Policy",
    content: "NO REFUNDDS after scheduling & payments*",
  },
];

const NewContactSection = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 my-8">
        <FadeInStagger key={'CONTACT'}>
        <FadeIn>
           <div id="COLLECTION" className="relative shopify-section index-section  overflow-hidden">
               <div className="page-width pt-4 sm:pt-12" id="1a23616c-8a74-41e2-a062-803892398db5"> 
                 <div className="section-header home text-center wow fadeIn" style={{visibility: 'visible', animationName:'fadeIn'}}>
                 <Link  href="/contact">
                   <h2>Contacts</h2>      </Link> 
                       <p className='text-[#073e38]'> <p className="text-center mb-8">
        Reach out to Yasmin Beauty Shop for all your beauty needs.
      </p></p>       
                 </div>
                   <div id="products-1a23616c-8a74-41e2-a062-803892398db5" className="grid-products">
                   {/* <Team /> */}
                   </div>
                 </div>
               </div>  
           </FadeIn>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactDetails.map((item) => (
                <FadeIn key={item.id} className="group hover:shadow-lg hover:rounded-3xl">
                  <ContactCard icon={item.icon} title={item.title} content={item.content} href={item.href}/>
                </FadeIn>
              ))}
            </div>

      </FadeInStagger>
    </div>
  );
};

export default NewContactSection;

function ContactSection() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40" id="CONTACT"> 
      <FadeIn className="-mx-6 lg:rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="max-w-xl">
            <h2 className="!text-left font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">
             CONTACT
            </h2>
            <div className="mt-6 flex gap-x-4">
              <Button href="/contact" invert className="!bg-black text-white">
             PHONE
              </Button>
              <Button href="/contact" invert className="!bg-black text-white">
             PHONE
              </Button>
              <Button href="/contact" invert className="!bg-black text-white">
             Address
              </Button>
            </div>

            <div className="mt-10 border-t border-white/10 lg:pt-10  rounded-2xl ">
              <h3 className="font-display text-base font-semibold text-white px-4 py-4 ">
                Address 
            
              </h3>
              <p className="text-sm text-white px-4 py-4">
                11 N Harrison St, East Orange, NJ 07017 (located in Aldo Food Market)
              </p>
              <Location
                invert
                className="mt-0 grid grid-cols-1 gap-8 sm:grid-cols-2 px-4 py-4"
              />
            </div>
            <h3 class="font-display text-base font-semibold text-white px-4 py-4 ">Call
             <Button href="/contact" invert className="!bg-black text-white">
              646-882-3778
              </Button></h3>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}


export function GiftCardSection() {
  return (
    <div className="mx-auto mt-14 sm:mt-32 lg:mt-20 mx-auto max-w-7xl px-6 lg:px-8">
      <h2 class="text-center mb-12 font-display text-2xl font-semibold text-neutral-950">Suprise a friend with a gift card.</h2>
      <FadeIn className="-mx-6">
        <div className="mx-auto max-w-4xl">
          <div className="lg:rounded-4xl overflow-hidden">
            {/* <h2 className="!text-left font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">
        Gist Card
            </h2> */}
            <div className='px-6 py-4 sm:mx-0 sm:py-8 md:px-12 border-b border-orange-300 bg-[#6420ff] bg-apricot'>
                <h1 class="product-details__product-title ec-header-h3   font-display text-2xl font-semibold !text-white" itemprop="name">Gift Card 
               <br/>
               <div className='inline-flex'>
                <span className='text-sm mr-4'>4 payments With</span>
              </div>
                
       
        </h1>
    </div>
            {/* <div className="mt-6 flex gap-x-4">
              <Button href="/contact" invert className="!bg-black text-white">
                Say Hi
              </Button>
              <Button href="/contact" invert className="!bg-black text-white">
               Contact
              </Button>
              <Button href="/contact" invert className="!bg-black text-white">
               Get work done
              </Button>
            </div> */}
            <div className="bg-theme-2 px-4 py-4 sm:mx-0 sm:py-8 md:px-12">
              {/* <h3 className="font-display text-base font-semibold text-white px-4 py-4 ">
                Our offices
              </h3> */}
              <Offices
                invert
                className="mt-0 grid grid-cols-1 gap-y-8 sm:grid-cols-2 py-4"
              />

            </div>
            {/* <h3 class="font-display text-base font-semibold text-white px-4 py-4 ">Call
             <Button href="/contact" invert className="!bg-black text-white">
              646-882-3778
              </Button></h3> */}
          </div>
        </div>
      </FadeIn>
    </div>
  )
}


const ContactCard = ({icon, title, content, href}) => {
  const isPhone = title.toLowerCase() === "phone";
  const isAddress = title.toLowerCase() === "address";
  return( 
          <div className="group  bg-background 
                    flex w-full max-w-full cursor-pointer select-none 
                    flex-col items-start justify-between hover:!rounded-3xl 
                    border transition-all duration-200 ease-in-out md:w-[400px]
                    ring-alpha-400 border-black
                    hover:!border-pink-400 ring-2 ring-black/20 hover:ring-[main] hover:!border-black/70 ">
              <div class="bg-muted flex w-full items-center justify-between gap-2 p-2 relative group-hover:bg-main group-hover:rounded-t-3xl group-hover:border-b hover:shadow-lg">
                      {isPhone  && href  && (
                              <a
                              href={`tel:${href.trim().replace(/-/g, "")}`}
                              target={"_self" } // Open phone numbers in the same tab and addresses in a new tab
                              rel="_self" // Add security attributes for external links
                              className="absolute inset-0"
                            />
                          )
                        }
                          {isAddress  && href  && (
                              <a
                              href={href}
                              target={isAddress ? "_blank" : "_self"} // Open phone numbers in the same tab and addresses in a new tab
                              rel={isAddress ? "noopener noreferrer" : undefined} // Add security attributes for external links
                              className="absolute inset-0"
                            />
                          )
                        }
                          { href  && title === "Policy" &&(
                              <a
                              href={href}
                        // Open phone numbers in the same tab and addresses in a new tab
                              rel={ "noreferrer"} // Add security attributes for external links
                              className="absolute inset-0"
                            />
                          )
                        }

                      <span class="text-gray-500 ">
                          
                          {icon && <div className='ml-1 mt-1 w-[32px] w-[32px] rounded-full border border-black group-hover:bg-[#b89499]  group-hover:text-[#faedd7]  p-[6px] '>{icon}</div>}

                        </span>
                          <div class="my-0 flex w-full min-w-0 max-w-full items-center gap-2 text-sm ">
                            {  title &&  
                            <p className="text-xl text-black/70 text-base/6 font-semibold tracking-wide text-black text-[#011211] group-hover:!text-[#000000db]  ml-1  min-w-0 shrink truncate">
                              {title}
                              </p>}
  
                          </div>
    
                          </div>

                      <div class="font-display  w-full border-t border-gray-200 group:hover-border-pink-200" />
 
                    <div class="my-0 flex w-full max-w-full flex-col p-2 text-left text-gray-500 group-hover:!bg-[#f7f2f3] bg-[#f7f2f3] group-hover:rounded-b-3xl g">
                      <button class="flex h-4 min-w-0 cursor-pointer items-center gap-2 font-mono text-xs hover:underline"> <hr class="ml-1 h-full w-[1px] bg-gray-300"/><div class="flex size-4 shrink-0 items-center justify-center"><span class="relative flex size-[10px] items-center justify-center rounded-full bg-gray-300"><span class="bg-background absolute left-1/2 top-1/2 size-[8px] -translate-x-1/2 -translate-y-1/2 rounded-full"></span><span class="absolute left-1/2 top-1/2 z-10 size-[6px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-300"></span></span></div>
                            { content &&  <div class="ml-4 truncate text-left text-[1.3em] text-black  font-bold font-[GOTHIC]">{content}</div>}
                      </button>
                      <div class="flex h-4 w-4 items-center justify-center">
                        </div>
                          <button class="flex h-4 min-w-0 cursor-pointer items-center gap-2 font-mono text-xs hover:underline"><div class="flex size-4 shrink-0 items-center justify-center"><span class="relative flex size-[10px] items-center justify-center rounded-full bg-gray-300"><span class="bg-background absolute left-1/2 top-1/2 size-[8px] -translate-x-1/2 -translate-y-1/2 rounded-full"></span><span class="absolute left-1/2 top-1/2 z-10 size-[6px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-300">
                         </span></span></div><div class="truncate text-left"></div>
                        </button>
                      </div>
              </div>
              )
}