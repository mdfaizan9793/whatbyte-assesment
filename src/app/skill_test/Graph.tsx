import React, { useEffect, useState } from 'react'
import {
    ChevronUp,
    ChevronDown
} from "lucide-react"
import { Button } from "@/components/ui/button";
import { RootState } from '../../../GlobalRedux/store';
import { useSelector } from 'react-redux';
import RealGraph from './RealGraph';

type Props = {}
export default function Graph({ }: Props) {
    const userPercentile = useSelector((state: RootState) => state.UserData.Percentile)
    const avgPercentile = 72;
    const [Msg, setMsg] = useState("")
    useEffect(() => {
        if (userPercentile > avgPercentile) { setMsg("greater than") }
        else if (userPercentile < avgPercentile) { setMsg("lower than") }
        else setMsg("equals to")
    }, [userPercentile])

    const [isCollapsed, setIsCollapased] = useState(true);
    function toggleCollapsebar() {
        setIsCollapased(!isCollapsed)
    }

    return (
        <div className='relative w-full px-3'>
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
            <p className='font-bold text-lg'>Comparison Graph</p>
            {isCollapsed ? (
                <div className='mt-4'>
                    <p className='p-1 text-base'>
                        <span className='text-lg font-semibold text-gray-600'>You scored {userPercentile}% Percentile </span>
                        which is {Msg} average Percentile {avgPercentile}% of all the engineers who took this assessment
                    </p>
                    <div className=' w-full h-[300px] mt-5'>
                        <RealGraph />
                    </div>
                </div>
            ) : (
                <>
                </>
            )}

        </div >
    )
}
