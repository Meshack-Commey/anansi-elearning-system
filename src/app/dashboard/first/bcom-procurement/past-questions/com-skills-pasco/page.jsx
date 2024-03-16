'use client'

import { useRouter } from 'next/navigation'
import Link from "next/link";
import Image from 'next/image'
import Back from "@/components/assets/images/icons/back.png"

const courses = [
    {
        "id": 1,
        "title": "Communicative Skills",
        "author": "JOHNSTON",
        "published_day": 24,
        "published_month": "MAR",
        "published_year": 2016,
        "category": "Communication",
        "url": "/dashboard/first/bcom-procurement/past-questions/com-skills-pasco/1"
    },
    {
        "id": 2,
        "title": "UCCABS COMMUNICATIVE SKILLS PASCO",
        "author": "UCCABS",
        "published_day": 8,
        "published_month": "MAY",
        "published_year": 2019,
        "category": "Communication",
        "url": "/dashboard/first/bcom-procurement/past-questions/com-skills-pasco/2"
    },
    
]

export default function Pasco() {
    const router = useRouter();
    
    return(
        <>
            <section className="flex flex-col w-full">
                <div className='flex justify-between'>
                    <h1 className='text-xl text-slate-900 mb-5'> Communicative Skills Past Questions </h1>
                    {/* <Link href='/dashboard/first/bcom-procurement/past-questions'> Back</Link> */}
                    <button onClick={ () => router.back() } className="flex gap-2 mr-5"> <Image src={ Back } alt="back icon" className={"w-5 mt-1"} /> <p> Back </p> </button>
                </div>
                <section className="pasco-container"> {/** PASCO */}
                    {/** Cards */}
                    <div className="pasco-row">
                        {/** Card */}
                        <div className="pasco-items">
                         {
                            courses.map((course) => {
                                return(
                                <>
                                    <Link href={course.url}>
                                        <div className='w-auto bg-white'>
                                            
                                            <div className="flex">
                                                <div className='bg-red-500 pl-6 pr-6 flex flex-col justify-center items-center font-bold'>
                                                    <p className="text-white text-md"> {course.published_day} </p>
                                                    <p className="text-slate-900 text-lg"> {course.published_month} </p>
                                                    <p className="text-white text-md"> {course.published_year} </p>
                                                </div>
                                                <div className='flex flex-col gap-2 p-5 justify-start items-start '>
                                                    <p className="text-slate-900 text-lg"> {course.title} </p>
                                                    <div className='flex gap-6 flex-wrap text-sm uppercase'>
                                                        <span>By {course.author} </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </>
                                )
                            })
                         }
                        </div>
                        {/** Endblock of Card */}
                    </div> {/** Endblock of Cards */}
                </section> {/** Endblock of Pasco */}
                
            </section>
        </>
    )
}