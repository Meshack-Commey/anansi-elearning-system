import AddFileComponent from '@/components/admin/files/AddFileComponent'

export default function AddFile() {

    return(
        <>
            <section className='pl-10 pr-10 pt-5 pb-5 bg-white'>
                <p className='mb-3 text-start text-slate-600 text-lg'> Add File </p>
                <hr />
                {/** Add File Component */}
                <AddFileComponent />
            </section>
        </>
    )
}