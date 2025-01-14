import { useId,useEffect, useMemo, useRef, useState } from 'react'
import clsx from 'clsx'

export function Logomark({ invert = false, filled = false, ...props }) {
  const [triangleColor, setTriangleColor]= useState("text-indigo-400")
  const [heroCircleTop, setheroCircleTop]= useState('-ml-[64%] w-[100%] top-[-46%]  lg:top-0  h-[202%] lg:top-[-70%] lg:w-[83%] lg:h-[230%] !animatedCss !slide')
  const [topCircleColor, setTopCircleColor]=useState('bg-[#cfe6ee]')

  useEffect(() => {
    setTimeout(() => {setTriangleColor("bg-gradient-to-b from-[#c34f64] to-indigo-500")}, 2000)
  }, [triangleColor])
  let id = useId()
  useEffect(() => {
    setTimeout(() => {setTopCircleColor("bg-[#f3c14f]")}, 38000)
  }, [topCircleColor])

  return (<>
    {/* <div
    initial={{
    x: -200,
    }}
    transition={{ duration: 1.3 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: false }}
    className={clsx(heroCircleTop,topCircleColor,"absolute   -z-10 rounded-full")} 
    style={{
      'transform': 'rotateX(45deg) !important',
     'opacity': 1
  }}
  /> */}
    <div
    //  class="absolute top-10 !z-10 animatedCss"
    className={clsx(
      'transition-all duration-300',
      invert ? 'fill-white' : 'fill-neutral-950',
      filled ? 'w-4/5 h-1/3' : 'w-full group-hover/logo:w-full'
    )}

    >
    
      {/* <img alt="IMAGE" src="https://nassersite-sanity.vercel.app/nasportrait.7b07bff1.jpg" 
      className="h-24 w-24 z-10 object-cover object-center rounded-full ring-4 ring-blue-400 dark:ring-blue-500 sm:h-32 sm:w-32"/> */}

    </div> </>
    // <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
    //   <rect
    //     clipPath={`url(#${id}-clip)`}
    //     className={clsx(
    //       'h-8 transition-all duration-300',
    //       invert ? 'fill-white' : 'fill-neutral-950',
    //       filled ? 'w-8' : 'w-0 group-hover/logo:w-8'
    //     )}
    //   />
    //   <use
    //     href={`#${id}-path`}
    //     className={invert ? 'stroke-white' : 'stroke-neutral-950'}
    //     fill="none"
    //     strokeWidth="1.5"
    //   />
    //   <defs>
    //     <path
    //       id={`${id}-path`}
    //       d="M3.25 26v.75H7c1.305 0 2.384-.21 3.346-.627.96-.415 1.763-1.02 2.536-1.752.695-.657 1.39-1.443 2.152-2.306l.233-.263c.864-.975 1.843-2.068 3.071-3.266 1.209-1.18 2.881-1.786 4.621-1.786h5.791V5.25H25c-1.305 0-2.384.21-3.346.627-.96.415-1.763 1.02-2.536 1.751-.695.658-1.39 1.444-2.152 2.307l-.233.263c-.864.975-1.843 2.068-3.071 3.266-1.209 1.18-2.881 1.786-4.621 1.786H3.25V26Z"
    //     />
    //     <clipPath id={`${id}-clip`}>
    //       <use href={`#${id}-path`} />
    //     </clipPath>
    //   </defs>
    // </svg>
   
  )
}

export function Logo({
  className,
  invert = false,
  filled = false,
  fillOnHover = false,
  ...props
}) {
  return ( <div className='h-8 sm:block  '>
<p class="float-right text-right text-sm text-neutral-700 items-end px-6 lg:px-8"
 style={{background: "#faebd7"}}>© NasDesign Inc.2023</p>
    </div>
    
  )
}
