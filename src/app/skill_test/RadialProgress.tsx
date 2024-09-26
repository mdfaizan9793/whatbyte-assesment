import React from "react";
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
type Props = {
    marks: number
}
export default function RadialProgress({ marks }: Props) {
    const percentage=(marks/15)*100;
    return (
        <div className=" h-[200px] w-[200px]">
            <CircularProgressbar 
            value={percentage} text={`${percentage}%`} 
            styles={buildStyles({
                textSize: '8px',
            })}
            />
        </div>
    )
}
