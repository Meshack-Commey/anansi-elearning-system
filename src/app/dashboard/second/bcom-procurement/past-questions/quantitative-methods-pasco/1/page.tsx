import Link from 'next/link'
// import IFrameDocxViewer from '@/components/IFrameDocxViewer'


export default function Read(){

    // const pdfUrl = "https://viewerjs.org/demodoc.pdf";
    const anansiUrl = "https://anansi-elearning-files.onrender.com/project-management.pdf"
    
    return(
        <>
           <section className="flex flex-col w-full">
                <div className='flex justify-between'>
                    <h1 className='text-xl text-slate-900 mb-5 capitalize'> quantitative methods </h1>
                    <Link href='/dashboard/second/bcom-procurement/past-questions/quantitative-methods-pasco'> Back</Link>
                </div>
                <div>
                    {/* <IFrameDocxViewer docxUrl={pdfUrl} /> */}
                    <iframe src={ anansiUrl } width="100%" height="600px" />
                </div>
            </section>
        </>
    )
}

