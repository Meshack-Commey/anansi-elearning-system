import Link from "next/link";
import { files } from './data'


export default function Timetable() {
    return(
        <>
            <section className="flex flex-col w-full ">
                <h1 className='text-xl text-slate-900 mb-5'> Academic Timetable </h1>
                <section className="pasco-container"> {/** PASCO */}
                    {/** Cards */}
                    <div className="pasco-row">
                        {/** Card */}
                        <div className="pasco-items">
                         {
                            files.map((file) => {
                                return(
                                <>
                                    <Link href={file.url}>
                                        <div className='w-auto border'>
                                            
                                            <div className="flex">
                                                <div className='bg-red-500 pl-6 pr-6 flex flex-col justify-center items-center font-bold'>
                                                    <p className="text-white text-md"> {file.published_day} </p>
                                                    <p className="text-slate-900 text-lg"> {file.published_month} </p>
                                                    <p className="text-white text-md"> {file.published_year} </p>
                                                </div>
                                                <div className='flex flex-col gap-2 p-5 justify-start items-start bg-white '>
                                                    <p className="text-slate-900 text-lg"> {file.title} </p>
                                                    <p className="text-slate-900 text-base"> {file.category} </p>
                                                    <div className='flex gap-6 flex-wrap text-sm uppercase'>
                                                        <span>By {file.author} </span>
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
                </section> {/** Endblock of Academic Timetable */}
                
            </section>
        </>
    )
}