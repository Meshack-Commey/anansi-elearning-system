import Image from "next/image";
import Investment_Management_img from '@/components/assets/images/formulas_33006.jpg'
import Enterpreneurship_img from '@/components/assets/images/cob_ad.jpg'
import Project_Management_img from '@/components/assets/images/Business_management_courses.jpg'
import Link from "next/link";


const courses = [
    {
        "id": 1,
        "title": "Project Management Achieving Competitive Advantage - 4th edition",
        "course_img": Project_Management_img,
        "author": "JERRY WELSON",
        "published_day": 24,
        "published_month": "MAR",
        "published_year": 2023,
        "category": "Management",
        "url": "/dashboard/4/bcom-marketing/past-questions/pm-pasco/1"
    },
    
]

export default function Pasco() {
    return(
        <>
            <section className="flex flex-col w-full">
                <div className='flex justify-between'>
                    <h1 className='text-xl text-slate-900 mb-5'> Financial Management Past Questions </h1>
                    <Link href='/dashboard/4/bcom-marketing/past-questions'> Back</Link>
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
                                        <div className='w-5/12 bg-white'>
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
                                                <div className='flex flex-col gap-2 p-5 justify-start items-start '>
                                                    <div className='flex gap-6 flex-wrap text-sm uppercase'>
                                                        <span>By {course.author} </span>
                                                    </div>
                                                    <p className="text-slate-900 text-lg"> {course.title} </p>
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