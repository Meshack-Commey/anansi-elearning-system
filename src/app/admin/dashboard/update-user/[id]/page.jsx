
import UpdateUserInfo  from '@/components/admin/users/UpdateUserInfo'


const getUserById = async (id) => {
    try{
        const res = await fetch(`http://localhost:3000/api/users/${id}`, {
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

export default async function UpdateUser({ params }) {
    const { id } = params;
    const { user } = await getUserById(id);
    const { roles, username, firstname, lastname, othername, programme, level, email, contact, password } = user;

    return(
        <>
            <section className='pl-10 pr-10 pt-5 pb-5 bg-white'>

                <p className='mb-10 text-lg text-start text-slate-500 font-bold'> Update Student </p>
                {/** Edit User Component */}
                <UpdateUserInfo id={id} roles={roles} username={username} firstname={firstname} lastname={lastname} othername={othername} programme={programme} level={level} email={email} contact={contact} password={password} />
                
            </section>
        </>
    )
}
