import Image from "next/image";
import Link from "next/link";

import Com_Skills_img from '@/components/assets/fileImgs/communication-skills.jpg'
import Info_Lit_img from '@/components/assets/fileImgs/Infolit.jpg'
import Financial_Accounting_img from '@/components/assets/fileImgs/financial-accounting.jpeg'
import Micro_Economics_img from '@/components/assets/fileImgs/microeconomics2-1.png'

const courses = [
    {
        "id": 1,
        "title": "Communication Skills",
        "course_img": Com_Skills_img,
        "author": "Sampson Larbi",
        "published_day": 11,
        "published_month": "FEB",
        "published_year": 2023,
        "category": "methods",
        "url": "/dashboard/first/bcom-procurement/current-slides/quantitative-methods-slides"
    },
    {
        "id": 2,
        "title": "Information Literacy Skills",
        "course_img": Info_Lit_img,
        "author": "JERRY WELSON",
        "published_day": 24,
        "published_month": "MAR",
        "published_year": 2023,
        "category": "business",
        "url": "/dashboard/first/bcom-procurement/current-slides/business-law-slides"
    },
    {
        "id": 3,
        "title": "Financial Accounting",
        "course_img": Financial_Accounting_img,
        "author": "Sampson Larbi",
        "published_day": 11,
        "published_month": "FEB",
        "published_year": 2023,
        "category": "methods",
        "url": "/dashboard/first/bcom-procurement/current-slides/financial-accounting-slides"
    },
    {
        "id": 4,
        "title": "Mico Economics",
        "course_img": Micro_Economics_img,
        "author": "Sampson Larbi",
        "published_day": 11,
        "published_month": "FEB",
        "published_year": 2023,
        "category": "methods",
        "url": "/dashboard/first/bcom-procurement/current-slides/micro-economics-slides"
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