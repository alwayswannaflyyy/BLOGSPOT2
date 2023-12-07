"use client"


import Link from 'next/link'


export const Error404 = () => {
    return <div className="flex justify-center items-center">
        <div>
            <div className="  flex flex-row gap-[60px]  ">
                <div className="text-9xl flex  ">
                    404

                </div>
                <div className='border-[1px]'></div>
              
                <div className='flex flex-col py-[8px] gap-[20px] ]'>
                    <div className='text-3xl'>
                        <h1>Page Not Found</h1>
                    </div>
                    <div className='text-gray-400'>
                        <p>We're sorry, This page is unknown or does</p>
                        <p>not exist the page you are looking for.</p>

                    </div>
                    <div>
                        <Link href="/home">
                            <div className=' bg-blue-600 w-fit py-[10px] px-[16px] text-white rounded-[6px]'>
                                Back to Home
                            </div>
                        </Link>

                    </div>
                </div>
            </div>
        </div>

    </div>
}