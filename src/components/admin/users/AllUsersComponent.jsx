
import Link from 'next/link'
import DeleteButton from '@/components/admin/users/DeleteButton'

const getUsers = async () => {
    try{
        const res = await fetch("http://localhost:3000/api/users", {
            cache: "no-store"
        });

        if(!res.ok){
            throw new Error("Failed to fetch users");
        }

        return res.json();

    } catch(error){
        console.log("Error loading users", error);
    }
}

export default async function AllUsersComponent() {

    const { users } = await getUsers();

    return(
        <>
            <div className='flex justify-between items-bteween mb-2 text-md text-slate-600'>
                <div className='flex gap-2'> 
                    Show   
                    <select>
                        <optgroup>
                            <option value={10}>10</option>
                            <option value={25}>25</option>
                            <option value={50}>50</option>
                            <option value={100}>100</option>
                        </optgroup>
                    </select> 
                    entries 
                </div>
                <div className=''> Search: <input type='text' /> </div>
            </div>

            <table className='w-full mb-20 border border-slate-200 text-md text-slate-600' cellSpacing={0}>
                <thead>
                    <tr className='border border-slate-200 text-md text-slate-600'>
                        <th className='border border-slate-200'>student ID</th>
                        <th className='border border-slate-200'>First Name</th>
                        <th className='border border-slate-200'>Last Name</th>
                        <th className='border border-slate-200'>Programme</th>
                        <th className='border border-slate-200'>Level</th>
                        <th className='border border-slate-200'>Email</th>
                        <th className='border border-slate-200'>Contact</th>
                        <th className='border border-slate-200'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user) => {
                            return( 
                            <>
                                <tr key={user._id} className='border border-slate-200'>
                                    <td className='border border-slate-200 p-2'>{ user.username }</td>
                                    <td className='border border-slate-200 p-2'>{ user.firstname }</td>
                                    <td className='border border-slate-200 p-2'>{ user.lastname }</td>
                                    <td className='border border-slate-200 p-2'>{ user.programme }</td>
                                    <td className='border border-slate-200 p-2'>{ user.level }</td>
                                    <td className='border border-slate-200 p-2'>{ user.email }</td>
                                    <td className='border border-slate-200 p-2'>{ user.contact }</td>
                                    <td className='flex gap-2 p-2'>
                                        <Link href={`/admin/dashboard/update-user/${user._id}`}> 
                                            <span className='text-white text-xs bg-blue-500 border border-blue rounded-md p-1 mb-5'>Update</span>
                                        </Link> <br />
                                        <DeleteButton id={user._id} />
                                    </td>
                                </tr>
                            </>)
                        })
                    } 
                </tbody>
            </table>

            <div className='flex justify-between items-between text-slate-600'>
                <p>Showing 1 to 1 of 1 entries</p>
                <div className='flex justify-center items-center'> 
                    <button className='bg-blue-100 border rounded-sm border-slate-300 p-1 text-sm'>Previous</button>
                    <span className='border rounded-sm border-slate-300 text-sm pl-4 p-1 pr-4'>1</span>
                    <button className='bg-blue-100 border rounded-sm border-slate-300 pl-4 p-1 pr-4 text-sm'>Next</button>
                </div>
            </div>
        </>
    )
}