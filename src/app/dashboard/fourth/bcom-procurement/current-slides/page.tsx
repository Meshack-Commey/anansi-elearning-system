import Image from "next/image";
import Link from "next/link";

import Design_Thinking_img from '@/components/assets/fileImgs/design_thinking.jpg'
import Project_Management_img from '@/components/assets/fileImgs/Project-Management.jpg'
import Enterpreneurship_img from '@/components/assets/fileImgs/entrepreneurship.jpg'
import Risk_Management_img from '@/components/assets/fileImgs/risks-management.png'
import Sustainable_Procurement_img from '@/components/assets/fileImgs/sustainable-procurement.png'
import LEAN_img from '@/components/assets/fileImgs/lean.png'

const courses = [
    {
        "id": 1,
        "title": "Project Management",
        "course_img": Project_Management_img,
        "author": "JERRY WELSON",
        "published_day": 24,
        "published_month": "MAR",
        "published_year": 2023,
        "category": "Management",
        "url": "/dashboard/fourth/bcom-procurement/current-slides/project-management-slides"
    },
    {
        "id": 2,
        "title": "Enterpreneurship",
        "course_img": Enterpreneurship_img,
        "author": "Sampson Larbi",
        "published_day": 11,
        "published_month": "FEB",
        "published_year": 2023,
        "category": "Enterpreneurship",
        "url": "/dashboard/fourth/bcom-procurement/current-slides/enterpreneurship-slides"
    },
    {
        "id": 3,
        "title": "Risk Management",
        "course_img": Risk_Management_img,
        "author": "JERRY WELSON",
        "published_day": 24,
        "published_month": "MAR",
        "published_year": 2023,
        "category": "Management",
        "url": "/dashboard/fourth/bcom-procurement/current-slides/risk-management-slides"
    },
    {
        "id": 4,
        "title": "Design Thinking and Innovation",
        "course_img": Design_Thinking_img,
        "author": "Kelly Yeboah",
        "published_day": 4,
        "published_month": "JAN",
        "published_year": 2022,
        "category": "Investment",
        "url": "/dashboard/fourth/bcom-procurement/current-slides/design-thinking-slides"
    },
    {
        "id": 5,
        "title": "LEAN",
        "course_img": LEAN_img,
        "author": "Kelly Yeboah",
        "published_day": 4,
        "published_month": "JAN",
        "published_year": 2022,
        "category": "lean",
        "url": "/dashboard/fourth/bcom-procurement/current-slides/lean-slides"
    },
    {
        "id": 6,
        "title": "Sustainable Procurement",
        "course_img": Sustainable_Procurement_img,
        "author": "Sampson Larbi",
        "published_day": 11,
        "published_month": "FEB",
        "published_year": 2023,
        "category": "procurement",
        "url": "/dashboard/fourth/bcom-procurement/current-slides/sustainable-procurement-slides"
    },
    
]

export default function Pasco() {
    return(
        <>
            <section className="flex flex-col w-full">
                <h1 className='text-xl text-slate-900 mb-5'> Courses with Current Slides </h1>
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
                                        <div className='pasco-items-card'>
                                            <figure className='w-full overflow-hidden transition ease-out duration-100 hover:cursor-pointer'>
                                                <Image 
                                                    src={course.course_img} 
                                                    alt={course.title} 
                                                    className='w-full'
                                                />
                                            </figure>
                                            <div className="flex">
                                                <div className='bg-red-500 pl-6 pr-6 flex flex-col justify-center items-center font-bold'>
                                                    <p className="text-white text-md"> {course.published_day} </p>
                                                    <p className="text-slate-900 text-lg"> {course.published_month} </p>
                                                    <p className="text-white text-md"> {course.published_year} </p>
                                                </div>
                                                <div className='w-full flex flex-col gap-2 p-5 justify-start items-start bg-white '>
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
                <section className="pasco-container">
                    <div className="pasco-row">
                        <div className="more-on"> {/** More on */}
                            <h1 className='font-bold text-xl'> More on </h1>
                            <div className='flex flex-col'>
                                {
                                    courses.map((more) => {
                                        return(
                                            <>
                                                <div key={more.id} className='flex mt-2 mb-2 bg-gray-200 text-slate-900'>
                                                    <Link href={more.url} className="flex p-5">
                                                        <figure className='w-1/12 m-2 overflow-hidden transition ease-out duration-100 hover:cursor-pointer'>
                                                            <Image 
                                                                src={more.course_img} 
                                                                alt={more.title} 
                                                                className='w-full'
                                                            />
                                                        </figure>
                                                        <p className='p-4 text-center text-xl'> {more.title} </p>
                                                    </Link>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}