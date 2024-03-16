'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Back from "@/components/assets/images/icons/back.png"

const allSlidesFiles = [
    {
        "title": "Coordination and Subordination",
        "filePath": "https://anansi-elearning-files.onrender.com/level100/general/comskills/slides/coordinationandsubordination.pdf#toolbar=0"
    },
]

export default function Read({ params }){
    const router = useRouter();
    const fileIndex = parseInt(params.id) - 1;
    
    //const anansiUrl = "https://anansi-elearning-files.onrender.com/level100/general/infolit/pasco/TRIAL QUESTION 6.pdf#toolbar=0"
    
    return(
        <>
           <section className="flex flex-col w-full">
                <div className='flex justify-between'>
                    <h1 className='text-xl text-slate-900 mb-5 capitalize'>  { allSlidesFiles[fileIndex].title } </h1>
                    {/* <Link href='/dashboard/first/bcom-procurement/past-questions/info-lit-pasco'> Back</Link> */}
                    <button onClick={ () => router.back() } className="flex gap-2 mr-5"> <Image src={ Back } alt='back icon' className={"w-5 mt-1"} /> <p>Back</p> </button>
                </div>
                <div>

                    <iframe src={ allSlidesFiles[fileIndex].filePath } width="100%" height="600px" />

                </div>
            </section>
        </>
    )
}
