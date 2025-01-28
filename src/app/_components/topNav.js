'use client'
import Link from 'next/link'

import { CiGlobe, CiHeart, CiCalendarDate, CiBoxes } from "react-icons/ci";
import { BsJournal, BsPeople } from "react-icons/bs";
import { MdAttachMoney } from "react-icons/md";
import { PiHeadCircuitThin } from "react-icons/pi";
import { IoBodyOutline } from "react-icons/io5";

function TopNav() {
    return ( 
        <>
        <div className="flex flex-row h-[15%] w-full items-center bg-white justify-between shadow-lg">
            <div>
                <h1 className="px-2 font-semibold">Sonzai</h1>
            </div>
            <div className="flex items-center w-1/4 justify-between mr-2">
                
            </div>
        </div>
        </>
     );
}

export default TopNav;