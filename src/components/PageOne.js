"use client"
// import React, { Component } from "react";
// import React from 'react';

import { useState, useEffect } from 'react';



export const PageOne = () => {
    const [carouselIndex, setCarouselIndex] = useState(1);
    const [withTransition, setWithTransition] = useState(true);
    const [isOnTransition, setIsOnTransition] = useState(false)
    return <div className='flex flex-col gap-5 '>
        <div className='w-[1440px] overflow-hidden'>
            <div className='flex flex-row w-[7200px]' onTransitionStart={()=>{
                setIsOnTransition(true)
                
            }}
            onTransitionEnd={()=>{
                if (carouselIndex===4){
                    setCarouselIndex(1);
                    setWithTransition(false)
                }
                if (carouselIndex===0){
                    setCarouselIndex(3)
                    setWithTransition(false)
                }
                setIsOnTransition(false)
            }}
            style={{
                transform: `translateX(-${20 * carouselIndex}%)`,
                transition: withTransition ? "300ms" : "none",
            }}
            
            >
                <div className="relative">
                    <img className="w-[1440px] h-[700px] rounded-[12px] " src="https://s3-alpha-sig.figma.com/img/eb4f/aad2/4394e91108e011b0d07581596959713b?Expires=1702857600&Signature=TEJqgZebhD5ngGJk43qte2~qf859bguz1g9w0nc-t-7JwZKqGO9HkQ4f7UsByRTKRdqOFoXLq-GeNWVTxyF9yaI-X8jNnKzpHHPB0mwm5217XLBDvleUnawK8Q52jyuf37X~tBpedwk-oALlTZsspRn-XWzxdTRQOMwtXGLvj~Kv~0VS~Cxf7gUiI44x1oZGIcO9HQbL7oAr57JaTLqKz-5STAIIaCV4bEzUKUSd3x8o89LHrwfVdB1rnbaOm-NrwsFjsCGap2EeymdGc1fM9MLK7cYBadPJIs062VLD9cvqO4LZZ7kzDuD2FWVmWuhODVPANFGn0YJgP78jzOayAg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"></img>
                    <div className="absolute bg-white w-[598px] h-[252px] p-[40px] bottom-2 left-2 rounded-[12px] flex flex-col gap-[24px]">

                        <div className="flex flex-col gap-[16px]">
                            <div className="bg-blue-300 text-white p-1 rounded-[6px] w-fit">
                                <h1>Technology</h1>
                            </div>
                            <div className="text-3xl font-sans">
                                <p>Grid system for better Design User Interface</p>
                            </div>
                        </div>

                        <div className="text-gray-400">
                            <h1>August 20, 2022</h1>
                        </div>

                    </div>
                </div>
                <div className="relative">
                    <img className="w-[1440px] h-[700px] rounded-[12px] " src="https://s3-alpha-sig.figma.com/img/eb4f/aad2/4394e91108e011b0d07581596959713b?Expires=1702857600&Signature=TEJqgZebhD5ngGJk43qte2~qf859bguz1g9w0nc-t-7JwZKqGO9HkQ4f7UsByRTKRdqOFoXLq-GeNWVTxyF9yaI-X8jNnKzpHHPB0mwm5217XLBDvleUnawK8Q52jyuf37X~tBpedwk-oALlTZsspRn-XWzxdTRQOMwtXGLvj~Kv~0VS~Cxf7gUiI44x1oZGIcO9HQbL7oAr57JaTLqKz-5STAIIaCV4bEzUKUSd3x8o89LHrwfVdB1rnbaOm-NrwsFjsCGap2EeymdGc1fM9MLK7cYBadPJIs062VLD9cvqO4LZZ7kzDuD2FWVmWuhODVPANFGn0YJgP78jzOayAg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"></img>
                    <div className="absolute bg-white w-[598px] h-[252px] p-[40px] bottom-2 left-2 rounded-[12px] flex flex-col gap-[24px]">

                        <div className="flex flex-col gap-[16px]">
                            <div className="bg-blue-300 text-white p-1 rounded-[6px] w-fit">
                                <h1>Technology</h1>
                            </div>
                            <div className="text-3xl font-sans">
                                <p>Grid system for better Design User Interface</p>
                            </div>
                        </div>

                        <div className="text-gray-400">
                            <h1>August 20, 2022</h1>
                        </div>

                    </div>
                </div>
                <div className="relative">
                    <img className="w-[1440px] h-[700px] rounded-[12px] " src="https://s3-alpha-sig.figma.com/img/eb4f/aad2/4394e91108e011b0d07581596959713b?Expires=1702857600&Signature=TEJqgZebhD5ngGJk43qte2~qf859bguz1g9w0nc-t-7JwZKqGO9HkQ4f7UsByRTKRdqOFoXLq-GeNWVTxyF9yaI-X8jNnKzpHHPB0mwm5217XLBDvleUnawK8Q52jyuf37X~tBpedwk-oALlTZsspRn-XWzxdTRQOMwtXGLvj~Kv~0VS~Cxf7gUiI44x1oZGIcO9HQbL7oAr57JaTLqKz-5STAIIaCV4bEzUKUSd3x8o89LHrwfVdB1rnbaOm-NrwsFjsCGap2EeymdGc1fM9MLK7cYBadPJIs062VLD9cvqO4LZZ7kzDuD2FWVmWuhODVPANFGn0YJgP78jzOayAg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"></img>
                    <div className="absolute bg-white w-[598px] h-[252px] p-[40px] bottom-2 left-2 rounded-[12px] flex flex-col gap-[24px]">

                        <div className="flex flex-col gap-[16px]">
                            <div className="bg-blue-300 text-white p-1 rounded-[6px] w-fit">
                                <h1>Technology</h1>
                            </div>
                            <div className="text-3xl font-sans">
                                <p>Grid system for better Design User Interface</p>
                            </div>
                        </div>

                        <div className="text-gray-400">
                            <h1>August 20, 2022</h1>
                        </div>

                    </div>
                </div>
                <div className="relative">
                    <img className="w-[1440px] h-[700px] rounded-[12px] " src="https://s3-alpha-sig.figma.com/img/eb4f/aad2/4394e91108e011b0d07581596959713b?Expires=1702857600&Signature=TEJqgZebhD5ngGJk43qte2~qf859bguz1g9w0nc-t-7JwZKqGO9HkQ4f7UsByRTKRdqOFoXLq-GeNWVTxyF9yaI-X8jNnKzpHHPB0mwm5217XLBDvleUnawK8Q52jyuf37X~tBpedwk-oALlTZsspRn-XWzxdTRQOMwtXGLvj~Kv~0VS~Cxf7gUiI44x1oZGIcO9HQbL7oAr57JaTLqKz-5STAIIaCV4bEzUKUSd3x8o89LHrwfVdB1rnbaOm-NrwsFjsCGap2EeymdGc1fM9MLK7cYBadPJIs062VLD9cvqO4LZZ7kzDuD2FWVmWuhODVPANFGn0YJgP78jzOayAg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"></img>
                    <div className="absolute bg-white w-[598px] h-[252px] p-[40px] bottom-2 left-2 rounded-[12px] flex flex-col gap-[24px]">

                        <div className="flex flex-col gap-[16px]">
                            <div className="bg-blue-300 text-white p-1 rounded-[6px] w-fit">
                                <h1>Technology</h1>
                            </div>
                            <div className="text-3xl font-sans">
                                <p>Grid system for better Design User Interface</p>
                            </div>
                        </div>

                        <div className="text-gray-400">
                            <h1>August 20, 2022</h1>
                        </div>

                    </div>
                </div>
                <div className="relative">
                    <img className="w-[1440px] h-[700px] rounded-[12px] " src="https://s3-alpha-sig.figma.com/img/eb4f/aad2/4394e91108e011b0d07581596959713b?Expires=1702857600&Signature=TEJqgZebhD5ngGJk43qte2~qf859bguz1g9w0nc-t-7JwZKqGO9HkQ4f7UsByRTKRdqOFoXLq-GeNWVTxyF9yaI-X8jNnKzpHHPB0mwm5217XLBDvleUnawK8Q52jyuf37X~tBpedwk-oALlTZsspRn-XWzxdTRQOMwtXGLvj~Kv~0VS~Cxf7gUiI44x1oZGIcO9HQbL7oAr57JaTLqKz-5STAIIaCV4bEzUKUSd3x8o89LHrwfVdB1rnbaOm-NrwsFjsCGap2EeymdGc1fM9MLK7cYBadPJIs062VLD9cvqO4LZZ7kzDuD2FWVmWuhODVPANFGn0YJgP78jzOayAg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"></img>
                    <div className="absolute bg-white w-[598px] h-[252px] p-[40px] bottom-2 left-2 rounded-[12px] flex flex-col gap-[24px]">

                        <div className="flex flex-col gap-[16px]">
                            <div className="bg-blue-300 text-white p-1 rounded-[6px] w-fit">
                                <h1>Technology</h1>
                            </div>
                            <div className="text-3xl font-sans">
                                <p>Grid system for better Design User Interface</p>
                            </div>
                        </div>

                        <div className="text-gray-400">
                            <h1>August 20, 2022</h1>
                        </div>

                    </div>
                </div>
            </div>

        </div>



        <div className='flex flex-row gap-9 justify-end'>
            <button className='outline rounded-[6px] px-5' onClick={() => {
                if (isOnTransition) return;
                setCarouselIndex((prev) => prev - 1);
                setWithTransition(true)
                setIsOnTransition(true)
            }}>
                &#60;
            </button>
            <button className='outline rounded-[6px] px-5' onClick={() => {
                if (isOnTransition) return;
                setCarouselIndex((prev) => prev + 1);
                setWithTransition(true)
                setIsOnTransition(true)
            }}>
                &#62;
            </button>
        </div>
    </div>

    // return <YourCarousel/>
    // return <div className="relative">
    //     <img className="w-[1440px] h-[700px] rounded-[12px] " src="https://s3-alpha-sig.figma.com/img/eb4f/aad2/4394e91108e011b0d07581596959713b?Expires=1702857600&Signature=TEJqgZebhD5ngGJk43qte2~qf859bguz1g9w0nc-t-7JwZKqGO9HkQ4f7UsByRTKRdqOFoXLq-GeNWVTxyF9yaI-X8jNnKzpHHPB0mwm5217XLBDvleUnawK8Q52jyuf37X~tBpedwk-oALlTZsspRn-XWzxdTRQOMwtXGLvj~Kv~0VS~Cxf7gUiI44x1oZGIcO9HQbL7oAr57JaTLqKz-5STAIIaCV4bEzUKUSd3x8o89LHrwfVdB1rnbaOm-NrwsFjsCGap2EeymdGc1fM9MLK7cYBadPJIs062VLD9cvqO4LZZ7kzDuD2FWVmWuhODVPANFGn0YJgP78jzOayAg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"></img>
    //     <div className="absolute bg-white w-[598px] h-[252px] p-[40px] bottom-2 left-2 rounded-[12px] flex flex-col gap-[24px]">

    //         <div className="flex flex-col gap-[16px]">
    //             <div className="bg-blue-300 text-white p-1 rounded-[6px] w-fit">
    //                 <h1>Technology</h1>
    //             </div>
    //             <div className="text-3xl font-sans">
    //                 <p>Grid system for better Design User Interface</p>
    //             </div>
    //         </div>

    //         <div className="text-gray-400">
    //             <h1>August 20, 2022</h1>
    //         </div>

    //     </div>
    // </div>
}
// export default class SimpleSlider extends Component {
//     render() {
//       const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1
//       };
//       return (
//         <div>
//           <h2> Single Item</h2>
//           <Slider {...settings}>
//             <div>
//               <h3>1</h3>
//             </div>
//             <div>
//               <h3>2</h3>
//             </div>
//             <div>
//               <h3>3</h3>
//             </div>
//             <div>
//               <h3>4</h3>
//             </div>
//             <div>
//               <h3>5</h3>
//             </div>
//             <div>
//               <h3>6</h3>
//             </div>
//           </Slider>
//         </div>
//       );
//     }
//   }

// import React from 'react';

// import Slider from 'react-slick';

// import 'slick-carousel/slick/slick.css';

// import 'slick-carousel/slick/slick-theme.css';

// const CarouselSlider = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//   };

//   return (
//     <Slider {...settings}>
//       <div>
//         <h3>Slide 1</h3>
//       </div>
//       <div>
//         <h3>Slide 2</h3>
//       </div>
//       <div>
//         <h3>Slide 3</h3>
//       </div>
//     </Slider>
//   );

// };

// export default CarouselSlider;