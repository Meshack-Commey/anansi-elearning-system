'use client'
import { useState } from 'react'
import Link from 'next/link'



function MenuBar(){
    const [isTapped, setIsTapped] = useState(false);

    const Close = () => {
        
        return setIsTapped(true)
    }

    return(
        <section className={`bg-blue-900 justify-center items-center w-60 pb-5 flex flex-col gap-5 ${isTapped ? "hidden" : ""}`}>
            <button  
                    onClick={()=> Close}
                    className={`w-12 m-2 bg-inherit text-2xl text-white font-bold border-inherit rounded lg:hidden `}
            >
                    close
            </button>
            <nav className="flex flex-col gap-8 text-white pt-4">
                    <Link href={"/"}>
                        <h1>Home</h1>
                    </Link>
                    <Link href={"/past-questions"}>
                        <h1>Past Questions</h1>
                    </Link>
                    <Link href={"/current-slides"}>
                        <h1>Current Slides</h1>
                    </Link>
                    <Link href={"/academic-timetable"}>
                        <h1>Academic Timetable</h1>
                    </Link>
                    <Link href={"/contact-us"}>
                        <h1>Contact us</h1>
                    </Link>
            </nav>
            <Link href={"/login"} className="hidden lg:block">
                <button className="w-18 p-2 mt-2 bg-white text-blue-900 font-bold border rounded">Premium Users</button>
            </Link>
        </section>
    )
}


export default function MenuButton(){
    const [isTapped, setIsTapped] = useState(false);

    const Open = () => {

        setIsTapped(false)
    }

    return(
        <>
            <button  
                    onClick={()=> Open}
                    className={`w-12 m-2 bg-inherit text-2xl text-white font-bold border-inherit rounded lg:hidden ${isTapped ? "hidden" : ""}`}
                >
                    &#9776;
            </button>
            <div className={`${isTapped ? "block" : "hidden"}`}>
                <MenuBar />
            </div>
        </>
    )
}