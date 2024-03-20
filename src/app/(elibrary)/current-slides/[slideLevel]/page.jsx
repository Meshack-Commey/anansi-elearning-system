import Link from "next/link";
import { courses } from '@/app/api/courses/courses'


export default function CourseSlides({ params }) {

    const slideLevelID = parseInt(params.slideLevel);
    const courseLevel = courses.filter(item => item.level === slideLevelID);

    if(courseLevel){
        
        return(
            <>
            <section className="p-6 pt-5 flex flex-col w-full ">
                <h1 className='text-xl text-slate-900 mb-5'> Level { params.slideLevel } Slides </h1>
                <section className="pasco-container"> {/** PASCO */}
                    {/** Cards */}
                    <div className="pasco-row">
                        {/** Card */}
                        <div className="pasco-items">
                            {
                                courseLevel.map((value) => {
                                    return(
                                        <div key={value.id} className="bg-white p-5 text-black">
                                            <p className="capitalize text-xl font-bold"> {value.title} </p>
                                            <p className="capitalize text-sm mb-2"> B.Com. {value.programme} </p>
                                            <hr />
                                            <ul className="p-2">
                                                {
                                                    
                                                    value.slides.map((slide) => {
                                                        return(
                                                            <>
                                                                <Link href={slide.url} key={slide.id}>
                                                                    <li className="text-base mt-2"> {slide.title} </li>
                                                                </Link>
                                                            </>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
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
}