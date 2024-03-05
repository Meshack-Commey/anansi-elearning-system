import Link from 'next/link'
// import IFrameDocxViewer from '@/components/IFrameDocxViewer'
// import PDFViewerer from '@/components/PDFViewerer'
// import PDFJSViewer from '@/components/PDFJSViewer'
// import DocxViewer from '@/components/DocxViewer'

export default function Read(){

    // const pdfUrl = "https://viewerjs.org/demodoc.pdf";
    // const docUrl = "https://drive.google.com/file/d/1IovAD88eM8Kve_catO4xix1jq8L8kz34/view?usp=drive_link"
    // const newUrl = "https://drive.google.com/file/d/18OlPl8BvttPbtvi97e53_Dlqq9rGRu53/view?usp=sharing"
    const anansiUrl = "https://anansi-elearning-files.onrender.com/project-management.pdf"

    return(
        <>
           <section className="flex flex-col w-full">
                <div className='flex justify-between'>
                    <h1 className='text-xl text-slate-900 mb-5 capitalize'>Project Management Achieving Competitive Advantage - 4th edition </h1>
                    <Link href='/dashboard/4/bcom-marketing/past-questions/project-management-pasco'> Back</Link>
                </div>
                <div>
                    <iframe src={ anansiUrl } width="100%" height="600px" />
                    {/* <IFrameDocxViewer docxUrl={newpdfUrl} />
                    <br /> <hr /> <br />
                    <IFrameDocxViewer docxUrl={newpdfUrl} />
                    <br /> <hr /> <br />
                    <IFrameDocxViewer docxUrl={pdfUrl} /> */}
                    {/* <PDFViewerer pdfUrl={docUrl} />
                    <br /> <hr /> <br /> */}
                    {/* <PDFJSViewer pdfUrl={pdfUrl} />
                    <br /> <hr /> <br /> */}
                    {/* <DocxViewer docxUrl={docUrl} />
                    <br /> <hr /> <br /> */}
                    
                </div>
            </section>
        </>
    )
}

