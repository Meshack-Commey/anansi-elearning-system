'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation';

export default function UpdateUserInfo({ id, roles, username, firstname, lastname, othername, programme, level, email, contact, password }) {
    const router = useRouter();
    const [newRoles, setNewRoles] = useState(roles);
    const [newUsername, setNewUsername] = useState(username);
    const [newFirstname, setNewFirstname] = useState(firstname);
    const [newLastname, setNewLastname] = useState(lastname);
    const [newOthername, setNewOthername] = useState(othername);
    const [newProgramme, setNewProgramme] = useState(programme);
    const [newLevel, setNewLevel] = useState(level);
    const [newEmail, setNewEmail] = useState(email);
    const [newContact, setNewContact] = useState(contact);
    const [newPassword, setNewPassword] = useState(password);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const res = await fetch(`http://localhost:3000/api/users/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({newRoles, newUsername, newFirstname, newLastname, newOthername, newProgramme, newLevel, newEmail, newContact, newPassword })
            });

            if(res.ok){

                router.refresh();
                router.push("/admin/dashboard/all-users");

            } else {

                throw new Error("Failed to update user");
            }

        } catch(error) {
            console.log(error);
        }
    }

    const handleCancelButton = () => {

        router.refresh();
        router.push("/admin/dashboard/all-users");

    }


    return(
        <>
            <form onSubmit={handleSubmit} className='text-sm text-slate-500 bg-inherit'>
            
                    <div className='mt-6 mb-3 flex gap-5 w-full justify-left'>
                        <div className='flex flex-col gap-2 w-full'>
                            <label className='font-bold'>Student ID </label>
                            <input 
                                onChange={(e) => setNewUsername(e.target.value)}
                                value={newUsername}
                                type="text" 
                                name="username" 
                                className="border border-solid border-gray-300 rounded-md p-4 w-full h-8" 
                                required
                            />
                        </div>
                        <div className='flex flex-col gap-2 w-full'>
                            <label className='font-bold'>Role </label>
                            <input 
                                onChange={(e) => setNewRoles(e.target.value)}
                                value={newRoles}
                                type="text" 
                                name="roles" 
                                className="border border-solid border-gray-300 rounded-md p-4 w-full h-8" 
                                required
                            />
                        </div>
                    </div>
                    <div className='mt-6 mb-3 flex gap-5 w-full justify-left'>
                        <div className='flex flex-col gap-2 w-full'>
                            <label className='font-bold'>First Name </label>
                            <input 
                                onChange={(e) => setNewFirstname(e.target.value)}
                                value={newFirstname}
                                type="text" 
                                name="firstame" 
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
                                required
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
                                required
                            />
                        </div>
                        <div className='flex flex-col gap-2 w-full'>
                            <label className='font-bold'>Password </label>
                            <input 
                                onChange={(e) => setNewPassword(e.target.value)}
                                value={newPassword}
                                type="password" 
                                name="password" 
                                className="border border-solid border-gray-300 rounded-md p-4 w-full h-8" 
                                required
                            />
                        </div>
                    </div>
                    <div className='mt-6 mb-3 flex flex-col gap-2 w-full'>
                        <label className='font-bold'>Programme of Study </label>
                        <input 
                            onChange={(e) => setNewProgramme(e.target.value)}
                            value={newProgramme}
                            type="text" 
                            name="programme" 
                            className="border border-solid border-gray-300 rounded-md p-4 w-full h-8" 
                            required
                        />
                    </div>
                    <div className='mt-6 mb-3 flex gap-5 w-full justify-left'>
                        <div className='flex flex-col gap-2 w-full'>
                            <label className='font-bold'> Level </label>
                            <input 
                                onChange={(e) => setNewLevel(e.target.value)}
                                value={newLevel}
                                type="text" 
                                name="level" 
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
                        <button type="submit" className='mt-6 mb-3 w-1/6 h-10 bg-blue-500 text-white font-bold border rounded-md'> Update </button>
                        <button onClick={handleCancelButton} type="reset" className='mt-6 mb-3 w-1/6 h-10 bg-red-500 text-white font-bold border rounded-md'> Cancel </button>
                    </div>
            </form>
        </>
    )
}