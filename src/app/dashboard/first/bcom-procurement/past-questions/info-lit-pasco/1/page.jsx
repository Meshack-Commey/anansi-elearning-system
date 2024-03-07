import Link from 'next/link'
// import IFrameDocxViewer from '@/components/IFrameDocxViewer'


export default function Read(){

    // const pdfUrl = "https://viewerjs.org/demodoc.pdf";
    const anansiUrl = "https://anansi-elearning-files.onrender.com/project-management.pdf"
    
    return(
        <>
           <section className="flex flex-col w-full">
                <div className='flex justify-between'>
                    <h1 className='text-xl text-slate-900 mb-5 capitalize'> Information Literacy </h1>
                    <Link href='/dashboard/first/bcom-procurement/past-questions/info-lit-pasco'> Back</Link>
                </div>
                <div>
                    {/* <IFrameDocxViewer docxUrl={pdfUrl} /> */}
                    <iframe src={ anansiUrl } width="100%" height="600px" />
                </div>
            </section>
        </>
    )
}
