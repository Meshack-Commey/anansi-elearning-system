import AllProgrammesComponent from '@/components/admin/programmes/AllProgrammesComponent'

export default function AllProgrammes() {

    return(
        <>
            <section className='pl-10 pr-10 pt-5 pb-5 bg-white'>
                <p className='mb-3 text-start text-slate-600 text-lg'> All Departmental Programmes </p>
                <hr />
                {/** All Programmes Component */}
                <AllProgrammesComponent />
            </section>
        </>
    )
}