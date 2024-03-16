'use client'

import { useRouter } from 'next/navigation'
import Link from "next/link";
import Image from 'next/image'
import Back from "@/components/assets/images/icons/back.png"
//import Project_Management_img from '@/components/assets/images/Business_management_courses.jpg'


//importing slides 


const slides = [
    {
        "id": 1,
        "title": "Information Literacy ",
        "author": "EVANS TEYE",
        "published_day": 20,
        "published_month": "JAN",
        "published_year": 2024,
        "category": "Lecture 1",
        "url": "/dashboard/first/bcom-procurement/current-slides/info-lit-slides/1"
    },
    {
        "id": 2,
        "title": "Libraries ",
        "author": "EVANS TEYE",
        "published_day": 20,
        "published_month": "JAN",
        "published_year": 2024,
        "category": "Lecture 2",
        "url": "/dashboard/first/bcom-procurement/current-slides/info-lit-slides/2"
    },
    {
        "id": 3,
        "title": "Information Sources ",
        "author": "EVANS TEYE",
        "published_day": 20,
        "published_month": "JAN",
        "published_year": 2024,
        "category": "Lecture 3",
        "url": "/dashboard/first/bcom-procurement/current-slides/info-lit-slides/3"
    },
    {
        "id": 4,
        "title": "Organization of Knowledge ",
        "author": "EVANS TEYE",
        "published_day": 20,
        "published_month": "JAN",
        "published_year": 2024,
        "category": "Lecture 4",
        "url": "/dashboard/first/bcom-procurement/current-slides/info-lit-slides/4"
    },
    {
        "id": 5,
        "title": "Ethical Issues",
        "author": "EVANS TEYE",
        "published_day": 20,
        "published_month": "JAN",
        "published_year": 2024,
        "category": "Lecture 5",
        "url": "/dashboard/first/bcom-procurement/current-slides/info-lit-slides/5"
    },
    {
        "id": 6,
        "title": "Referencing",
        "author": "EVANS TEYE",
        "published_day": 20,
        "published_month": "JAN",
        "published_year": 2024,
        "category": "Lecture 6",
        "url": "/dashboard/first/bcom-procurement/current-slides/info-lit-slides/6"
    },
    {
        "id": 7,
        "title": "Internet ",
        "author": "EVANS TEYE",
        "published_day": 20,
        "published_month": "JAN",
        "published_year": 2024,
        "category": "Lecture 7",
        "url": "/dashboard/first/bcom-procurement/current-slides/info-lit-slides/7"
    },
    {
        "id": 8,
        "title": "Internet Search Tools",
        "author": "EVANS TEYE",
        "published_day": 20,
        "published_month": "JAN",
        "published_year": 2024,
        "category": "Lecture 8",
        "url": "/dashboard/first/bcom-procurement/current-slides/info-lit-slides/8"
    },
    {
        "id": 9,
        "title": "Search Strategies",
        "author": "EVANS TEYE",
        "published_day": 20,
        "published_month": "JAN",
        "published_year": 2024,
        "category": "Lecture 9",
        "url": "/dashboard/first/bcom-procurement/current-slides/info-lit-slides/9"
    },
]

export default function Pasco() {
    const router = useRouter();

    return(
        <>
            <section className="flex flex-col w-full">
                <div className='flex justify-between'>
                    <h1 className='text-xl text-slate-900 mb-5'> Information Literacy Slides </h1>
                    {/* <Link href='/dashboard/first/bcom-procurement/current-slides'> Back</Link> */}
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