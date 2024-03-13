'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation';

export default function AddUserComponent() {
    const router = useRouter();
    const [roles, setRoles] = useState("");
    const [username, setUsername] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [othername, setOthername] = useState("");
    const [programme, setProgramme] = useState("");
    const [level, setLevel] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!username || !firstname || !lastname || !programme || !level || !email || !password) {
            alert("All credentials are required");
            return
        }

        try{
            const res = await fetch("http://localhost:3000/api/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ roles, username, firstname, lastname, othername, programme, level, email, contact, password })
            });

            if(res.ok){
                router.push("/admin/dashboard/all-users")
            } else {
                throw new Error("Failed to create User");
            }

        } catch(error) {
            console.log(error);
        }
    }

    return(
        <>
            <form onSubmit={handleSubmit} className='text-sm text-slate-500 bg-inherit'>
            <div className='mt-6 mb-3 flex gap-5 w-full justify-left'>
                        <div className='flex flex-col gap-2 w-full'>
                            <label className='font-bold'>Student ID </label>
                            <input 
                                onChange={(e) => setUsername(e.target.value)}
                                value={username}
                                type="text" 
                                name="username" 
                                placeholder="Student ID"
                                className="border border-solid border-gray-300 rounded-md p-4 w-full h-8" 
                                required
                            />
                        </div>
                        <div className='flex flex-col gap-2 w-full'>
                            <label className='font-bold'>Role </label>
                            <input 
                                onChange={(e) => setRoles(e.target.value)}
                                value={roles}
                                type="text" 
                                name="roles" 
                                placeholder="role"
                                className="border border-solid border-gray-300 rounded-md p-4 w-full h-8" 
                                required
                            />
                        </div>
                    </div>
                    <div className='mt-6 mb-3 flex gap-5 w-full justify-left'>
                        <div className='flex flex-col gap-2 w-full'>
                            <label className='font-bold'>First Name </label>
                            <input 
                                onChange={(e) => setFirstname(e.target.value)}
                                value={firstname}
                                type="text" 
                                name="firstame" 
                                placeholder="Student first name" 
                                className="border border-solid border-gray-300 rounded-md p-4 w-full h-8" 
                                required
                            />
                        </div>
                        <div className='flex flex-col gap-2 w-full'>
                            <label className='font-bold'>Other Name(s) </label>
                            <input 
                                onChange={(e) => setOthername(e.target.value)}
                                value={othername}
                                type="text" 
                                name="otherName" 
                                placeholder="Student other name(s)" 
                                className="border border-solid border-gray-300 rounded-md p-4 w-full h-8" 
                                required
                            />
                        </div>
                    </div>
                    <div className='mt-6 mb-3 flex flex-col gap-2 w-full'>
                        <label className='font-bold'> Last Name </label>
                        <input 
                            onChange={(e) => setLastname(e.target.value)}
                            value={lastname}
                            type="text" 
                            name="lastname" 
                            placeholder="Student last name"
                            className="border border-solid border-gray-300 rounded-md p-4 w-full h-8" 
                            required
                        />
                    </div>
                    <div className='mt-6 mb-3 flex flex-col gap-2 w-full'>
                        <label className='font-bold'>Email Address </label>
                        <input 
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            type="email" 
                            name="email" 
                            placeholder="Enter email address"
                            className="border border-solid border-gray-300 rounded-md p-4 w-full h-8" 
                            required
                        />
                    </div>
                    <div className='mt-6 mb-3 flex gap-5 w-full justify-left'>
                        <div className='flex flex-col gap-2 w-full'>
                            <label className='font-bold'> Phone number </label>
                            <input 
                                onChange={(e) => setContact(e.target.value)}
                                value={contact}
                                type="text" 
                                name="contact" 
                                placeholder="Enter phone number" 
                                className="border border-solid border-gray-300 rounded-md p-4 w-full h-8" 
                                required
                            />
                        </div>
                        <div className='flex flex-col gap-2 w-full'>
                            <label className='font-bold'>Password </label>
                            <input 
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                type="password" 
                                name="password" 
                                placeholder="Enter password" 
                                className="border border-solid border-gray-300 rounded-md p-4 w-full h-8" 
                                required
                            />
                        </div>
                    </div>
                    <div className='mt-6 mb-3 flex flex-col gap-2 w-full'>
                        <label className='font-bold'>Programme of Study </label>
                        <input 
                            onChange={(e) => setProgramme(e.target.value)}
                            value={programme}
                            type="text" 
                            name="programme" 
                            placeholder="select programme" 
                            className="border border-solid border-gray-300 rounded-md p-4 w-full h-8" 
                            required
                        />
                    </div>
                    <div className='mt-6 mb-3 flex gap-5 w-full justify-left'>
                        <div className='flex flex-col gap-2 w-full'>
                            <label className='font-bold'> Level </label>
                            <input 
                                onChange={(e) => setLevel(e.target.value)}
                                value={level}
                                type="text" 
                                name="level" 
                                placeholder="Select academic level" 
                                className="border border-solid border-gray-300 rounded-md p-4 w-full h-8" 
                                required
                            />
                        </div>
                        {/* <div className='flex flex-col gap-2 w-full'>
                            <label className='font-bold'>Semester </label>
                            <input 
                                onChange={(e) => setSemester(e.target.value)}
                                value={semester}
                                type="text" 
                                name="semester" 
                                placeholder="Select Semester" 
                                className="border border-solid border-gray-300 rounded-md p-4 w-full h-8" 
                            />
                        </div> */}
                    </div>
                    <div className='mt-6 mb-3 flex flex-col gap-2 w-full'>
                        <label className='font-bold'>Registered Courses </label>
                        <div 
                            className="border border-solid border-gray-300 rounded-md p-4 w-full h-32" 
                        >
                        </div>
                    </div>
                    <div className='flex gap-3 w-full justify-end items-end'>
                        <button type="submit" className='mt-6 mb-3 w-1/6 h-10 bg-blue-500 text-white font-bold border rounded-md'> Add </button>
                        <button type="reset" className='mt-6 mb-3 w-1/6 h-10 bg-red-500 text-white font-bold border rounded-md'> Cancel </button>
                    </div>
            </form>
        </>
    )
}