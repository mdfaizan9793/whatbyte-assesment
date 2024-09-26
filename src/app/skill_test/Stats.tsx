'use client';
import React, { useEffect, useState } from "react";
import type { RootState } from "../../../GlobalRedux/store";
import { useSelector } from "react-redux";
import { useWindowWidth } from "@react-hook/window-size";

export default function Stats() {
    const Data = useSelector((state: RootState) => state.UserData)
    const onlyWidth = useWindowWidth()
    const mobileWidth = onlyWidth < 640
    const data = [
        {
            label: "RANK",
            value: Data.Rank,
            imgPath: "/cup.png"
        }, {
            label: "PERCENTILE",
            value: Data.Percentile,
            imgPath: "/clipboard.png"
        }, {
            label: "CORRECT ANSWERS",
            value: `${Data.Marks}/15`,
            imgPath: "/checked.png"
        }
    ]

    const [Border, setBorder] = useState("");
    useEffect(() => {
        if (mobileWidth) setBorder("border-b")
        else setBorder("border-r")
    }, [mobileWidth])

    return (
        <>
            {data.map((value, index) => (
                <div className={`flex justify-start items-center gap-3 ${index === 2 ? "" : Border} px-7 py-4 `} key={index}>
                        <div className='rounded-full h-[50px] w-[50px] bg-gray-200 flex justify-center items-center'>
                            <img height={25} width={25} src={value.imgPath} />
                        </div>
                        <div>
                            <p className='text-xl font-bold'>{value.value}</p>
                            <p className='font-extralight'>{value.label}</p>
                        </div>
                </div>
            ))}
        </>
    );
}
