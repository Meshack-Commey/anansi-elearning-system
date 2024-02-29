import Link from 'next/link'
import DocumentViewer from '@/components/DocumentViewer'


export default function Read(){
    

    return(
        <>
           <section className="flex flex-col w-full">
                <div className='flex justify-between'>
                    <h1 className='text-xl text-slate-900 mb-5 capitalize'>Enterpreneurship </h1>
                    <Link href='/dashboard/4/bcom-marketing/past-questions/enterpreneurship-pasco'> Back</Link>
                </div>
                <DocumentViewer />
            </section>
        </>
    )
}