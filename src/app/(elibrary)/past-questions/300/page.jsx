import Link from "next/link";
import { courses } from '@/app/api/courses/courses'
import BackWardNavigator from '@/components/elibrary/BackWardNavigator'


export default function CourseSlides() {

    const pascoLevelID = 300;
    const courseLevel = courses.filter(item => item.level === pascoLevelID);

    if(courseLevel){
        
        return(
            <>
            <section className="p-6 pt-5 flex flex-col w-full ">
                <div className="flex justify-between items-between">
                    <h1 className='text-md text-slate-900 mb-5'> Level { pascoLevelID } Past Questions </h1>
                    <BackWardNavigator />
                </div>
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
                                            {/* <p className="capitalize text-sm mb-2"> B.Com. {value.programme} </p> */}
                                            <hr />
                                            <ul className="p-2">
                                                {
                                                    
                                                    value.pasco.map((pascos) => {
                                                        return(
                                                            <>
                                                                <Link href={pascos.url} key={pascos.id}>
                                                                    <li className="text-base mt-2"> {pascos.title} </li>
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