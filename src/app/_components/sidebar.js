'use client'
import Link from 'next/link'


import { CiGlobe, CiHeart, CiCalendarDate, CiBoxes, CiFaceSmile } from "react-icons/ci";
import { BsJournal, BsPeople } from "react-icons/bs";
import { MdAttachMoney } from "react-icons/md";
import { PiHeadCircuitThin } from "react-icons/pi";
import { IoBodyOutline } from "react-icons/io5";
import { GiPrayer } from "react-icons/gi";

function Sidebar() {
    return ( 
        <>
        <div className="sidebar flex-col flex pt-4 gap-8 items-center rounded-lg">
            <Link href="/"><CiGlobe /></Link>
            <Link href="/body"><IoBodyOutline /></Link>
            <Link href="/brain"><PiHeadCircuitThin/></Link>
            <Link href="/bonds"><BsPeople /></Link>
            <Link href="/budget"><MdAttachMoney/></Link>
            <Link href="/belief"><GiPrayer /></Link>
            <Link href="/journal"><BsJournal /></Link>
            <Link href="/calendar"><CiCalendarDate /></Link>
            <Link href="/objects"><CiBoxes /></Link>
        </div>
        </>
     );
}

export default Sidebar;