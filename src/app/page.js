
// import { YourCarousel } from '@/components/Carousel'
import { FooterE } from '@/components/Footer'
import { HeaderPart } from '@/components/Header'
import { PageFour } from '@/components/PageFour'
  import CarouselSlider, { PageOne } from '@/components/PageOne'
import { PageThree } from '@/components/PageThree'
import { PageTwo } from '@/components/PageTwo'
import Link from 'next/link'





export default function Home(articles) {
  return (
    <div className='max-screen h-fit  m-auto flex items-center bg-white'>
      <div className='pt-[32px] px-[400px]  flex-col gap-[100px]   flex   bg-white'>
      <HeaderPart/>
      {/* <YourCarousel/> */}
      <PageOne/>
      {/* <CarouselSlider/> */}
      <PageTwo/>
      <PageThree/>
      <PageFour/>
      <FooterE/>
      </div>
    </div>
 
  )
}
// export async function getServerSideProps() {
//   const articles = await fetch('https://dev.to/api/articles').then((res) => res.json());
//   console.log('articles= ', articles);
 
//   return {
//     props: {
//       articles: articles,
//     },
//   };
// }