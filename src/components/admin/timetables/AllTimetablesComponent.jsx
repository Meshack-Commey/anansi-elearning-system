// import { users } from '../../app/api/users/data.js'
import Link from 'next/link'

export default function AllUsersComponent() {
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
                        <th className='border border-slate-200'>#</th>
                        <th className='border border-slate-200'>Title</th>
                        <th className='border border-slate-200'>Code</th>
                        <th className='border border-slate-200'>File</th>
                        <th className='border border-slate-200'>Category</th>
                        <th className='border border-slate-200'>Image</th>
                        <th className='border border-slate-200'>Description</th>
                        <th className='border border-slate-200'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {
                        users.map((user) => {
                            return(  */}
                                {/* <tr key={1} className='border border-slate-200'>
                                    <td className='border border-slate-200 p-2'>SB/MKN/20/0041</td>
                                    <td className='border border-slate-200 p-2'>Kelvin</td>
                                    <td className='border border-slate-200 p-2'>Yeboah</td>
                                    <td className='border border-slate-200 p-2'>B.Com. Marketing</td>
                                    <td className='border border-slate-200 p-2'>400</td>
                                    <td className='border border-slate-200 p-2'>Enterpreneurship, Project Management etc.</td>
                                    <td className='border border-slate-200 p-2'>kelly@gmail.com</td>
                                    <td className='flex gap-2 p-2'>
                                        <Link href={`/admin/dashboard/all-users/${1}/update`}> 
                                            <span className='text-white text-xs bg-blue-500 border border-blue rounded-md p-1 mb-5'>Update</span>
                                        </Link> <br />
                                        <Link href={`/admin/dashboard/all-users/${1}/delete`}> 
                                            <span className='text-white text-xs bg-red-500 border border-re rounded-md p-1 mb-5'>Delete</span> 
                                        </Link> <br />
                                    </td>
                                </tr> */}
                            {/* )
                        })
                    }  */}
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