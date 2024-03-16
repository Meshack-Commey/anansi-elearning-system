'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import Back from "@/components/assets/images/icons/back.png"
//importing slides


const slides = [
    {
        "id": 1,
        "title": "Coordination and Subordination",
        "author": "TUTORALS CENTER",
        "published_day": 1,
        "published_month": "JAN",
        "published_year": 2024,
        "category": "Lecture 1",
        "url": "/dashboard/first/bcom-procurement/current-slides/com-skills-slides/1"
    },
]

export default function Pasco() {
    const router = useRouter();

    return(
        <>
            <section className="flex flex-col w-full">
                <div className='flex justify-between'>
                    <h1 className='text-xl text-slate-900 mb-5'> Communication Skills Slides </h1>
                    {/* <Link href='/dashboard/first/bcom-procurement/past-questions'> Back</Link> */}
                    <button onClick={ () => router.back() } className="flex gap-2 mr-5"> <Image src={ Back } alt='back icon' className={"w-5 mt-1"} /> <p>Back</p> </button>
                </div>
                <section className="pasco-container"> {/** PASCO */}
                    {/** Cards */}
                    <div className="pasco-row">
                        {/** Card */}
                        <div className="pasco-items">
                         {
                            slides.map((course) => {
                                return(
                                <>
                                    <Link href={course.url}>
                                        <div className='w-auto'>
                                            
                                            <div className="flex bg-white">
                                                <div className='bg-red-500 pl-6 pr-6 flex flex-col justify-center items-center font-bold'>
                                                    <p className="text-white text-md"> {course.published_day} </p>
                                                    <p className="text-slate-900 text-lg"> {course.published_month} </p>
                                                    <p className="text-white text-md"> {course.published_year} </p>
                                                </div>
                                                <div className='flex flex-col gap-2 p-5 justify-start items-start '>
                                                    <p className="text-slate-900 text-lg"> {course.title} </p>
                                                    <div className='flex gap-6 flex-wrap text-sm uppercase'>
                                                        <span> {course.category} - By {course.author} </span>
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