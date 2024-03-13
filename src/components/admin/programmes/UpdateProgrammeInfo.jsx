'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation';

export default function AddProgrammeComponent({ id, title, slogan, department, level, description }) {
    const router = useRouter();
    const [newTitle, setNewTitle] = useState(title);
    const [newSlogan, setNewSlogan] = useState(slogan);
    const [newDepartment, setNewDepartment] = useState(department);
    const [newLevel, setNewLevel] = useState(level);
    const [newDescription, setNewDescription] = useState(description);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const res = await fetch(`http://localhost:3000/api/programme/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ newTitle, newSlogan, newDepartment, newLevel, newDescription })
            });

            if(res.ok){
                router.push("/admin/dashboard/all-programmes")
                router.refresh()
            } else {
                throw new Error("Failed to create programme");
            }

        } catch(error) {
            console.log(error);
        }
    }

    const handleCancelButton = () => {

        router.refresh();
        router.push("/admin/dashboard/all-programmes");

    }

    return(
        <>
            <form onSubmit={handleSubmit} className='text-sm text-slate-500 bg-inherit'>
                    <div className='mt-6 mb-3 flex flex-col gap-2 w-full'>
                        <label className='font-bold'> Department </label>
                        <input 
                            onChange={(e) => setNewDepartment(e.target.value)}
                            value={newDepartment}
                            type="text" 
                            
                            placeholder="department"
                            className="border border-solid border-gray-300 rounded-md p-4 w-full h-8" 
                        />
                    </div>
                    <div className='mt-6 mb-3 flex sm:flex-col md:flex-row gap-5 w-full justify-left'>
                        <div className='flex flex-col gap-2 w-full'>
                            <label className='font-bold'>Programme Name </label>
                            <input 
                                onChange={(e) => setNewTitle(e.target.value)}
                                value={newTitle}
                                type="text" 
                                
                                placeholder="programme" 
                                className="border border-solid border-gray-300 rounded-md p-4 w-full h-8" 
                                required
                            />
                        </div>
                        <div className='flex flex-col gap-2 w-full'>
                            <label className='font-bold'>Slogan </label>
                            <input 
                                onChange={(e) => setNewSlogan(e.target.value)}
                                value={newSlogan}
                                type="text" 
                                
                                placeholder="slogan" 
                                className="border border-solid border-gray-300 rounded-md p-4 w-full h-8" 
                                required
                            />
                        </div>
                    </div>
                    <div className='mt-6 mb-3 flex flex-col gap-2 w-full'>
                        <label className='font-bold'> Educational Level </label>
                        <input 
                            onChange={(e) => setNewLevel(e.target.value)}
                            value={newLevel}
                            type="text" 
                        
                            placeholder="Bachelors"
                            className="border border-solid border-gray-300 rounded-md p-4 w-full h-8" 
                            required
                        />
                    </div>
                    <div className='mt-6 mb-3 flex flex-col gap-2 w-full'>
                        <label className='font-bold'>Description </label>
                        <textarea 
                            onChange={(e) => setNewDescription(e.target.value)}
                            value={newDescription}
                        
                            className="border border-solid border-gray-300 rounded-md p-4 w-full h-32" 
                        >
                        </textarea>
                    </div>
                    <div className='flex gap-3 w-full justify-end items-end'>
                        <button type="submit" className='mt-6 mb-3 w-1/6 h-10 bg-blue-500 text-white font-bold border rounded-md'> Update </button>
                        <button onClick={handleCancelButton} type="reset" className='mt-6 mb-3 w-1/6 h-10 bg-red-500 text-white font-bold border rounded-md'> Cancel </button>
                    </div>
            </form>
        </>
    )
}