/** @format */
'use client'
import React from 'react'
import Update from './Update';
import Stats from '@/app/skill_test/Stats';
import Graph from './Graph';
import SyllabusAnalysis from './SyllabusAnalysis';
import QuestionAnalysis from './QuestionAnalysis';

type Props = {}
export default function SkillTestPage({ }: Props) {
    return (
        <div className='px-1'>
            <p className='text-lg'>Skill Test</p>
            <div className='p-1 flex flex-col xl:flex-row justify-start items-start sm:mt-8'>
                <div className='flex flex-col gap-9 w-full xl:w-7/12 p-1'>
                    <div className='flex flex-col sm:flex-row px-1 py-6 justify-center items-center border gap-4'>
                        <img src='/html.png' height={60} width={60} />
                        <div>
                            <p className='font-bold text-lg'>Hyper Text Markup Language</p>
                            <p className='font-thin'>Questions: 08 | Duration: 15min | Submitted on 5 June 2021</p>
                        </div>
                        <Update />
                    </div>

                    <div className='border px-1 py-6'>
                        <p className='font-bold'>Quick Statistics</p>
                        <div className='flex flex-col sm:flex-row justify-evenly items-start mt-4'>
                            <Stats />
                        </div>
                    </div>

                    <div className='border px-1 py-6'>
                        <Graph/>
                    </div>
                </div>

                <div className='p-1 w-full xl:w-fit mt-7 xl:mt-0 grow'>
                    <div className='border px-3 py-6'>
                        <SyllabusAnalysis/>
                    </div>
                    <div className='p-1 mt-12 border'>
                        <QuestionAnalysis/>
                    </div>
                </div>
            </div>

        </div >
    )
}
