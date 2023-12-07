"use client";

import { FaceIcon } from "@/assets/Facebook"
import { IgIcon } from "@/assets/Ig"
import { LinkIcon } from "@/assets/Linkedin"
import { LogoTwo } from "@/assets/LogoTwo"
import { TwitterIcon } from "@/assets/Twitter"
import Link from 'next/link'




export const FooterE = () => {
    return <div className="bg-gray-200 pt-[64px] flex flex-col gap-[25px] p-gray-200">
        <div className="flex flex-row gap-[20px] justify-between  ">
            <div className="flex gap-[24px] grow-1 flex-col">
                <div className="flex flex-col gap-[12px] tex">
                    <h1>About</h1>
                    <div className="text-gray-400">
                        <p>Lorem ipsum dolor sit amet,</p>
                        <p>consectetur adipiscing elit, sed do</p>
                        <p>eiusmod tempor incididunt ut labore</p>
                        <p>et dolore magna aliqua. Ut enim ad</p>
                        <p>minim veniam</p>
                    </div>
                </div>
                <div>
                    <p>Email : info@jstemplate.net</p>
                    <p>Phone : 880 123 456 789</p>

                </div>

            </div>
            <div className="flex grow-1 flex-col text-gray-500 ">

                <Link href="/home">
                    <div className='hover:bg-gray-200 hover:rounded-[6px]'>
                        Home
                    </div>
                </Link>
                <Link href="/blog">
                    <div className='hover:bg-gray-200 hover:rounded-[6px]'>
                        Blog
                    </div>
                </Link>
                <Link href="/contact">
                    <div className='hover:bg-gray-200 hover:rounded-[6px]'>
                        Contact
                    </div>
                </Link>

            </div>
            <div className=" flex grow-1 flex-row gap-[26px]">
                <FaceIcon />
                <TwitterIcon />
                <IgIcon />
                <LinkIcon />


            </div>

        </div>
        <div className="py-[32px] border-t-2 flex flex-row items-center justify-between border-gray-300">
            <div className="flex flex-row gap-[10px] items-center">
            <Link href="/home">
                <LogoTwo />
            </Link>
                <div>
                    <p>MetaBlog</p>
                    <h1>© All Rights Reserved.</h1>
                </div>

            </div>
            <div className="flex flex-row gap-[16px] divide-x-2 divide-gray-300">
                <a >Terms of Use</a>
                <a  >Privacy Policy</a>
                <a  >Cookie Policy</a>

            </div>

        </div>

    </div>
}