
import UpdateSlideInfo  from '@/components/admin/questions/UpdateSlideInfo'


const getSlideById = async (id) => {
    try{
        const res = await fetch(`http://localhost:3000/api/slides/${id}`, {
            cache: "no-store",
        });

        if(!res.ok){
            throw new Errow("Failed to fetch slide");
        }

        return res.json();

    } catch(error){
        console.log(error);
    }
}

export default async function UpdateSlide({ params }) {
    const { id } = params;
    const { sliDe } = await getSlideById(id);
    const { name, course, filepath, author } = sliDe;

    return(
        <>
            <section className='pl-10 pr-10 pt-5 pb-5 bg-white'>

                <p className='mb-10 text-lg text-start text-slate-500 font-bold'> Update Slide </p>
                {/** Edit Slide Component */}
                <UpdateSlideInfo id={id} name={name} course={course} filepath={filepath} author={author} />
                
            </section>
        </>
    )
}
