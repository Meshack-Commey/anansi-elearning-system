'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation';

export default function AddProgrammeComponent() {
    const router = useRouter();
    const [title, setTitle] = useState("");
    const [slogan, setSlogan] = useState("");
    const [department, setDepartment] = useState("");
    const [level, setLevel] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(title === "" || slogan === "" || level === ""){
            alert("Enter programme name, slogan, level")
        }

        try{
            const res = await fetch("http://localhost:3000/api/programme", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ title, slogan, department, level, description })
            });

            if(res.ok){
                router.push("/admin/dashboard/all-programmes")
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
            <form onClick={handleSubmit} className='text-sm text-slate-500 bg-inherit'>
                    <div className='mt-6 mb-3 flex flex-col gap-2 w-full'>
                        <label className='font-bold'> Department </label>
                        <input 
                            onChange={(e) => setDepartment(e.target.value)}
                            value={department}
                            type="text" 
                            name="department" 
                            placeholder="department"
                            className="border border-solid border-gray-300 rounded-md p-4 w-full h-8" 
                            required
                        />
                    </div>
                    <div className='mt-6 mb-3 flex sm:flex-col md:flex-row gap-5 w-full justify-left'>
                        <div className='flex flex-col gap-2 w-full'>
                            <label className='font-bold'>Programme Name </label>
                            <input 
                                onChange={(e) => setTitle(e.target.value)}
                                value={title}
                                type="text" 
                                name="title" 
                                placeholder="programme" 
                                className="border border-solid border-gray-300 rounded-md p-4 w-full h-8" 
                                required
                            />
                        </div>
                        <div className='flex flex-col gap-2 w-full'>
                            <label className='font-bold'>Slogan </label>
                            <input 
                                onChange={(e) => setSlogan(e.target.value)}
                                value={slogan}
                                type="text" 
                                name="slogan" 
                                placeholder="slogan" 
                                className="border border-solid border-gray-300 rounded-md p-4 w-full h-8" 
                                required
                            />
                        </div>
                    </div>
                    <div className='mt-6 mb-3 flex flex-col gap-2 w-full'>
                        <label className='font-bold'> Educational Level </label>
                        <input 
                            onChange={(e) => setLevel(e.target.value)}
                            value={level}
                            type="text" 
                            name="level" 
                            placeholder="Bachelors or Masters"
                            className="border border-solid border-gray-300 rounded-md p-4 w-full h-8" 
                            required
                        />
                    </div>
                    <div className='mt-6 mb-3 flex flex-col gap-2 w-full'>
                        <label className='font-bold'>Description </label>
                        <textarea 
                            onChange={(e) => setDescription(e.target.value)}
                            value={description}
                            name="description"
                            placeholder="programme description"
                            className="border border-solid border-gray-300 rounded-md p-4 w-full h-32" 
                        >
                        </textarea>
                    </div>
                    <div className='flex gap-3 w-full justify-end items-end'>
                        <button type="submit" className='mt-6 mb-3 w-1/6 h-10 bg-blue-500 text-white font-bold border rounded-md'> Add </button>
                        <button onClick={handleCancelButton} type="reset" className='mt-6 mb-3 w-1/6 h-10 bg-red-500 text-white font-bold border rounded-md'> Cancel </button>
                    </div>
            </form>
        </>
    )
}