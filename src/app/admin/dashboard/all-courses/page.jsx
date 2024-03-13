import AllCoursesComponent from '@/components/admin/courses/AllCoursesComponent'

export default function AllCourses() {

    return(
        <>
            <section className='pl-10 pr-10 pt-5 pb-5 bg-white'>
                <p className='mb-3 text-start text-slate-600 text-lg'> All Departmental Courses </p>
                <hr />
                {/** All Courses Component */}
                <AllCoursesComponent />
            </section>
        </>
    )
}