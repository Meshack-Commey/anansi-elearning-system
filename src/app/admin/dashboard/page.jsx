// importing dependencies
import Image from 'next/image'
//import Link from 'next/link'


//imported states
import Notification_Icon from '@/components/assets/images/icons/bell.png'
import Courses_Icon from '@/components/assets/images/icons/book.png'
import Programme_Icon from '@/components/assets/images/icons/calendar.png'
import PastQuestions_Icon from '@/components/assets/images/icons/book (1).png'
import Slides_Icon from '@/components/assets/images/icons/slide.png'
import Timetable_Icon from '@/components/assets/images/icons/schedule.png'
import Administrator_Icon from '@/components/assets/images/icons/profile.png'
import User_Icon from '@/components/assets/images/icons/user (3).png'

const boards = [
    {
        "img": Notification_Icon,
        "alt": "Notifications",
        "value": 0
    },
    {
        "img": Administrator_Icon,
        "alt": "Administrators",
        "value": 0
    },
    {
        "img": User_Icon,
        "alt": "Users",
        "value": 0
    },
    {
        "img": Programme_Icon,
        "alt": "Programmes",
        "value": 5
    }, 
    {
        "img": Courses_Icon,
        "alt": "Courses",
        "value": 5
    }, 
    {
        "img": PastQuestions_Icon,
        "alt": "Past Questions",
        "value": 309
    }, 
    {
        "img": Slides_Icon,
        "alt": "Current Slides",
        "value": 398
    }, 
    {
        "img": Timetable_Icon,
        "alt": "Academic Timetable",
        "value": 2
    }
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
                                <div className='flex flex-col gap-2 justify-end items-end text-end font-bold'>
                                    <p className='text-slate-500'> {dashboard.value} </p>
                                    <p className='text-slate-600'> {dashboard.alt} </p>
                                </div>
                            </div>
                        </>
                    )
                })
            }
        </section>
        {/* <section className=' pr-10 pt-5 pb-5 bg-inherit flex flex-wrap gap-2 justify-between items-between'>
            <div className='flex gap-2'>
                <div className='w-62 bg-white p-5 flex flex-col gap-2 justify-center items-center border border-inherit rounded-md text-slate-600'>
                    <p className='text-start font-bold text-md'> { users[1].programme } </p>
                    <p className='font-bold text-base'> Level {users[1].level } </p>
                </div>
                <div className='w-62 bg-white p-5 flex flex-col gap-2 justify-center items-center border border-inherit rounded-md text-slate-600'>
                    <p className='text-start font-bold text-md'> # of Registered Courses </p>
                    <p className='font-bold text-xl'> {users[1].courses.length } </p>
                </div>
            </div>
        </section>
        <section className=' pr-10 pt-5 pb-5 bg-inherit flex flex-wrap gap-2 justify-between items-between'>
            <div className='w-full bg-white p-5 flex flex-col gap-2 justify-center border border-inherit rounded-md text-slate-600 text-md'>
                <p className='text-start font-bold'> Courses </p>
                <hr />
                <ul className='text-base'>
                    {
                        users[1].courses.map((courses) => {
                            return(
                                <>
                                    <Link key={courses.id} href={courses.slidesURL}>
                                        <li className='text-base'> {courses.title} </li>
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
                        <option>10</option>
                        <option>15</option>
                        <option>20</option>
                        <option>25</option>
                    </select>
                </div>
            </div>
        </section> */}
    </>
    )
}