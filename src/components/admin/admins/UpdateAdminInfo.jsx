'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation';


export default function UpdateAdminInfo({id, roles, username, firstname, lastname, othername, email, contact, password }) {
    const router = useRouter();
    const [newRoles, setNewRoles] = useState(roles);
    const [newUsername, setNewUsername] = useState(username);
    const [newFirstname, setNewFirstname] = useState(firstname);
    const [newLastname, setNewLastname] = useState(lastname);
    const [newOthername, setNewOthername] = useState(othername);
    const [newEmail, setNewEmail] = useState(email);
    const [newContact, setNewContact] = useState(contact);
    const [newPassword, setNewPassword] = useState(password);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const res = await fetch(`http://localhost:3000/api/admin/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ newRoles, newUsername, newFirstname, newLastname, newOthername, newEmail, newContact, newPassword })
            });

            if(res.ok){

                router.refresh();
                router.push("/admin/dashboard/all-admins");

            } else {

                throw new Error("Failed to update admin");
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
                                onChange={(e) => setNewFirstname(e.target.value)}
                                value={newFirstname}
                                type="text" 
                                name="firstname" 
                                className="border border-solid border-gray-300 rounded-md p-4 w-full h-8" 
                                required
                            />
                        </div>
                        <div className='flex flex-col gap-2 w-full'>
                            <label className='font-bold'>Other Name(s) </label>
                            <input 
                                onChange={(e) => setNewOthername(e.target.value)}
                                value={newOthername}
                                type="text" 
                                name="othername"  
                                className="border border-solid border-gray-300 rounded-md p-4 w-full h-8" 
                            />
                        </div>
                    </div>
                    <div className='mt-6 mb-3 flex flex-col gap-2 w-full'>
                        <label className='font-bold'> Last Name </label>
                        <input 
                            onChange={(e) => setNewLastname(e.target.value)}
                            value={newLastname}
                            type="text" 
                            name="lastname" 
                            className="border border-solid border-gray-300 rounded-md p-4 w-full h-8" 
                            required
                        />
                    </div>
                    <div className='mt-6 mb-3 flex flex-col gap-2 w-full'>
                        <label className='font-bold'>Email Address </label>
                        <input 
                            onChange={(e) => setNewEmail(e.target.value)}
                            value={newEmail}
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
                                onChange={(e) => setNewContact(e.target.value)}
                                value={newContact}
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
                            onChange={(e) => setNewUsername(e.target.value)}
                            value={newUsername}
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
                                onChange={(e) => setNewRoles(e.target.value)}
                                value={newRoles}
                                type="text" 
                                name="roles"  
                                className="border border-solid border-gray-300 rounded-md p-4 w-full h-8" 
                                required
                            />
                        </div>
                        <div className='flex flex-col gap-2 w-full'>
                            <label className='font-bold'>Admin Code </label>
                            <input
                                onChange={(e) => setNewPassword(e.target.value)}
                                value={newPassword} 
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
                        <button type="submit" className='mt-6 mb-3 w-1/6 h-10 bg-blue-500 text-white font-bold border rounded-md'> Update </button>
                        <button onClick={handleCancelButton} type="reset" className='mt-6 mb-3 w-1/6 h-10 bg-red-500 text-white font-bold border rounded-md'> Cancel </button>
                    </div>
            </form>
        </>
    )
}