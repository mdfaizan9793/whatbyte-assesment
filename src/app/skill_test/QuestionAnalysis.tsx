import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button";
import {
    ChevronUp,
    ChevronDown
} from "lucide-react"
import { useSelector } from 'react-redux';
import { RootState } from '../../../GlobalRedux/store';
import RadialProgress from './RadialProgress';

type Props = {}
export default function QuestionAnalysis({ }: Props) {
    const userMarks = useSelector((state: RootState) => state.UserData.Marks)
    const [Msg, setMsg] = useState("")
    useEffect(() => {
        if (userMarks > 12) { setMsg("Keep it Up") }
        else if (userMarks < 12 && userMarks >= 10) { setMsg("However it still need some improvements") }
        else setMsg("Needs improvements")
    }, [userMarks])
    const [isCollapsed, setIsCollapased] = useState(true);
    function toggleCollapsebar() {
        setIsCollapased(!isCollapsed)
    }
    return (
        <div className='relative w-full px-3 '>
            <div className="absolute right-0 top-[-2.7rem]">
                <Button variant="secondary" className="rounded-full p-2"
                    onClick={toggleCollapsebar}
                >
                    {isCollapsed ? (
                        <ChevronUp />
                    ) : (

                        <ChevronDown />
                    )}

                </Button>
            </div>
            <div className='mt-4 p-1 flex items-center justify-between'>
                <p className='font-bold text-lg'>Question Analysis</p>
                <p className='font-bold text-lg text-blue-600'>{userMarks}/15</p>
            </div>
            {isCollapsed ? (
                <div>
                    <p className='p-1 text-base'>
                        <span className='text-lg font-semibold text-gray-600'>You scored {userMarks} out of 15. </span>
                        {Msg}
                    </p>
                    <div className='flex items-center justify-center w-full h-[300px] mt-5'>
                        <RadialProgress marks={userMarks}/>
                    </div>
                </div>
            ) : (
                <>
                </>
            )}
        </div>
    )
}
