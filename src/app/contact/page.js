import { ContactFor } from '@/components/ContactFor'
import { FooterE } from '@/components/Footer'
import { HeaderPart } from '@/components/Header'




export default function Contact() {
    return (
      <div className='max-screen h-fit  m-auto flex items-center bg-white'>
        <div className='pt-[32px] px-[400px]  flex-col gap-[100px]   flex   bg-white'>
        <HeaderPart/>
      <ContactFor/>
        <FooterE/>
        </div>
      </div>
   
    )
  }
  