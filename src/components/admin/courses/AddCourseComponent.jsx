'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation';

export default function AddCourseComponent() {
    const router = useRouter();
    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [code, setCode] = useState("");
    const [programme, setProgramme] = useState("");
    const [level, setLevel] = useState("");
    const [semester, setSemester] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!title || !subtitle || !code || !programme || !semester || !level || !description ) {
            alert("All credentials are required");
            return
        }

        try{
            const res = await fetch("http://localhost:3000/api/courses", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ title, subtitle, code, programme, level, semester, description })
            });

            if(res.ok){
                router.push("/admin/dashboard/all-courses")
                router.refresh();
            } else {
                throw new Error("Failed to create programme");
            }

        } catch(error) {
            console.log(error);
        }
    }

    const handleCancelButton = () => {

        router.refresh();
        router.push("/admin/dashboard/all-courses");

    }

    return(
        <>
            <form onSubmit={handleSubmit} className='text-sm text-slate-500 bg-inherit'>
                    <div className='mt-6 mb-3 flex flex-col gap-2 w-full'>
                        <label className='font-bold'> Course Title </label>
                        <input 
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                            type="text" 
                            name="title" 
                            placeholder="course title"
                            className="border border-solid border-gray-300 rounded-md p-4 w-full h-8" 
                            required
                        />
                    </div>
                    <div className='mt-6 mb-3 flex sm:flex-col md:flex-row gap-5 w-full justify-left'>
                        <div className='flex flex-col gap-2 w-full'>
                            <label className='font-bold'>Course Code </label>
                            <input 
                                onChange={(e) => setCode(e.target.value)}
                                value={code}
                                type="text" 
                                name="code" 
                                placeholder="Course code" 
                                className="border border-solid border-gray-300 rounded-md p-4 w-full h-8" 
                                required
                            />
                        </div>
                        <div className='flex flex-col gap-2 w-full'>
                            <label className='font-bold'> Subtitle </label>
                            <input 
                                onChange={(e) => setSubtitle(e.target.value)}
                                value={subtitle}
                                type="text" 
                                name="subtitle" 
                                placeholder="course subtitle" 
                                className="border border-solid border-gray-300 rounded-md p-4 w-full h-8" 
                                required
                            />
                        </div>
                    </div>
                    <div className='mt-6 mb-3 flex flex-col gap-2 w-full'>
                        <label className='font-bold'> Programme </label>
                        <input 
                            onChange={(e) => setProgramme(e.target.value)}
                            value={programme}
                            type="text" 
                            name="programme" 
                            placeholder="select programmme"
                            className="border border-solid border-gray-300 rounded-md p-4 w-full h-8" 
                            required
                        />
                    </div>
                    <div className='mt-6 mb-3 flex sm:flex-col md:flex-row gap-5 w-full justify-left'>
                        <div className='flex flex-col gap-2 w-full'>
                            <label className='font-bold'> Level </label>
                            <input 
                                onChange={(e) => setLevel(e.target.value)}
                                value={level}
                                type="text" 
                                name="level" 
                                placeholder="select level" 
                                className="border border-solid border-gray-300 rounded-md p-4 w-full h-8" 
                                required
                            />
                        </div>
                        <div className='flex flex-col gap-2 w-full'>
                            <label className='font-bold'>Semester </label>
                            <input 
                                onChange={(e) => setSemester(e.target.value)}
                                value={semester}
                                type="text" 
                                name="semester" 
                                placeholder="select semester" 
                                className="border border-solid border-gray-300 rounded-md p-4 w-full h-8" 
                                required
                            />
                        </div>
                    </div>
                    <div className='mt-6 mb-3 flex flex-col gap-2 w-full'>
                        <label className='font-bold'> Course Description </label>
                        <textarea 
                            onChange={(e) => setDescription(e.target.value)}
                            value={description}
                            name="description"
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