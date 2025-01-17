import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'


import { PhoneIcon, MapIcon, LockOpenIcon, CalendarIcon, ExclamationCircleIcon } from '@heroicons/react/24/solid';

const termsDetails = [  
    { id: "POLICY1", icon: <ExclamationCircleIcon />, title: "Policy", content: "NO HAIR PROVIDED FOR BOHO | CASH ONLY" },
//   { id: "CALL", icon: <PhoneIcon />, title: "Phone", content: "862-252-6325 | 973-395-3900" },
//   { id: "LOCATION", icon: <MapIcon />, title: "Address", content: "11 N Harrison St, East Orange, NJ" },
//   { id: "HOURS", icon: <LockOpenIcon />, title: "Hours", content: "Open Daily: 4:00 a.m. - 5:00 p.m." },
  { id: "APPOINTMENTS", icon: <CalendarIcon />, title: "Appointments", content: "No appointment, WALK-INS ONLY" },

  { id: "POLICY2", icon: <ExclamationCircleIcon />, title: "Policy", content: "NO REFUNDS after scheduling & payments*" },
  { id: "LIABILITY", icon: <ExclamationCircleIcon />, title: "Liability", content: "Yasmin Beauty Salon is not liable for any reactions to products or services performed. Clients are advised to notify the staff of any allergies or sensitivities." },
  { id: "PRIVACY", icon: <ExclamationCircleIcon />, title: "Privacy Policy", content: "All personal information collected is confidential and will not be shared with third parties without client consent." },
  { id: "CANCELLATION", icon: <CalendarIcon />, title: "Cancellation Policy", content: "Cancellations must be made 24 hours in advance. Failure to do so will result in a 50% charge of the service booked." },
  { id: "CHILDREN", icon: <ExclamationCircleIcon />, title: "Children Policy", content: "Children are not permitted unless they are receiving a service. We want to ensure a calm environment for all clients." },
];


const Map = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 my-8">
        <FadeInStagger key={'TERMS'}>
        <FadeIn>
        <TermsAndConditions/>

         </FadeIn>
              

      </FadeInStagger>
    </div>
  );
};

export default Map;


const TermsAndConditions = () => {
  return (

    <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">Terms and Conditions</h1>
          <p className="text-gray-700 mb-8">
              Welcome to  <span className='text-pink-400 font-semibold'>Yasmin Beauty Salon</span>! By accessing or using our services, you agree to be bound by the following terms
              and conditions. Please read them carefully.
          </p>
          <FadeInStagger key={'CONTACT'}>
            <FadeIn>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {termsDetails.map((item) => (
                      <div key={item.id} className="p-6 border rounded-lg hover:shadow-lg">
                          <div className="flex items-center mb-4">
                              <span className="text-main bg-[#093834de] hover:text-[#f5deb3] w-10 h-10 p-[0.3px] flex items-center justify-center rounded-full mr-4">
                                  {item.icon}
                              </span>
                              <h3 className="text-lg font-semibold">{item.title}</h3>
                          </div>
                          <p className="text-gray-600">{item.content}</p>
                      </div>
                  ))}
              </div>
          </FadeIn>
      </FadeInStagger>
      

      <div className="my-12 pt-6 " id="ADDITIONAL_TERMS">
      <FadeInStagger key={'ADDITIONAL_TERMS'}>
         <FadeIn>
         <h2 className="text-2xl font-semibold mb-4">Additional Terms</h2>
              <p className="text-gray-700 mb-4">
                  These terms and conditions govern all transactions between <span className='text-pink-400 font-semibold'>Yasmin Beauty Salon</span> and its clients. By using our
                  services, you agree to comply with the following:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Clients are responsible for ensuring they arrive on time for their scheduled services.</li>
                  <li>Late arrivals of 15 minutes or more may result in rescheduling or a reduced service time.</li>
                  <li>All services must be paid for in full at the time of service. We accept cash only.</li>
                  <li>Gift cards are non-refundable and cannot be exchanged for cash or other services.</li>
                  <li>The salon reserves the right to refuse service to anyone who violates these terms or behaves inappropriately.</li>
              </ul>
              <p className="text-gray-700 mt-4">
                  Thank you for choosing Yasmin Beauty Salon. We look forward to serving you!
              </p>
              </FadeIn>
      </FadeInStagger>
       </div>
        
       </div>
  );
};