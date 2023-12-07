import { FooterE } from '@/components/Footer'
import { HeaderPart } from '@/components/Header'
import { PageFour } from '@/components/PageFour'
import CarouselSlider, { PageOne } from '@/components/PageOne'
import { PageThree } from '@/components/PageThree'
import { PageTwo } from '@/components/PageTwo'

export default function Home() {
    return (
      <div className='max-screen h-fit  m-auto flex items-center bg-white'>
        <div className='pt-[32px] px-[400px]  flex-col gap-[100px]   flex   bg-white'>
        <HeaderPart/>
        <PageThree/>
        <PageFour/>
        <FooterE/>
        </div>
      </div>
   
    )
  }