import Image from "next/image";
import Project_Management_img from '@/components/assets/images/Business_management_courses.jpg'
import Link from "next/link";

//importing slides


const courses = [
    {
        "id": 1,
        "title": "Introduction to Risk Management",
        "course_img": Project_Management_img,
        "author": "JERRY WELSON",
        "published_day": 24,
        "published_month": "MAR",
        "published_year": 2024,
        "category": "Lecture 1",
        "url": "/dashboard/4/bcom-procurement/current-slides/risk-management-slides/1"
    },
    // {
    //     "id": 2,
    //     "title": "Organizational Strategy and Projects",
    //     "course_img": Project_Management_img,
    //     "author": "JERRY WELSON",
    //     "published_day": 24,
    //     "published_month": "MAR",
    //     "published_year": 2024,
    //     "category": "Lecture 2",
    //     "url": "/dashboard/4/bcom-procurement/current-slides/risk-management-slides/2"
    // },
    // {
    //     "id": 3,
    //     "title": "Project Selection Portfolio Mgt",
    //     "course_img": Project_Management_img,
    //     "author": "JERRY WELSON",
    //     "published_day": 24,
    //     "published_month": "MAR",
    //     "published_year": 2024,
    //     "category": "Lecture 3",
    //     "url": "/dashboard/4/bcom-procurement/current-slides/risk-management-slides/3"
    // },
    // {
    //     "id": 4,
    //     "title": "Leadership Project Management",
    //     "course_img": Project_Management_img,
    //     "author": "JERRY WELSON",
    //     "published_day": 24,
    //     "published_month": "MAR",
    //     "published_year": 2024,
    //     "category": "Lecture 4",
    //     "url": "/dashboard/4/bcom-procurement/current-slides/risk-management-slides/4"
    // },
    // {
    //     "id": 5,
    //     "title": "Scope Mgt",
    //     "course_img": Project_Management_img,
    //     "author": "JERRY WELSON",
    //     "published_day": 24,
    //     "published_month": "MAR",
    //     "published_year": 2024,
    //     "category": "Lecture 5",
    //     "url": "/dashboard/4/bcom-procurement/current-slides/risk-management-slides/5"
    // },
    // {
    //     "id": 6,
    //     "title": "Team Building",
    //     "course_img": Project_Management_img,
    //     "author": "JERRY WELSON",
    //     "published_day": 24,
    //     "published_month": "MAR",
    //     "published_year": 2024,
    //     "category": "Lecture 6",
    //     "url": "/dashboard/4/bcom-procurement/current-slides/risk-management-slides/6"
    // },
    // {
    //     "id": 7,
    //     "title": "Risk Management",
    //     "course_img": Project_Management_img,
    //     "author": "JERRY WELSON",
    //     "published_day": 24,
    //     "published_month": "MAR",
    //     "published_year": 2024,
    //     "category": "Lecture 7",
    //     "url": "/dashboard/4/bcom-procurement/current-slides/risk-management-slides/7"
    // },
    // {
    //     "id": 8,
    //     "title": "Cost Estimation Budgeting",
    //     "course_img": Project_Management_img,
    //     "author": "JERRY WELSON",
    //     "published_day": 24,
    //     "published_month": "MAR",
    //     "published_year": 2024,
    //     "category": "Lecture 8",
    //     "url": "/dashboard/4/bcom-procurement/current-slides/risk-management-slides/8"
    // },
    // {
    //     "id": 9,
    //     "title": "Scheduling",
    //     "course_img": Project_Management_img,
    //     "author": "JERRY WELSON",
    //     "published_day": 24,
    //     "published_month": "MAR",
    //     "published_year": 2024,
    //     "category": "Lecture 9",
    //     "url": "/dashboard/4/bcom-procurement/current-slides/risk-management-slides/9"
    // },
    // {
    //     "id": 10,
    //     "title": "Project Evaluation Control",
    //     "course_img": Project_Management_img,
    //     "author": "JERRY WELSON",
    //     "published_day": 24,
    //     "published_month": "MAR",
    //     "published_year": 2023,
    //     "category": "Lecture 10",
    //     "url": "/dashboard/4/bcom-procurement/current-slides/risk-management-slides/10"
    // },   
]

export default function Pasco() {
    return(
        <>
            <section className="flex flex-col w-full">
                <div className='flex justify-between'>
                    <h1 className='text-xl text-slate-900 mb-5'> Risk Management Slides </h1>
                    <Link href='/dashboard/4/bcom-procurement/current-slides'> Back</Link>
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