
import UpdateAdminInfo  from '@/components/admin/admins/UpdateAdminInfo'


const getAdminById = async (id) => {
    try{
        const res = await fetch(`http://localhost:3000/api/admin/${id}`, {
            cache: "no-store",
        });

        if(!res.ok){
            throw new Errow("Failed to fetch user");
        }

        return res.json();

    } catch(error){
        console.log(error);
    }
}

export default async function UpdateAdmin({ params }) {
    const { id } = params;
    const { admin } = await getAdminById(id);
    const {roles, username, firstname, lastname, othername, email, contact, password } = admin;

    return(
        <>
            <section className='pl-10 pr-10 pt-5 pb-5 bg-white'>

                <p className='mb-10 text-lg text-start text-slate-500 font-bold'> Update Admin </p>
                {/** Edit Admin Component */}
                <UpdateAdminInfo id={id} roles={roles} username={username} firstname={firstname} lastname={lastname} othername={othername} email={email} contact={contact} password={password} />
                
            </section>
        </>
    )
}
