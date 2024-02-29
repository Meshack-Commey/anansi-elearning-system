import Link from 'next/link'

export default function Read(){
    return(
        <>
           <section className="flex flex-col w-full">
                <div className='flex justify-between'>
                    <h1 className='text-xl text-slate-900 mb-5'> pasco title </h1>
                    <Link href='/dashboard/4/bcom-marketing/past-questions/pm-pasco'> Back</Link>
                </div>
                <div>
                    pasco 1
                </div>
            </section>
        </>
    )
}