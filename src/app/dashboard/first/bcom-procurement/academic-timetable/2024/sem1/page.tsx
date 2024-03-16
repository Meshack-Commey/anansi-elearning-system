'use client'

import { useRouter } from 'next/navigation'
import Link from "next/link";
import Image from 'next/image'
import Back from "@/components/assets/images/icons/back.png"


export default function Read(){

    const router = useRouter();
    const timeTableUrl = "https://anansi-elearning-files.onrender.com/level100/timetable/Academic Timetable.pdf#toolbar=0"
    
    return(
        <>
           <section className="flex flex-col w-full">
                <div className='flex justify-between'>
                    <h1 className='text-xl text-slate-900 mb-5 capitalize'> 2023/2024 Academic Year </h1>
                    {/* <Link href='/dashboard/first/bcom-procurement/academic-timetable'> Back</Link> */}
                    <button onClick={ () => router.back() } className="flex gap-2 mr-5"> <Image src={ Back } alt='back icon' className={"w-5 mt-1"} /> <p>Back</p> </button>
                </div>
                <div>
                    <iframe src={ timeTableUrl } width="100%" height="600px" />
                </div>
            </section>
        </>
    )
}

