// importing dependencies
import Image from 'next/image'
import Link from 'next/link'


//imported states
import PastQuestions_Icon from '@/components/assets/images/icons/book (1).png'
import Slides_Icon from '@/components/assets/images/icons/slide.png'
import Timetable_Icon from '@/components/assets/images/icons/schedule.png'

export const boards = [
    {
        "img": PastQuestions_Icon,
        "alt": "Past Questions",
        "url": "/dashboard/4/courses-and-questions",
        "value": 302
    }, 
    {
        "img": Slides_Icon,
        "alt": "Current Slides",
        "url": "/dashboard/4/current-slides",
        "value": 1022
    }, 
    {
        "img": Timetable_Icon,
        "alt": "Academic Timetable",
        "url": "/dashboard/4/academic-timetable",
        "value": 36
    }
]

const Lists_of_courses = [
    {
        "id": 1,
        "name": "Project Management",
        "url": "/dashboard/4/bcom-marketing/current-slides/project-management-slides",
    },
    {
        "id": 2,
        "name": "Enterpreneurship",
        "url": "/dashboard/4/bcom-marketing/current-slides/enterpreneurship-slides",
    },
    {
        "id": 3,
        "name": "Design Thinking and Innovation",
        "url": "/dashboard/4/bcom-marketing",
    },
    {
        "id": 4,
        "name": "Financial Management",
        "url": "/dashboard/4/bcom-marketing",
    },
    {
        "id": 5,
        "name": "Marketing Research",
        "url": "/dashboard/4/bcom-marketing",
    },
    {
        "id": 6,
        "name": "Self Management",
        "url": "/dashboard/4/bcom-marketing",
    },
]

export default function DashboardPages() {
    return(
    <> 
        <section className=' pr-10 pt-5 pb-5 bg-inherit flex flex-wrap gap-2 justify-between items-between'>
            {/** Dashboard Cards */}
            {
                boards.map((dashboard) => {
                    return(
                        <>
                            <div className='w-56 bg-white p-5 flex gap-10 justify-center items-center border border-inherit rounded-md'>
                                <figure className='w-4/12'>
                                    <Image 
                                        src={dashboard.img} 
                                        alt={dashboard.alt} 
                                        className='w-full'
                                    />
                                </figure>
                                <div className='flex flex-col gap-2 justify-end items-end text-end text-slate-500 font-bold'>
                                    <p> {dashboard.value} </p>
                                    <p> {dashboard.alt} </p>
                                </div>
                            </div>
                        </>
                    )
                })
            }
        </section>
        <section className=' pr-10 pt-5 pb-5 bg-inherit flex flex-wrap gap-2 justify-between items-between'>
            <div className='w-62 bg-white p-5 flex flex-col gap-2 justify-center items-center border border-inherit rounded-md text-slate-900 text-md'>
                <p className='text-start font-bold'> B.Com. Marketing </p>
                <p> # of Registered Courses </p>
                <p className='font-bold text-2xl'> {Lists_of_courses.length } </p>
            </div>
        </section>
        <section className=' pr-10 pt-5 pb-5 bg-inherit flex flex-wrap gap-2 justify-between items-between'>
            <div className='w-full bg-white p-5 flex flex-col gap-2 justify-center border border-inherit rounded-md text-slate-900 text-md'>
                <p className='text-start font-bold'> Courses </p>
                <hr />
                <ul className='text-base'>
                    {
                        Lists_of_courses.map((courses) => {
                            return(
                                <>
                                    <Link key={courses.id} href={courses.url}>
                                        <li className='text-base'> {courses.name} </li>
                                    </Link>
                                </>
                            )
                        })
                    }
                </ul>
                <hr />
                <div className='flex gap-3 justify-center items-center m-2'>
                    <p className='text-slate-500 rounded-md'>Per Page</p>
                    <select className='text-slate-700 rounded-md'>
                        <option>5</option>
                        <option>10</option>
                        <option>15</option>
                        <option>20</option>
                    </select>
                </div>
            </div>
        </section>
    </>
    )
}