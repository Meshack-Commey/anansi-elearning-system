
import UpdateCourseInfo  from '@/components/admin/courses/UpdateCourseInfo'


const getCourseById = async (id) => {
    try{
        const res = await fetch(`http://localhost:3000/api/courses/${id}`, {
            cache: "no-store",
        });

        if(!res.ok){
            throw new Errow("Failed to fetch course");
        }

        return res.json();

    } catch(error){
        console.log(error);
    }
}

export default async function UpdateCourse({ params }) {
    const { id } = params;
    const { course } = await getCourseById(id);
    const {title, subtitle, code, programme, level, semester, description } = course;

    return(
        <>
            <section className='pl-10 pr-10 pt-5 pb-5 bg-white'>

                <p className='mb-10 text-lg text-start text-slate-500 font-bold'> Update Course </p>
                {/** Edit Course Component */}
                <UpdateCourseInfo id={id} title={title} subtitle={subtitle} programme={programme} semester={semester} code={code} level={level} description={description}  />
                
            </section>
        </>
    )
}
