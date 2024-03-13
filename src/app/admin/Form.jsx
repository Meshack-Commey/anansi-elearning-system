'use client'

import { useState } from 'react' 
import { useRouter } from 'next/navigation'
import Link from 'next/link';
//import { signIn } from 'next-auth/react'

export default function Form(){

    const router = useRouter();
    const [info, setInfo] = useState({email:"", password:""});
    const [error, setError] = useState('');

    const handleInput = (e) => {
        setInfo((prev) => ({...prev, [e.target.name]: e.target.value}));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!info.email || !info.password){
            setError("Must provide all credentials")
        }
        
        // const response = await signIn("credentials", {
        //     email: info.email,
        //     password: info.password,
        //     redirect: false,
        // })

        // console.log(response)
        // if(!response?.error){
        //     router.push("/admin/dashboard");
        //     router.refresh();
        // }
        
    }

    return(
        <>
            {error && <span className='text-red-800 font-bold text-center'> {error} </span> }
            <form onSubmit={handleSubmit}>
                        <div className='mt-6 mb-3 flex flex-col gap-2 w-full'>
                            <label className='text-sm text-black'>Email Address </label>
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="Enter your email" 
                                onChange={(e) => handleInput(e)}
                                className="border border-solid border-gray-300 text-red rounded-md p-4 w-full h-10" 
                                required
                            />
                        </div>
                        <div className='mt-6 mb-3 flex flex-col gap-2 w-full'>
                            <span className='flex justify-between'>
                                <label className='text-sm text-black'>Password </label> 
                                <p className='text-blue-900 text-sm text-end'>Forgot your Password?</p>
                            </span>
                            <input 
                                type="password" 
                                name="password" 
                                placeholder="Enter your password" 
                                onChange={(e) => handleInput(e)}
                                className="border border-solid border-gray-300 rounded-md p-4 w-full h-10" 
                                required
                            />
                        </div>
                        <div className='m-5 w-full'>
                            <Link href={"/admin/dashboard"}>
                                <button 
                                    type='submit' 
                                    className={`w-96 h-10 border border-slate-300 bg-blue-900 text-center text-white rounded-md`}> 
                                    Login 
                                </button>
                            </Link>
                        </div>
                    </form>
        </>
    )
}