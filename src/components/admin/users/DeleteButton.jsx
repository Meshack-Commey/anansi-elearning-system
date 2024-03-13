'use client'

import { useRouter } from 'next/navigation'

export default function DeleteButton({ id }){
    const router = useRouter();
    
    const deleteUser = async () => {

        const confirmed = confirm("Are you sure?");

        if(confirmed) {

            const res = await fetch(`http://localhost:3000/api/users/${id}`, {
                method: "DELETE",
            });

            if(res.ok){
                router.refresh();
            }
        }

    }

    return(
        <>
            <button 
                onClick={deleteUser} 
                className='text-white text-xs bg-red-500 border border-re rounded-md p-1 mb-5'
            >
                Delete
            </button>                     
        </>
    )
}