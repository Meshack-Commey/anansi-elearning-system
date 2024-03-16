'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Back from "@/components/assets/images/icons/back.png"

const allSlidesFiles = [
    {
        "title": "Information Literacy ",
        "filePath": "https://anansi-elearning-files.onrender.com/level100/general/infolit/slides/Session 1 information literacy -Compatibility Mode-.pdf#toolbar=0"
    },
    {
        "title": "Libraries ",
        "filePath": "https://anansi-elearning-files.onrender.com/level100/general/infolit/slides/Session 2 - Libraries -Compatibility Mode-.pdf#toolbar=0"
    },
    {
        "title": "Information Sources ",
        "filePath": "https://anansi-elearning-files.onrender.com/level100/general/infolit/slides/Session 3 information sources -Compatibility Mode-.pdf#toolbar=0"
    },
    {
        "title": "ORGANISATION OF KNOWLEDGE ",
        "filePath": "https://anansi-elearning-files.onrender.com/level100/general/infolit/slides/Session 4 - ORGANISATION OF KNOWLEDGE -Compatibility Mode-.pdf#toolbar=0"
    },
    {
        "title": "ETHICAL ISSUES ",
        "filePath": "https://anansi-elearning-files.onrender.com/level100/general/infolit/slides/Session 5 - ETHICAL ISSUES -Compatibility Mode-.pdf#toolbar=0"
    },
    {
        "title": "REFERENCING",
        "filePath": "https://anansi-elearning-files.onrender.com/level100/general/infolit/slides/Session 6 - REFERENCING -Compatibility Mode-.pdf#toolbar=0"
    },
    {
        "title": "Internet ",
        "filePath": "https://anansi-elearning-files.onrender.com/level100/general/infolit/slides/Session 7-internet -Compatibility Mode-.pdf#toolbar=0"
    },
    {
        "title": "Internet Search Tools",
        "filePath": "https://anansi-elearning-files.onrender.com/level100/general/infolit/slides/Session 8 - internet search tools.pdf#toolbar=0"
    },
    {
        "title": "Search Strategies",
        "filePath": "https://anansi-elearning-files.onrender.com/level100/general/infolit/slides/Session 9 - Search Strategies.pdf#toolbar=0"
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

