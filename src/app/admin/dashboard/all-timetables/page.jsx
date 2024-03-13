import AllTimetablesComponent from '@/components/admin/timetables/AllTimetablesComponent'

export default function AllTimetables() {

    return(
        <>
            <section className='pl-10 pr-10 pt-5 pb-5 bg-white'>
                <p className='mb-3 text-start text-slate-600 text-lg'> All Departmental Timetables </p>
                <hr />
                {/** All Timetables Component */}
                <AllTimetablesComponent />
            </section>
        </>
    )
}