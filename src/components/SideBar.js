//'use client'
//import {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'

//imported states
import Dashboard_Icon from '@/components/assets/images/icons/dashboard (4).png'
import Programme_Icon from '@/components/assets/images/icons/calendar.png'
import PastQuestions_Icon from '@/components/assets/images/icons/book (1).png'
import Slides_Icon from '@/components/assets/images/icons/slide.png'
import Timetable_Icon from '@/components/assets/images/icons/schedule.png'

export const sidebarMenu = [
    {
        "img": Dashboard_Icon,
        "alt": "Dashboard",
        "url": "/dashboard",
        "value": 0
    }, 
    {
        "img": Programme_Icon,
        "alt": "Programmes",
        "url": "/dashboard/programmes",
        "value": 5
    }, 
    {
        "img": PastQuestions_Icon,
        "alt": "Courses and Questions",
        "url": "/dashboard/courses-and-questions",
        "value": 1045
    }, 
    {
        "img": Slides_Icon,
        "alt": "Current Slides",
        "url": "/dashboard/current-slides",
        "value": 598
    }, 
    {
        "img": Timetable_Icon,
        "alt": "Academic Timetable",
        "url": "/dashboard/academic-timetable",
        "value": 14
    }
]

{/** Full Side Navigation */}
export const FullSideNav = () => {
    
    return(
        <>
            <section className='w-full h-full bg-inherit  p-5 '>
                <div className='fixed mt-11'>
                    {
                        sidebarMenu.map((value) => {
                            return(
                                <>
                                    <p> <Link href={value.url} className='text-slate-900 text-sm ml-3'> {value.alt} </Link> </p>
                                    <br />
                                </>
                            )
                        })
                    } 
                </div>
            </section>
        </>
    )
}

export const ShortSideNav = () => {

    return(
        <>
            <section className='w-full bg-blue-900  p-3 flex flex-col gap-6 relative'>
                <div className='fixed mt-10'>
                    {
                        sidebarMenu.map((icons) => {
                            return(
                                <>
                                    <Link href={icons.url}>
                                        <figure key={icons.alt} className='w-8 mb-8 mt-2 hover:cursor-pointer  '>
                                            <Image 
                                                src={icons.img} 
                                                alt={icons.alt} 
                                                className='w-full'
                                            />  
                                        </figure>
                                    </Link>
                                </>
                            )
                        })
                    }
                </div>
            </section>  
        </>
    )
}


