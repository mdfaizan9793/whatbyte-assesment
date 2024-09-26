import React from 'react'
import ProfileHover from './ui/ProfileHover'
type Props = {}
export default function Header({ }: Props) {
    return (
        <div className='w-full h-[80px] border-b flex justify-between items-start px-4 pt-3'>
            <p className='font-extrabold text-[2rem]'>
                WhatBytes
            </p>
            <ProfileHover />
        </div>
    )
}
