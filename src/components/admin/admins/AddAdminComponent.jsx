'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation';


export default function AddAdminComponent() {
    const router = useRouter();
    const [roles, setRoles] = useState("");
    const [username, setUsername] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [othername, setOthername] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const res = await fetch(`http://localhost:3000/api/admin`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ roles, username, firstname, lastname, othername, email, contact, password })
            });

            if(res.ok){

                router.refresh();
                router.push("/admin/dashboard/all-admins");

            } else {

                throw new Error("Failed to create admin");
            }

        } catch(error) {
            console.log(error);
        }
    }

    const handleCancelButton = () => {

        router.refresh();
        router.push("/admin/dashboard/all-admins");

    }

    return(
        <>
            <form onSubmit={handleSubmit} className='text-sm text-slate-500 bg-inherit'>
                    <div className='mt-6 mb-3 flex gap-5 w-full justify-left'>
                        <div className='flex flex-col gap-2 w-full'>
                            <label className='font-bold'>First Name </label>
                            <input 
                                onChange={(e) => setFirstname(e.target.value)}
                                value={firstname}
                                type="text" 
                                name="firstname" 
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
                                name="othername"  
                                className="border border-solid border-gray-300 rounded-md p-4 w-full h-8" 
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
                                className="border border-solid border-gray-300 rounded-md p-4 w-full h-8" 
                            />
                        </div>
                        {/* <div className='flex flex-col gap-2 w-full'>
                            <label className='font-bold'>Password </label>
                            <input 
                                onChange={(e) => setNewPassword(e.target.value)}
                                value={newPassword}
                                type="password" 
                                name="password"  
                                className="border border-solid border-gray-300 rounded-md p-4 w-full h-8" 
                                required
                            />
                        </div> */}
                    </div>
                    <div className='mt-6 mb-3 flex flex-col gap-2 w-full'>
                        <label className='font-bold'>Admin Username </label>
                        <input 
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                            type="text" 
                            name="username" 
                            className="border border-solid border-gray-300 rounded-md p-4 w-full h-8" 
                            required
                        />
                    </div>
                    <div className='mt-6 mb-3 flex gap-5 w-full justify-left'>
                        <div className='flex flex-col gap-2 w-full'>
                            <label className='font-bold'> Admin Role </label>
                            <input 
                                onChange={(e) => setRoles(e.target.value)}
                                value={roles}
                                type="text" 
                                name="roles"  
                                className="border border-solid border-gray-300 rounded-md p-4 w-full h-8" 
                                required
                            />
                        </div>
                        <div className='flex flex-col gap-2 w-full'>
                            <label className='font-bold'>Admin Code </label>
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                value={password} 
                                type="password" 
                                name="password"  
                                className="border border-solid border-gray-300 rounded-md p-4 w-full h-8" 
                            />
                        </div>
                    </div>
                    {/* <div className='mt-6 mb-3 flex flex-col gap-2 w-full'>
                        <label className='font-bold'>Todos </label>
                        <div 
                            className="border border-solid border-gray-300 rounded-md p-4 w-full h-32" 
                        >
                            <p>Super Administrator and Manager </p>
                        </div>
                    </div> */}
                    <div className='flex gap-3 w-full justify-end items-end'>
                        <button type="submit" className='mt-6 mb-3 w-1/6 h-10 bg-blue-500 text-white font-bold border rounded-md'> Add </button>
                        <button onClick={handleCancelButton} type="reset" className='mt-6 mb-3 w-1/6 h-10 bg-red-500 text-white font-bold border rounded-md'> Cancel </button>
                    </div>
            </form>
        </>
    )
}