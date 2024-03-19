import Link from 'next/link'
import DocxViewerComponent from '@/components/elibrary/DocxViewerComponent'
import { courses } from '../../../courses'



export default function ReadFile({ params }:{ params: {readSlide: string}}){

    const fileIndex = parseInt(params.readSlide) - 1;

    const getSlideFiles = courses.map((value) => value.slides)
    const files = getSlideFiles[0];
    const readMoreFiles = files.filter((file) => file.id !== parseInt(params.readSlide));


    if(files.length !== 0 && readMoreFiles.length === 0 ){
        return(
            <>
        
                <DocxViewerComponent fileTitle={ files[fileIndex].title } fileUrl={ files[fileIndex].filePath } />
    
            </>
        )

    } else {

        return(
            <>
                <DocxViewerComponent fileTitle={ files[fileIndex].title } fileUrl={ files[fileIndex].filePath } />

                <section className="pasco-container p-5">
                            <div className="pasco-row">
                                <div className="more-on"> {/** More on */}
                                    <h1 className='font-bold text-xl mb-4'> More on { files[fileIndex].title } </h1>
                                    <div className='flex flex-col flex-wrap'>
                                        {
                                            readMoreFiles.map((moreon) => {
                                                return(
                                                    <>
                                                        <Link href={moreon.url}>
                                                            <div className='w-auto border'>
                                                                
                                                                <div className="flex">
                                                                    <div className='bg-red-500 pl-6 pr-6 flex flex-col justify-center items-center font-bold'>
                                                                        <p className="text-white text-md"> {moreon.published_day} </p>
                                                                        <p className="text-slate-900 text-lg"> {moreon.published_month} </p>
                                                                        <p className="text-white text-md"> {moreon.published_year} </p>
                                                                    </div>
                                                                    <div className='flex flex-col gap-2 p-5 justify-start items-start bg-white '>
                                                                        <p className="text-slate-900 text-lg"> {moreon.title} </p>
                                                                        <p className="text-slate-900 text-base"> {moreon.category} </p>
                                                                        <div className='flex gap-6 flex-wrap text-sm uppercase'>
                                                                            <span>By {moreon.author} </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </section>
            </>
        )
    }

    
}

