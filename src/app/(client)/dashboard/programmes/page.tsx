import Image from "next/image";
import Investment_Management_img from '@/components/assets/images/formulas_33006.jpg'
import Enterpreneurship_img from '@/components/assets/images/cob_ad.jpg'
import Project_Management_img from '@/components/assets/images/Business_management_courses.jpg'
import Link from "next/link";


export const programmes = [
    {
        "id": 1,
        "title": "Accountancy",
        "course_img": Investment_Management_img,
        "category": "BS",
        "url": ""
    },
    {
        "id": 2,
        "title": "Business Administration",
        "course_img": Project_Management_img,
        "category": "BS",
        "url": ""
    },
    {
        "id": 3,
        "title": "Accounting Information Systems",
        "course_img": Enterpreneurship_img,
        "category": "BS",
        "url": ""
    },
]

export default function Programmes() {
    return(
        <>
            <section className="flex flex-col w-full">
                <h1 className='text-xl text-slate-900 mb-5'> School of Business Programmes </h1>
                <section className="w-full "> {/** PASCO */}
                    {/** Cards */}
                    <div className="w-full flex flex-wrap gap-10 justify-start items-start m-0 ">
                        {/** Card */}
                         {
                            programmes.map((program) => {
                                return(
                                <>
                                    <Link href={program.url}>
                                        <div className='w-2/6 bg-white '>
                                            <figure className='w-full overflow-hidden transition ease-out duration-100 hover:cursor-pointer'>
                                                <Image 
                                                    src={program.course_img} 
                                                    alt={program.title} 
                                                    className='w-full'
                                                />
                                            </figure>
                                            <div className="flex">
                                                <div className='bg-red-500 pl-6 pr-6 flex flex-col justify-center items-center font-bold'>
                                                    <p className="text-white text-md"> {program.category} </p>
                                                </div>
                                                <div className='flex flex-col gap-2 p-5 justify-start items-start '>
                                                    <div className='flex gap-6 flex-wrap text-sm uppercase'>
                                                        <p className="text-slate-900 text-lg"> {program.title} </p>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </>
                                )
                            })
                         }
                        {/** Endblock of Card */}
                    </div> {/** Endblock of Cards */}
                </section> {/** Endblock of Pasco */}
                <section className="w-full ">
                    <div className="flex flex-col text-slate-900 m-10"> {/** Categories */}
                        <h1 className='font-bold text-xl'>Categories</h1>
                        <ul className='p-5 mt-2 text-md bg-gray-200'>
                            {
                                programmes.map((category) => {
                                    return(
                                        <>
                                            <Link key={category.id} href={category.url}>
                                                <li> {category.category} </li>
                                            </Link>
                                        </>
                                    )
                                })
                            }
                        </ul>
                    </div> {/** Endblock of Category */}
                    <div className="flex flex-col text-slate-900 m-10"> {/** More on */}
                        <h1 className='font-bold text-xl'> More on </h1>
                        <div className='flex flex-col'>
                            {
                                programmes.map((more) => {
                                    return(
                                        <>
                                            <div className='flex mt-2 mb-2 bg-gray-200 text-slate-900'>
                                                <figure className='w-1/12 m-2 overflow-hidden transition ease-out duration-100 hover:cursor-pointer'>
                                                    <Image 
                                                        src={more.course_img} 
                                                        alt={more.title} 
                                                        className='w-full'
                                                    />
                                                </figure>
                                                <p className='p-8 text-center text-xl'> {more.title} </p>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}