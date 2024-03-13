'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation';

export default function UpdateCourseInfo({ id, title, subtitle, code, programme, level, semester, description }) {
    const router = useRouter();
    const [newTitle, setNewTitle] = useState(title);
    const [newSubtitle, setNewSubtitle] = useState(subtitle);
    const [newCode, setNewCode] = useState(code);
    const [newProgramme, setNewProgramme] = useState(programme);
    const [newLevel, setNewLevel] = useState(level);
    const [newSemester, setNewSemester] = useState(semester);
    const [newDescription, setNewDescription] = useState(description);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const res = await fetch(`http://localhost:3000/api/courses/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ newTitle, newSubtitle, newCode, newProgramme, newLevel, newSemester, newDescription })
            });

            if(res.ok){
                router.push("/admin/dashboard/all-courses")
                router.refresh();
            } else {
                throw new Error("Failed to update course");
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
                            onChange={(e) => setNewTitle(e.target.value)}
                            value={newTitle}
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
                                onChange={(e) => setNewCode(e.target.value)}
                                value={newCode}
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
                                onChange={(e) => setNewSubtitle(e.target.value)}
                                value={newSubtitle}
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
                            onChange={(e) => setNewProgramme(e.target.value)}
                            value={newProgramme}
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
                                onChange={(e) => setNewLevel(e.target.value)}
                                value={newLevel}
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
                                onChange={(e) => setNewSemester(e.target.value)}
                                value={newSemester}
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
                            onChange={(e) => setNewDescription(e.target.value)}
                            value={newDescription}
                            name="description"
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