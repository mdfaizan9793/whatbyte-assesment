import React,{useState} from 'react'
import { Button } from "@/components/ui/button";
import {
    ChevronUp,
    ChevronDown
} from "lucide-react"
import { Progress } from "@/components/ui/progress"


type Props={}
export default function SyllabusAnalysis({}:Props){
    const [isCollapsed, setIsCollapased] = useState(true);
    function toggleCollapsebar() {
        setIsCollapased(!isCollapsed)
    }

    const Syllabus=[
        {
            name:"HTML Tools, Forms, History",
            progress:76,
            bg:"bg-blue-100",
            fg:"bg-blue-500",
        },
        {
            name:"Tags and References in HTML",
            progress:61,
            bg:"bg-orange-100",
            fg:"bg-orange-500",
        },
        {
            name:"Tabels in HTML",
            progress:34,
            bg:"bg-red-100",
            fg:"bg-red-500",
        },
        {
            name:"CSS Basics",
            progress:98,
            bg:"bg-green-100",
            fg:"bg-green-500",
        },

    ]
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
            <p className='font-bold text-lg'>Syllabus Wise Analysis</p>
            {isCollapsed?(
                <div className='mt-2 p-2'>
                    {Syllabus.map((value,index)=>(
                        <div key={index} className='my-2'>
                            <p className='my-4'>{value.name}</p>
                            <Progress bg={value.bg} fg={value.fg} value={value.progress}/>
                        </div>
                    ))}
                </div>
            ):(
                <>
                </>
            )}
        </div>
    )
}
