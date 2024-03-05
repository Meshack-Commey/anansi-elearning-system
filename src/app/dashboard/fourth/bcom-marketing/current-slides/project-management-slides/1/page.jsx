import Link from 'next/link'
// import IFrameDocxViewer from '@/components/IFrameDocxViewer'


export default function Read(){

    const anansiUrl = "https://anansi-elearning-files.onrender.com/project-management.pdf"
    //const pdfUrl = "https://viewerjs.org/demodoc.pdf";
    

    return(
        <>
           <section className="flex flex-col w-full">
                <div className='flex justify-between'>
                    <h1 className='text-xl text-slate-900 mb-5 capitalize'> Introduction to Project Management </h1>
                    <Link href='/dashboard/4/bcom-marketing/current-slides/project-management-slides'> Back</Link>
                </div>
                <div>
                    {/* <IFrameDocxViewer docxUrl={pdfUrl} /> */}
                    <iframe src={ anansiUrl } width="100%" height="600px" />
                </div>
            </section>
        </>
    )
}

