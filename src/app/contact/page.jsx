import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { Location, Offices } from '@/components/Offices'
import { PhoneIcon, MapIcon, LockOpenIcon, CalendarIcon, ExclamationCircleIcon  } from '@heroicons/react/24/solid'

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
    <div className="max-w-4xl mx-auto p-6 mt-4 mb-8 sm:my-8 !mb-24 ">
        <FadeInStagger key={'CONTACT'}>
        <FadeIn>
           <div id="COLLECTION" className="relative shopify-section index-section  overflow-hidden">
               <div className="page-width pt-4 sm:pt-12" id="1a23616c-8a74-41e2-a062-803892398db5"> 
                 <div className="section-header home text-center wow fadeIn" style={{visibility: 'visible', animationName:'fadeIn'}}>
                   <h2>Contact Yasmin</h2>      
                     <p className='text-[#073e38]'> <p className="text-center mb-8">
                      Reach out to Yasmin Beauty Shop for all your beauty needs. Our friendly team is here to assist you.
                      Whether you have a specific inquiry or would like to schedule an appointment, we&apos;re happy to help.
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
                <FadeIn key={item.id} className="group shadow-lg hover:shadow-xl hover:rounded-3xl">
                  <ContactCard icon={item.icon} title={item.title} content={item.content} href={item.href}/>
                </FadeIn>
              ))}
            </div>

      </FadeInStagger>
    </div>
  );
};

export default NewContactSection;



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
              <div class="bg-muted flex w-full items-center justify-between gap-2 p-2 relative bg-main group-hover:bg-main group-hover:rounded-t-3xl group-hover:border-b">
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
                          
                          {icon && <div className='ml-1 mt-1 w-[32px] w-[32px] rounded-full border border-black bg-[#b89499]  text-[#faedd7]  p-[6px] '>{icon}</div>}

                        </span>
                          <div class="my-0 flex w-full min-w-0 max-w-full items-center gap-2 text-sm ">
                            {  title &&  
                            <p className="text-xl text-black/70 text-base/6 font-semibold tracking-wide text-black text-[#011211] group-hover:!text-[#000000db]  ml-1  min-w-0 shrink truncate">
                              {title}
                              </p>}
  
                          </div>
    
                          </div>

                      <div class="font-display  w-full border-t border-gray-200 group:hover-border-pink-200" />
 
                    <div class="my-0 flex w-full max-w-full flex-col p-2 text-left text-gray-500 group-hover:!bg-[#f7f2f3] bg-[#f7f2f34f]  group-hover:bg-[#f7f2f3] group-hover:rounded-b-3xl g">
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