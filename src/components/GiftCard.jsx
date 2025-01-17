import clsx from 'clsx'

function Office({ name,className,  children, invert = false }) {
  return (
    <address
      className={clsx(
        'text-sm not-italic',
        className ? className : invert ? 'text-neutral-300' : 'text-neutral-600'
      )}
    >
      <strong className={className ? className : invert ? 'text-white' : 'text-neutral-950' }>
        {name}
      </strong>
      <br />
      {children}
    </address>
  ) 
}

export function GiftCard({ invert = false, ...props }) {
  return (
    <ul role="list" {...props} >
      <li className='justify-center  flex align-center px-4 py-4 lg:py-[20%]'>
        <Office name="PRODUCT DETAILS" invert={invert} className="text-slate-800">
        {/* PRODUCT DETAILS */}
          <br className='-mt-2' />
          This is a digital gift card. After the purchase, you will receive an email with the gift card and instructions on how to use it. The card can be used as payment for any products we have.
        </Office>
      </li>
      <li >
        <Office  invert={invert}>
        <div className="details-gallery__image-wrapper max-[600px]:mt-[-15%]">
          <div class="details-gallery__image-wrapper-inner" style={{width: '1500px'}}>
            <div class="details-gallery__image-bg" 
                style={{backgroundImage: "url(https://d2j6dbq0eux0bg.cloudfront.net/default-store/giftcards/gift_card_003_400px.jpg)", backgroundImage: "-webkit-image-set(url(https://d2j6dbq0eux0bg.cloudfront.net/default-store/giftcards/gift_card_003_400px.jpg) 1x, url(https://d2j6dbq0eux0bg.cloudfront.net/default-store/giftcards/gift_card_003_800px.jpg) 2x)",
                backgroundImage: "-moz-image-set(url(https://d2j6dbq0eux0bg.cloudfront.net/default-store/giftcards/gift_card_003_400px.jpg) 1x, url(https://d2j6dbq0eux0bg.cloudfront.net/default-store/giftcards/gift_card_003_800px.jpg) 2x); background-image: -o-image-set(url(https://d2j6dbq0eux0bg.cloudfront.net/default-store/giftcards/gift_card_003_400px.jpg) 1x, url(https://d2j6dbq0eux0bg.cloudfront.net/default-store/giftcards/gift_card_003_800px.jpg) 2x)", backgroundImage: "-ms-image-set(url(https://d2j6dbq0eux0bg.cloudfront.net/default-store/giftcards/gift_card_003_400px.jpg) 1x, url(https://d2j6dbq0eux0bg.cloudfront.net/default-store/giftcards/gift_card_003_800px.jpg) 2x)"}}>
            </div>
              <div className="details-gallery__images-zoom" style={{top: '-20%', left: "-78%", backgroundImage: "url(&quot;https://d2j6dbq0eux0bg.cloudfront.net/default-store/giftcards/gift_card_003_1500px.jpg&quot;)", width: "0px", height:"0px"}}>

              </div>
              <img src="https://d2j6dbq0eux0bg.cloudfront.net/default-store/giftcards/gift_card_003_1500px.jpg" title="Gift Card" alt="Gift Card" className="details-gallery__picture details-gallery__photoswipe-index-0" srcset="https://d2j6dbq0eux0bg.cloudfront.net/default-store/giftcards/gift_card_003_1500px.jpg 1x" itemprop="image"/></div></div>
        </Office>
      </li>
    </ul>
  )
}



export function Location({ invert = false, ...props }) {
  return (
    <ul role="list" {...props} >
      <li className='justify-center  flex align-center px-4 py-4 lg:py-[20%]'>
        <Office name="Hours" invert={invert} className="text-slate-100">
        {/* PRODUCT DETAILS */}
          <br className='-mt-2' />
          Open Daily: 4:00a.m.-5:00p.m.
🗓️ No appt, WALK-INS ONLY
NO HAIR PROVIDED FOR BOHO
*CASH ONLY & No Refunds*

        </Office>
      </li>
      <li >
        <Office  invert={invert}>
        <div className="details-gallery__image-wrapper max-[600px]:mt-[-15%]">
          <div class="details-gallery__image-wrapper-inner" style={{width: '1500px'}}>
            <div class="details-gallery__image-bg" 
                style={{backgroundImage: "url(/yasmins_location_img.png)", backgroundImage: "-webkit-image-set(url(/yasmins_location_img.png))",
                backgroundImage: "-moz-image-set(url(/yasmins_location_img.png)); background-image: -o-image-set(url(/yasmins_location_img.png))", backgroundImage: "-ms-image-set(url(https://d2j6dbq0eux0bg.cloudfront.net/default-store/giftcards/gift_card_003_400px.jpg) 1x, url(https://d2j6dbq0eux0bg.cloudfront.net/default-store/giftcards/gift_card_003_800px.jpg) 2x)"}}>
            </div>
              <div className="object-center object-cover min-h-[150px] max-[600px]:min-w-[95vw]  sm:min-w-[300px]" style={{ backgroundImage: "url(/yasmins_location_img.png)", width: "200px", height:"300px"}}>

              </div>
              {/* <img src="/yasmins_location_img.png" title="Gift Card" alt="Gift Card" className="details-gallery__picture details-gallery__photoswipe-index-0" srcset="/yasmins_location_img.png" itemprop="image"/> */}
              </div></div>
        </Office>
      </li>
    </ul>
  )
}
