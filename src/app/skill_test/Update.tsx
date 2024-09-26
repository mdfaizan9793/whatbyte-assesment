import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import type { RootState } from "../../../GlobalRedux/store";
import { useSelector,useDispatch } from 'react-redux'
import { UpdateMarks, UpdatePercentile, UpdateRank } from '../../../GlobalRedux/Features/UserData/UserDataSlice'


type Props = {}
export default function Update({ }: Props) {
    const Data = useSelector((state: RootState) => state.UserData)
    const dispatch=useDispatch()

    const [Rank,setRank]=useState(Data.Rank)
    const [Marks,setMarks]=useState(Data.Marks)
    const [Percentile,setPercentile]=useState(Data.Percentile)

    function SubmitEvent() {
        dispatch(UpdateRank(Rank));
        dispatch(UpdateMarks(Marks));
        dispatch(UpdatePercentile(Percentile));
    }

    return (
        <div>
            <Dialog>
                <DialogTrigger asChild>
                    <Button className='bg-blue-900 text-white w-[90px]'>Update</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Update Scores</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="rank" className="text-right">
                                Rank
                            </Label>
                            <Input id="rank" value={Rank} className="col-span-3" onChange={(e) => setRank(Number(e.target.value))}  />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="percentile" className="text-right">
                                Percentile
                            </Label>
                            <Input id="percentile" value={Percentile} className="col-span-3" onChange={(e) => setPercentile(Number(e.target.value))} />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="marks" className="text-right">
                                Marks
                            </Label>
                            <Input id="marks" value={Marks} className="col-span-3" onChange={(e) => setMarks(Number(e.target.value))}/>
                        </div>
                    </div>
                    <DialogFooter>
                        <DialogClose>
                        <Button type="submit" onClick={SubmitEvent} aria-label="Close">Save changes</Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}
