import { RootLayout } from '@/components/RootLayout'

import '@/styles/tailwind.css'
// import { Sugela} from '../../public/fonts/sugelasugela-gowdq.ttf'
import styles from  '@/styles/base.css'
import Footer from '@/components/Footer'

export const metadata = {
  title: {
    template: 'Yasmines Beauty Salon NJ',
    default: 'Beauty Salon and Haircare specialist located in New Jesrsey. #NJ #haircare #beautysalon #newjerseybeautysalon.',
  },
}
// const fancyfont = Sugela({src:'../../public/fonts/sugelasugela-gowdq.ttf'})
// const sugela = Sugela({
//   subset:['latin'],
//   weight:['400', '500', '600', '700', '800']
// })
export default function Layout({ children }) {
  // console.log("FANCY FONT" , fancyfont.classNaem)
  return (
    <html lang="en" className="h-full bg-[#eed1e3] text-base antialiased">
      <body className="flex min-h-full flex-col">
        <RootLayout className={styles.testFont}>{children}</RootLayout>
        {/* <Footer /> */}
      </body>
    </html>
  )
}
