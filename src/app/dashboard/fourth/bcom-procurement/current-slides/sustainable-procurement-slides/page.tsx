
import Link from "next/link";

//importing slides


const courses = [
    {
        "id": 1,
        "title": "Introduction to Sustainable Procurement",
        "author": "JERRY WELSON",
        "published_day": 24,
        "published_month": "MAR",
        "published_year": 2024,
        "category": "Lecture 1",
        "url": "/dashboard/4/bcom-procurement/current-slides/sustainable-procurement-slides/1"
    },
    
]

export default function Pasco() {
    return(
        <>
            <section className="flex flex-col w-full">
                <div className='flex justify-between'>
                    <h1 className='text-xl text-slate-900 mb-5'> Sustainable Procurement Slides </h1>
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