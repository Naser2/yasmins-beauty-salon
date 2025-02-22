import { FadeIn, FadeInStagger } from '@/components/FadeIn';
import { PhoneIcon, MapIcon } from '@heroicons/react/24/solid';

const Map = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 !mb-24 sm:my-2 lg:!mt-0">
      <FadeInStagger key={'CONTACT'}>
        <FadeIn>
          <div id="COLLECTION" className="relative shopify-section index-section overflow-hidden">
            <div className="page-width pt-4 sm:pt-2" id="1a23616c-8a74-41e2-a062-803892398db5">
              <div
                className="section-header home text-center wow fadeIn"
                style={{ visibility: 'visible', animationName: 'fadeIn' }}
              >
                <h2 className="text-2xl font-bold text-gray-900">LOCATION</h2>
                <p className="text-[#073e38] text-center mb-8">
                  Call us if you still have trouble getting here.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Map Section */}
        <div className="grid grid-cols-1 xl::grid-cols-2 gap-6">
        <FadeIn key={'MAP'} className="group">
  <div
    id="MAP"
    className="justify-center   rounded-4xl"
  >
    <div className="lg:rounded-4xl ">
      <div className="-mt-8  lg:p-[0.3rem] rounded-2xl overflow hover:border hover:border-gray-100 lg:border-gray-200">
        <img
          src={'/yasmins_location_img.png'}
          alt="Map showing Yasmin's Beauty Salon"
          className="h-full w-full rounded-2xl lg:!min-w-[600px] xl:lg:!min-w-[800px]"
        />
      </div>
    </div>
  </div>
</FadeIn>

        </div>




        {/* Contact Information Section */}
        <div className="mt-12 text-center">
  {/* Phone Numbers */}
  <div className="flex items-center justify-center gap-4 mb-4  hidden lg:flex">
    <PhoneIcon className="h-10 w-10 p-2 tml-1 -mt-1  mr-4 md:w-[32px] md:w-[32px] rounded-full bg-main border border-black group-hover:bg-[#b89499] group-hover:text-[#faedd7] p-[6px]" />
    <a
      href="tel:8622526325"
      className="text-lg font-semibold text-gray-700 hover:text-pink-500 transition-colors"
    >
      862-252-6325
    </a>
    <span className="text-gray-500">|</span>
    <a
      href="tel:9733953900"
      className="text-lg font-semibold text-gray-700 hover:text-pink-500 transition-colors"
    >
      973-395-3900
    </a>
  </div>

  {/* Address */}
  <div className="flex-col">
  <div className="flex flex-col gap-4 mb-4">
  {/* First Phone Entry */}
  <div className="flex items-center gap-4 ml-3 ">
    <PhoneIcon className="h-10 w-10 p-2 tml-1 -mt-1  mr-4 md:w-[32px] md:w-[32px] rounded-full bg-main border border-black group-hover:bg-[#b89499] group-hover:text-[#faedd7] p-[6px]" />
    <a
      href="tel:8622526325"
      className="text-lg font-semibold text-gray-700 hover:text-pink-500 transition-colors"
    >
      862-252-6325
    </a>
  </div>

  {/* Second Phone Entry */}
  <div className="flex items-center gap-4 ml-3">
    <PhoneIcon className="h-10 w-10 p-2 tml-1 -mt-1  mr-4 md:w-[32px] md:w-[32px] rounded-full bg-main border border-black group-hover:bg-[#b89499] group-hover:text-[#faedd7] p-[6px]" />
    <a
      href="tel:9733953900"
      className="text-lg font-semibold text-gray-700 hover:text-pink-500 transition-colors"
    >
      973-395-3900
    </a>
  </div>

</div>
<div className="flex items-center  gap-4 ml-3">
    
    <MapIcon className="h-10 w-10 p-2 tml-1 -mt-1  mr-4 md:w-[32px] md:w-[32px] rounded-full bg-main border border-black group-hover:bg-[#b89499] group-hover:text-[#faedd7] p-[6px]" />
    <a
      href="https://maps.app.goo.gl/1ccoZ1b9kdXKK9Eg8"
      target="_blank"
      rel="noopener noreferrer"
      className="text-lg font-semibold text-gray-700 hover:text-pink-500 transition-colors"
    >
      11 N Harrison St, East Orange, NJ
    </a>
  </div>
  </div>

</div>
      </FadeInStagger>
    </div>
  );
};

export default Map;
