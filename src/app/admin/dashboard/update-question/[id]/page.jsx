
import UpdateQuestionInfo  from '@/components/admin/questions/UpdateQuestionInfo'


const getQuestionById = async (id) => {
    try{
        const res = await fetch(`http://localhost:3000/api/questions/${id}`, {
            cache: "no-store",
        });

        if(!res.ok){
            throw new Errow("Failed to fetch question");
        }

        return res.json();

    } catch(error){
        console.log(error);
    }
}

export default async function UpdateQuestion({ params }) {
    const { id } = params;
    const { courSe } = await getQuestionById(id);
    const { name, course, filepath, author } = courSe;

    return(
        <>
            <section className='pl-10 pr-10 pt-5 pb-5 bg-white'>

                <p className='mb-10 text-lg text-start text-slate-500 font-bold'> Update Past Question </p>
                {/** Edit Question Component */}
                <UpdateQuestionInfo id={id} name={name} course={course} filepath={filepath} author={author} />
                
            </section>
        </>
    )
}
