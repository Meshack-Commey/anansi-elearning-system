import Link from 'next/link'
import IFrameDocxViewer from '@/components/IFrameDocxViewer'


export default function Read(){

    const pdfUrl = "https://viewerjs.org/demodoc.pdf";
    
    return(
        <>
           <section className="flex flex-col w-full">
                <div className='flex justify-between'>
                    <h1 className='text-xl text-slate-900 mb-5 capitalize'> Introduction to Self Management </h1>
                    <Link href='/dashboard/4/bcom-marketing/current-slides/self-management-slides'> Back </Link>
                </div>
                <div>
                    <IFrameDocxViewer docxUrl={pdfUrl} />
                </div>
            </section>
        </>
    )
}

