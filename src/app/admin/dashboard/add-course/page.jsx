import AddCourseComponent from '@/components/admin/courses/AddCourseComponent'

export default function AddCourse() {

    return(
        <>
            <section className='pl-10 pr-10 pt-5 pb-5 bg-white'>
                <p className='mb-3 text-start text-slate-600 text-lg'> Add Departmental Courses </p>
                <hr />
                {/** Add Courses Component */}
                <AddCourseComponent />
            </section>
        </>
    )
}