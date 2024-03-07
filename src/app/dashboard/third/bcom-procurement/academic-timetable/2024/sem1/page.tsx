import Link from 'next/link'
import IFrameDocxViewer from '@/components/IFrameDocxViewer'


export default function Read(){

    const pdfUrl = "https://viewerjs.org/demodoc.pdf";
    
    return(
        <>
           <section className="flex flex-col w-full">
                <div className='flex justify-between'>
                    <h1 className='text-xl text-slate-900 mb-5 capitalize'> 2023/2024 Academic Year </h1>
                    <Link href='/dashboard/third/bcom-procurement/academic-timetable'> Back</Link>
                </div>
                <div>
                    <IFrameDocxViewer docxUrl={pdfUrl} />
                </div>
            </section>
        </>
    )
}

