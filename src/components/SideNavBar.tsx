/** @format */
'use client'

import React, { useEffect, useState } from "react";
import { Nav } from "./ui/nav";

import {
    Award,
    LayoutDashboard,
    File,
    ChevronRight,
    ChevronLeft
} from "lucide-react"

import {useWindowWidth} from '@react-hook/window-size'

import { Button } from "./ui/button";

type Props = {}

export default function SideNavBar({ }: Props) {
    const onlyWidth = useWindowWidth()
    const mobileWidth = onlyWidth < 768

    const [isCollapsed, setIsCollapased] = useState(false);

    function toggleSiderbar() {
        setIsCollapased(!isCollapsed)
    }

    useEffect(()=>{
        console.log(mobileWidth)
        if(mobileWidth) setIsCollapased(true)
        else setIsCollapased(false)
    },[mobileWidth])

    return (
        <div className={`relative ${isCollapsed ? 'w-[80px] px-auto' : 'w-[290px] pr-6'} border-r  pb-10 pt-2`}>
            {!mobileWidth &&
                <div className="absolute right-[-20px] top-7">
                    <Button variant="secondary" className="rounded-full p-2"
                        onClick={toggleSiderbar}
                    >
                        {isCollapsed ? (
                            <ChevronRight />
                        ) : (
                            <ChevronLeft />
                        )}

                    </Button>
                </div>
            }

            <Nav
                isCollapsed={mobileWidth ? true : isCollapsed}
                links={[
                    {
                        title: "Dashboard",
                        href: "/",
                        icon: LayoutDashboard,
                        variant: "default",
                    },
                    {
                        title: "Skill Test",
                        href: "/skill_test",
                        icon: Award,
                        variant: "ghost",
                    },
                    {
                        title: "Internship",
                        href: "/internship",
                        icon: File,
                        variant: "ghost",
                    },
                ]}
            />
        </div>
    )
}
