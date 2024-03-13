
import UpdateProgrammeInfo  from '@/components/admin/programmes/UpdateProgrammeInfo'


const getProgrammeById = async (id) => {
    try{
        const res = await fetch(`http://localhost:3000/api/programme/${id}`, {
            cache: "no-store",
        });

        if(!res.ok){
            throw new Errow("Failed to fetch programme");
        }

        return res.json();

    } catch(error){
        console.log(error);
    }
}

export default async function UpdateProgramme({ params }) {
    const { id } = params;
    const { programme } = await getProgrammeById(id);
    const {title, slogan, department, level, description } = programme;

    return(
        <>
            <section className='pl-10 pr-10 pt-5 pb-5 bg-white'>

                <p className='mb-10 text-lg text-start text-slate-500 font-bold'> Update Programme </p>
                {/** Edit Programme Component */}
                <UpdateProgrammeInfo id={id} title={title} slogan={slogan} department={department} level={level} description={description}  />
                
            </section>
        </>
    )
}
