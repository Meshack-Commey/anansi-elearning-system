import Link from 'next/link'
import Image from 'next/image'

//imported states
import Dashboard_Icon from '@/components/assets/images/icons/dashboard (4).png'
import Administrator_Icon from '@/components/assets/images/icons/profile.png'
import User_Icon from '@/components/assets/images/icons/user (3).png'
import Programme_Icon from '@/components/assets/images/icons/calendar.png'
import Course_Icon from '@/components/assets/images/icons/book.png'
import PastQuestions_Icon from '@/components/assets/images/icons/book (1).png'
import Slides_Icon from '@/components/assets/images/icons/slide.png'
import Timetable_Icon from '@/components/assets/images/icons/schedule.png'

export const sidebarMenu = [
    {
        "img": Dashboard_Icon,
        "alt": "Dashboard",
        "value": 0,
        "submenu": [
            {
                "sublist": "Dashboard",
                "uri": "/admin/dashboard",
            },
        ],
    },
    {
        "img": Administrator_Icon,
        "alt": "Administrators",
        "value": 5,
        "submenu": [
            {
                "sublist": "All Administrators",
                "uri": "/admin/dashboard/all-admins",
            },
            {
                "sublist": "Add Administrator",
                "uri": "/admin/dashboard/add-admin",
            },
        ],
    }, 
    {
        "img": User_Icon,
        "alt": "Users",
        "value": 5,
        "submenu": [
            {
                "sublist": "All Users",
                "uri": "/admin/dashboard/all-users",
            },
            {
                "sublist": "Add User",
                "uri": "/admin/dashboard/add-user",
            },
        ],
    }, 
    {
        "img": Programme_Icon,
        "alt": "Programmes",
        "value": 5,
        "submenu": [
            {
                "sublist": "All Programmes",
                "uri": "/admin/dashboard/all-programmes",
            },
            {
                "sublist": "Add Programmes",
                "uri": "/admin/dashboard/add-programme",
            },
        ],
    }, 
    {
        "img": Course_Icon,
        "alt": "Courses",
        "value": 5,
        "submenu": [
            {
                "sublist": "All Courses",
                "uri": "/admin/dashboard/all-courses",
            },
            {
                "sublist": "Add Courses",
                "uri": "/admin/dashboard/add-course",
            },
        ],
    },  
    // {
    //     "img": Course_Icon,
    //     "alt": "Files",
    //     "value": 6,
    //     "submenu": [
    //         {
    //             "sublist": "All Files",
    //             "uri": "/admin/dashboard/all-files",
    //         },
    //         {
    //             "sublist": "Add Files",
    //             "uri": "/admin/dashboard/add-file",
    //         },
    //         {
    //             "sublist": "Add category",
    //             "uri": "/admin/dashboard/file-category",
    //         },
    //     ],
    // },  
    {
        "img": PastQuestions_Icon,
        "alt": "Past Questions",
        "value": 1045,
        "submenu": [
            {
                "sublist": "All Past Questions",
                "uri": "/admin/dashboard/all-questions",
            },
            {
                "sublist": "Add Past Questions",
                "uri": "/admin/dashboard/add-question",
            },
        ],
    }, 
    {
        "img": Slides_Icon,
        "alt": "Current Slides",
        "value": 598,
        "submenu": [
            {
                "sublist": "All Slides",
                "uri": "/admin/dashboard/all-slides",
            },
            {
                "sublist": "Add Slides",
                "uri": "/admin/dashboard/add-slide",
            },
        ],
    }, 
    {
        "img": Timetable_Icon,
        "alt": "Academic Timetable",
        "value": 14,
        "submenu": [
            {
                "sublist": "All Timetables",
                "uri": "/admin/dashboard/all-timetables",
            },
            {
                "sublist": "Add Timetable",
                "uri": "/admin/dashboard/add-timetable",
            },
        ],
    }   
]

const DashboardAccordion = (props) => {
    return(
        <>
            
            <ul className="submenu text-slate-900 p-2 mb-2">
                {
                    props.list.map((value)=>{
                        return(
                            <>
                                <Link href={value.uri}>
                                    <li className="ml-6 p-2 text-sm">{value.sublist}</li>
                                </Link>
                            </>
                        )
                    })
                }
            </ul>
        </>
    )
}

{/** Full Side Navigation */}
export const FullSideNav = () => {
    
    return(
        <>
            <section className='w-full h-full bg-inherit  p-5 '>
                <div className='fixed mt-6'>
                    {
                        sidebarMenu.map((value) => {
                            return(
                                <>
                                    <p key={value.alt} className='menu mt-2 mb-4'> 
                                        <div className="flex"> 
                                            <figure className='w-6 hover:cursor-pointer  '>
                                                <Image 
                                                    src={value.img} 
                                                    alt={value.alt} 
                                                    className='w-full'
                                                />  
                                            </figure>
                                            <p className='text-slate-900 text-sm ml-3 '> {value.alt} </p>
                                        </div> 
                                        <DashboardAccordion list={value.submenu} />
                                    </p>
                                    
                                </>
                            )
                        })
                    } 
                </div>
            </section>
        </>
    )
}

export const ShortSideNav = () => {

    return(
        <>
            <section className='w-full bg-blue-900  p-3 flex flex-col gap-6 relative'>
                <div className='fixed mt-8'>
                    {
                        sidebarMenu.map((icons) => {
                            return(
                            <>
                                <div className="sidebar-hover">
                                    <div>
                                        <figure key={icons.alt} className='menu w-6 mb-4 mt-2 hover:cursor-pointer  '>
                                            <Image 
                                                src={icons.img} 
                                                alt={icons.alt} 
                                                className='w-full'
                                            />  
                                        </figure>
                                    </div>
                                    <div className="side-menu">
                                        <DashboardAccordion list={icons.submenu} />
                                    </div>
                                </div>
                            </>
                            )
                        })
                    }
                </div>
            </section>  
        </>
    )
}
