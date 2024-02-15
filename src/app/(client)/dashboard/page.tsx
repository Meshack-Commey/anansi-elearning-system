import Image from 'next/image'
import Link from 'next/link'
import { sidebarMenu } from '@/components/SideBar'

const Lists_of_courses = [
    {
        "id": 1,
        "name": "Enterpreneurship",
        "url": "/dashboard",
    },
    {
        "id": 2,
        "name": "Investment Management",
        "url": "/dashboard",
    },
    {
        "id": 3,
        "name": "Project Management",
        "url": "/dashboard",
    }
]

export default function Dashboards() {
    return(
    <> 
        <section className=' pr-10 pt-5 pb-5 bg-inherit flex flex-wrap gap-2 justify-between items-between'>
            {/** Dashboard Cards */}
            {
                sidebarMenu.map((dashboard) => {
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