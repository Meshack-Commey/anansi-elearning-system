'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation';

export default function UpdateQuestionInfo() {
    const router = useRouter();
    const [name, setName] = useState("");
    const [course, setCourse] = useState("");
    const [filepath, setFilepath] = useState("");
    const [author, setAuthor] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const res = await fetch(`http://localhost:3000/api/questions`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name, course, filepath, author })
            });

            if(res.ok){
                router.push("/admin/dashboard/all-questions")
                router.refresh();
            } else {
                throw new Error("Failed to update question");
            }

        } catch(error) {
            console.log(error);
        }
    }

    const handleCancelButton = () => {

        router.refresh();
        router.push("/admin/dashboard/all-questions");

    }

    return(
        <>
            <form onSubmit={handleSubmit} className='text-sm text-slate-500 bg-inherit'>
                    <div className='mt-6 mb-3 flex flex-col gap-2 w-full'>
                        <label className='font-bold'> Question Title </label>
                        <input 
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            type="text" 
                            name="name" 
                            placeholder="question title"
                            className="border border-solid border-gray-300 rounded-md p-4 w-full h-8" 
                            required
                        />
                    </div>
                    <div className='mt-6 mb-3 flex sm:flex-col md:flex-row gap-5 w-full justify-left'>
                        <div className='flex flex-col gap-2 w-full'>
                            <label className='font-bold'>Course </label>
                            <input 
                                onChange={(e) => setCourse(e.target.value)}
                                value={course}
                                type="text" 
                                name="course" 
                                placeholder="Course" 
                                className="border border-solid border-gray-300 rounded-md p-4 w-full h-8" 
                                required
                            />
                        </div>
                        <div className='flex flex-col gap-2 w-full'>
                            <label className='font-bold'> Upload File </label>
                            <input 
                                onChange={(e) => setFilepath(e.target.value)}
                                value={filepath}
                                type="file" 
                                name="filepath" 
                                className="border border-solid border-gray-300 rounded-md p-2 w-full h-10" 
                                required
                            />
                        </div>
                    </div>
                    <div className='mt-6 mb-3 flex flex-col gap-2 w-full'>
                        <label className='font-bold'> Author </label>
                        <input 
                            onChange={(e) => setAuthor(e.target.value)}
                            value={author}
                            type="text" 
                            name="author" 
                            placeholder="author"
                            className="border border-solid border-gray-300 rounded-md p-4 w-full h-8" 
                            required
                        />
                    </div>
                    <div className='flex gap-3 w-full justify-end items-end'>
                        <button type="submit" className='mt-6 mb-3 w-1/6 h-10 bg-blue-500 text-white font-bold border rounded-md'> Add </button>
                        <button onClick={handleCancelButton} type="reset" className='mt-6 mb-3 w-1/6 h-10 bg-red-500 text-white font-bold border rounded-md'> Cancel </button>
                    </div>
            </form>
        </>
    )
}