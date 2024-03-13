'use client'

import { useRouter } from 'next/navigation'

export default function DeleteButton({ id }){
    const router = useRouter();
    
    const deleteSlide = async () => {

        const confirmed = confirm("Are you sure?");

        if(confirmed) {

            const res = await fetch(`http://localhost:3000/api/slides/${id}`, {
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
                onClick={deleteSlide} 
                className='text-white text-xs bg-red-500 border border-re rounded-md p-1 mb-5'
            >
                Delete
            </button>                     
        </>
    )
}