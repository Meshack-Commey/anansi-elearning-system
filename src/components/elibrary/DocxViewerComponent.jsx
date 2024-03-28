import BackWardNavigator from '@/components/elibrary/BackWardNavigator'

export default function Read({ fileTitle, fileUrl }){

    // const fileUrl = "https://anansi-elearning-files.onrender.com/level100/timetable/Academic Timetable.pdf#toolbar=0"
    
    return(
        <>
           <section className="p-5 flex flex-col w-full">
                <div className='flex justify-between'>
                    <h1 className='text-xl text-slate-900 mb-5 capitalize'> { fileTitle } </h1>
                    <BackWardNavigator />
                </div>
                <div>
                    <embed src={ fileUrl } className={'w-full h-screen'} />
                </div>
            </section>
        </>
    )
}

