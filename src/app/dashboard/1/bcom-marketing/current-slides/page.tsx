import Image from "next/image";
import Investment_Management_img from '@/components/assets/images/formulas_33006.jpg'
//import Enterpreneurship_img from '@/components/assets/images/cob_ad.jpg'
import Project_Management_img from '@/components/assets/images/Business_management_courses.jpg'
import Link from "next/link";


const courses = [
    {
        "id": 1,
        "title": "Project Management",
        "course_img": Investment_Management_img,
        "author": "JERRY WELSON",
        "published_day": 24,
        "published_month": "MAR",
        "published_year": 2023,
        "category": "Management",
        "url": "/dashboard/4/bcom-marketing/current-slides/project-management-slides"
    },
    {
        "id": 2,
        "title": "Enterpreneurship",
        "course_img": Project_Management_img,
        "author": "Sampson Larbi",
        "published_day": 11,
        "published_month": "FEB",
        "published_year": 2023,
        "category": "Enterpreneurship",
        "url": "/dashboard/4/bcom-marketing/current-slides/enterpreneurship-slides"
    },
    // {
    //     "id": 3,
    //     "title": "Design Thinking and Innovation",
    //     "course_img": Investment_Management_img,
    //     "author": "Kelly Yeboah",
    //     "published_day": 4,
    //     "published_month": "JAN",
    //     "published_year": 2022,
    //     "category": "Investment",
    //     "url": "/dashboard/4/bcom-marketing/current-slides/design-thinking-slides"
    // },
    // {
    //     "id": 4,
    //     "title": "Financial Management",
    //     "course_img": Project_Management_img,
    //     "author": "JERRY WELSON",
    //     "published_day": 24,
    //     "published_month": "MAR",
    //     "published_year": 2023,
    //     "category": "Management",
    //     "url": "/dashboard/4/bcom-marketing/current-slides/financial-management-slides"
    // },
    // {
    //     "id": 5,
    //     "title": "Marketing Research",
    //     "course_img": Enterpreneurship_img,
    //     "author": "Sampson Larbi",
    //     "published_day": 11,
    //     "published_month": "FEB",
    //     "published_year": 2023,
    //     "category": "Enterpreneurship",
    //     "url": "/dashboard/4/bcom-marketing/current-slides/marketing-slides"
    // },
    // {
    //     "id": 6,
    //     "title": "Self Management",
    //     "course_img": Investment_Management_img,
    //     "author": "Kelly Yeboah",
    //     "published_day": 4,
    //     "published_month": "JAN",
    //     "published_year": 2022,
    //     "category": "Investment",
    //     "url": "/dashboard/4/bcom-marketing/current-slides/self-management-slides"
    // },
]

export default function Pasco() {
    return(
        <>
            <section className="flex flex-col w-full">
                <h1 className='text-xl text-slate-900 mb-5'> Current Slides </h1>
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