"use client"

import { LogoIcon } from '@/assets/Logo'
import Search from '@/components/Search'
import { data } from 'autoprefixer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { BlogSec } from './Blog'
import React from 'react'
import Link from 'next/link'



export const HeaderPart = () => {
    return <div className='flex flex-row items-center gap-[440px] '>
        <div>
            <Link href="/home">
                <LogoIcon />
            </Link>
        </div>

        <div className=' flex flex-row gap-10 justify-center items-center'>

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
            {/* <Link href="/error">
                <div className='hover:bg-gray-200 hover:rounded-[6px]'>
                    error
                </div>
            </Link> */}
        </div>

        <div data={data} >
            <Search />
        </div>
    </div>
}