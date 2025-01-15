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
  },
  { id:"LOCATION",
    icon: <MapIcon />, // Map pin icon
    title: "Address",
    content: "11 N Harrison St, East Orange, NJ",
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
  },
  {  id:"POLICY",
    icon: <ExclamationCircleIcon />, // Exclamation icon
    title: "Policy",
    content: "NO HAIR PROVIDED FOR BOHO | CASH ONLY",
  },
  { id:"POLICYN",
    icon: <ExclamationCircleIcon />, // Exclamation icon
    title: "Policy",
    content: "NO REFUNDDS after scheduling & payments*",
  },
];

const NewContactSection = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 my-8">
      <h1 className="text-2xl font-bold text-center mb-6">Contact</h1>
      <p className="text-center mb-8">
        Reach out to Yasmin Beauty Shop for all your beauty needs. Our friendly team is here to assist you.
        Whether you have a specific inquiry or would like to schedule an appointment, we&apos;re happy to help.
      </p>
        <FadeInStagger key={'CONTACT'}>
        <FadeIn>
           <div id="COLLECTION" className="relative shopify-section index-section  overflow-hidden">
               <div className="page-width pt-4 sm:pt-12" id="1a23616c-8a74-41e2-a062-803892398db5"> 
                 <div className="section-header home text-center wow fadeIn" style={{visibility: 'visible', animationName:'fadeIn'}}>
                   <h2>NEW COLLECTION</h2>      
                       <p className='text-[#073e38]'> CUSTOM WIGS | PRE-SELECTED STYLES &amp; COLOR</p>        
                 </div>
                   <div id="products-1a23616c-8a74-41e2-a062-803892398db5" className="grid-products">
                   {/* <Team /> */}
                   </div>
                 </div>
               </div>  
           </FadeIn>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactDetails.map((item) => (
                <FadeIn key={item.id} className="group">
                  <div
                    id={item.id}
                    className="hover:bg-[#c3a5ba] group-hover:border group-hover:border-[#093834de] group-hover:!text-white flex items-start bg-gray-100/20 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="max-w-[20%] border rounded-full p-1 text-[#eed1e3] text-slate-600 group-hover:!text-white group-hover:text-pink-500 h-5 mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xlg text-[#073e38] group-hover:!text-white group-hover:text-pink-500 font-semibold mb-2 ">
                        {item.title}
                      </h3>
                      <p className="text-gray-700 whitespace-pre-line group-hover:!text-white">
                        {item.content}
                      </p>
                    </div>
                  </div>
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
