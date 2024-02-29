import Link from 'next/link'
import DocumentViewer from '@/components/DocumentViewer'


export default function Read(){
    

    return(
        <>
           <section className="flex flex-col w-full">
                <div className='flex justify-between'>
                    <h1 className='text-xl text-slate-900 mb-5 capitalize'>Introduction to Project Management </h1>
                    <Link href='/dashboard/4/bcom-marketing/past-questions/project-management-pasco'> Back</Link>
                </div>
                <DocumentViewer />
            </section>
        </>
    )
}