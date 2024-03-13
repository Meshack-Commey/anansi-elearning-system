import AddTimetableComponent from '@/components/admin/timetables/AddTimetableComponent'

export default function AddTimetable() {

    return(
        <>
            <section className='pl-10 pr-10 pt-5 pb-5 bg-white'>
                <p className='mb-3 text-start text-slate-600 text-lg'> Add Departmental Timetable </p>
                <hr />
                {/** All Timetable Component */}
                <AddTimetableComponent />
            </section>
        </>
    )
}