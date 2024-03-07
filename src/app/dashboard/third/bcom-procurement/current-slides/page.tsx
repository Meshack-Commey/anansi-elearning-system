import Image from "next/image";
import Link from "next/link";

import Business_Statistics_img from '@/components/assets/fileImgs/business_statistics.png'
import Cost_Accounting_img from '@/components/assets/fileImgs/cost_accounting.jpeg'
import Managerial_Economics_img from '@/components/assets/fileImgs/managerial_economics.jpg'
import Operation_Management_img from '@/components/assets/fileImgs/operation_management.png'
import Research_Methods_img from '@/components/assets/fileImgs/Research-Methods.jpg'

const courses = [
    {
        "id": 1,
        "title": "Operations Management",
        "course_img": Operation_Management_img,
        "author": "Sampson Larbi",
        "published_day": 11,
        "published_month": "FEB",
        "published_year": 2024,
        "category": "methods",
        "url": "/dashboard/third/bcom-procurement/current-slides/operations-management-slides"
    },
    {
        "id": 2,
        "title": "Business Statistics",
        "course_img": Business_Statistics_img,
        "author": "JERRY WELSON",
        "published_day": 24,
        "published_month": "MAR",
        "published_year": 2024,
        "category": "business",
        "url": "/dashboard/third/bcom-procurement/current-slides/business-statistics-slides"
    },
    {
        "id": 3,
        "title": "Cost Accounting",
        "course_img": Cost_Accounting_img,
        "author": "Sampson Larbi",
        "published_day": 11,
        "published_month": "FEB",
        "published_year": 2024,
        "category": "methods",
        "url": "/dashboard/third/bcom-procurement/current-slides/cost-accounting-slides"
    },
    {
        "id": 4,
        "title": "Managerial Economics",
        "course_img": Managerial_Economics_img,
        "author": "Sampson Larbi",
        "published_day": 11,
        "published_month": "FEB",
        "published_year": 2024,
        "category": "methods",
        "url": "/dashboard/third/bcom-procurement/current-slides/managerial-economics-slides"
    },
    {
        "id": 3,
        "title": "Research Methods",
        "course_img": Research_Methods_img,
        "author": "Sampson Larbi",
        "published_day": 11,
        "published_month": "FEB",
        "published_year": 2024,
        "category": "methods",
        "url": "/dashboard/third/bcom-procurement/current-slides/research-methods-slides"
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