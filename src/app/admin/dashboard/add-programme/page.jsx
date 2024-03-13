import AddProgrammeComponent from '@/components/admin/programmes/AddProgrammeComponent'

export default function AddProgramme() {

    return(
        <>
            <section className='pl-10 pr-10 pt-5 pb-5 bg-white'>
                <p className='mb-3 text-start text-slate-600 text-lg'> Add Departmental Programmes </p>
                <hr />
                {/** Add Programmes Component */}
                <AddProgrammeComponent />
            </section>
        </>
    )
}