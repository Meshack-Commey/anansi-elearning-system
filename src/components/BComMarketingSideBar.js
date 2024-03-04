
import Link from 'next/link'
import Image from 'next/image'

//imported states
import Dashboard_Icon from '@/components/assets/images/icons/dashboard (4).png'
import PastQuestions_Icon from '@/components/assets/images/icons/book (1).png'
import Slides_Icon from '@/components/assets/images/icons/slide.png'
import Timetable_Icon from '@/components/assets/images/icons/schedule.png'

export const sidebarMenu = [
    {
        "img": Dashboard_Icon,
        "alt": "Dashboard",
        "url": "/dashboard/4/bcom-marketing",
        "value": 0
    }, 
    {
        "img": PastQuestions_Icon,
        "alt": "Past Questions",
        "url": "/dashboard/4/bcom-marketing/past-questions",
        "value": 1045
    }, 
    {
        "img": Slides_Icon,
        "alt": "Current Slides",
        "url": "/dashboard/4/bcom-marketing/current-slides",
        "value": 598
    }, 
    {
        "img": Timetable_Icon,
        "alt": "Academic Timetable",
        "url": "/dashboard/4/bcom-marketing/academic-timetable",
        "value": 14
    }
]

{/** Full Side Navigation */}
export const FullSideNav = () => {
    
    return(
        <>
            <section className='w-full h-full bg-inherit  p-5 '>
                <div className='fixed mt-11'>
                    {
                        sidebarMenu.map((value) => {
                            return(
                                <>
                                    <p key={value.alt} className='menu'> 
                                        <Link href={value.url} className="flex"> 
                                            <figure className='w-5 mb-8 mt-2 hover:cursor-pointer  '>
                                                <Image 
                                                    src={value.img} 
                                                    alt={value.alt} 
                                                    className='w-full'
                                                />  
                                            </figure>
                                            <p className='text-slate-900 text-sm ml-3 mt-2'> {value.alt} </p>
                                        </Link> 
                                    </p>
                                    <br />
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
                <div className='fixed mt-10'>
                    {
                        sidebarMenu.map((icons) => {
                            return(
                            <>
                                <div className="sidebar-hover">
                                    <Link href={icons.url}>
                                        <figure key={icons.alt} className='menu w-6 mb-8 mt-2 hover:cursor-pointer  '>
                                            <Image 
                                                src={icons.img} 
                                                alt={icons.alt} 
                                                className='w-full'
                                            />  
                                        </figure>
                                    </Link>
                                    <Link href={icons.url}>
                                        <p className="side-menu"> { icons.alt } </p>
                                    </Link>
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


