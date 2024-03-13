'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation';

export default function UpdateQuestionInfo({ id, name, course, filepath, author }) {
    const router = useRouter();
    const [newName, setNewName] = useState(name);
    const [newCourse, setNewCourse] = useState(course);
    const [newFilepath, setNewFilepath] = useState(filepath);
    const [newAuthor, setNewAuthor] = useState(author);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const res = await fetch(`http://localhost:3000/api/slides/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ newName, newCourse, newFilepath, newAuthor })
            });

            if(res.ok){
                router.push("/admin/dashboard/all-slides")
                router.refresh();
            } else {
                throw new Error("Failed to update slide");
            }

        } catch(error) {
            console.log(error);
        }
    }

    const handleCancelButton = () => {

        router.refresh();
        router.push("/admin/dashboard/all-slides");

    }

    return(
        <>
            <form onSubmit={handleSubmit} className='text-sm text-slate-500 bg-inherit'>
                    <div className='mt-6 mb-3 flex flex-col gap-2 w-full'>
                        <label className='font-bold'> Slide Title </label>
                        <input 
                            onChange={(e) => setNewName(e.target.value)}
                            value={newName}
                            type="text" 
                            name="name" 
                            placeholder="slide title"
                            className="border border-solid border-gray-300 rounded-md p-4 w-full h-8" 
                            required
                        />
                    </div>
                    <div className='mt-6 mb-3 flex sm:flex-col md:flex-row gap-5 w-full justify-left'>
                        <div className='flex flex-col gap-2 w-full'>
                            <label className='font-bold'>Course </label>
                            <input 
                                onChange={(e) => setNewCourse(e.target.value)}
                                value={newCourse}
                                type="text" 
                                name="course" 
                                placeholder="Course" 
                                className="border border-solid border-gray-300 rounded-md p-2 w-full h-10" 
                                required
                            />
                        </div>
                        <div className='flex flex-col gap-2 w-full'>
                            <label className='font-bold'> Upload File </label>
                            <input 
                                onChange={(e) => setNewFilepath(e.target.value)}
                                value={newFilepath}
                                type="file" 
                                name="filepath" 
                                className="border border-solid border-gray-300 rounded-md p-4 w-full h-8" 
                                required
                            />
                        </div>
                    </div>
                    <div className='mt-6 mb-3 flex flex-col gap-2 w-full'>
                        <label className='font-bold'> Author </label>
                        <input 
                            onChange={(e) => setNewAuthor(e.target.value)}
                            value={newAuthor}
                            type="text" 
                            name="author" 
                            placeholder="author"
                            className="border border-solid border-gray-300 rounded-md p-4 w-full h-8" 
                            required
                        />
                    </div>
                    <div className='flex gap-3 w-full justify-end items-end'>
                        <button type="submit" className='mt-6 mb-3 w-1/6 h-10 bg-blue-500 text-white font-bold border rounded-md'> Update </button>
                        <button onClick={handleCancelButton} type="reset" className='mt-6 mb-3 w-1/6 h-10 bg-red-500 text-white font-bold border rounded-md'> Cancel </button>
                    </div>
            </form>
        </>
    )
}