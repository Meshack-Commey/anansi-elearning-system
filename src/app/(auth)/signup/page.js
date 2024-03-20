'use client'
import Link from 'next/link'
import Image from 'next/image'
//import { useState } from 'react'
import Logo from '@/components/assets/images/logo/Anansi-BeUnorthodox-logo.png'


export default function UserSignup() {
    // const [info, setInfo] = useState({username:"", password:""});

    // const handleInput = (e) => {
    //     setInfo((prev) => ({...prev, [e.target.name]: e.target.value}));
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    // }
    // console.log(info);
    return(
    <>
        <div className='p-20 h-screen border-inherit border bg-gray-200 flex justify-center content-center'>
            
            <div className='border border-inherit bg-white md:w-5/12 flex flex-col justify-center content-center '>

                <div className=' flex flex-col justify-center items-center'> 
                    <div className='flex gap-2 justify-center items-center m-2 '>
                        <figure className={`w-1/12 mb-2 border border-red rounded-2xl bg-gray-900`}>
                            <Image 
                                src={Logo} 
                                alt='Anansi BeUnorthodox' 
                                className={`w-full`}
                            />
                        </figure>
                        <h1 className='md:text-xl sm:text-md text-center text-black font-bold mb-2'> Course and Past Questions </h1>
                    </div>
                    <h1 className='md:text-lg sm:text-md text-center text-blue-900 font-bold mb-2'> Sign up </h1>
                </div>

                <div className='flex flex-col items-center justify-items-center'>
            
                    <form>
                        <div className='mt-6 mb-3 flex flex-col gap-2 w-full'>
                            <label className='text-sm text-black'>Student ID </label>
                            <input 
                                type="studentId" 
                                name="text" 
                                placeholder="Enter your student's ID" 
                                className="border border-solid border-gray-300 rounded-md p-4 w-full h-10" 
                                required
                            />
                        </div>
                        <div className='mt-6 mb-3 flex flex-col gap-2 w-full'>
                            <label className='text-sm text-black'>Email Address </label>
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="Enter your email" 
                                className="border border-solid border-gray-300 rounded-md p-4 w-full h-10" 
                                required
                            />
                        </div>
                        <div className='mt-6 mb-3 flex flex-col gap-2 w-full'>
                            <label className='text-sm text-black'>Password </label> 
                            <input 
                                type="password" 
                                name="password" 
                                placeholder="Enter your password" 
                                className="border border-solid border-gray-300 rounded-md p-4 w-full h-10" 
                                required
                            />
                        </div>
                        <div className='m-5 w-full'>
                            <button 
                                type='button' 
                                className={`w-96 h-10 border border-slate-300 bg-blue-900 text-center text-white rounded-md`}> 
                                Sign up 
                            </button>
                        </div>
                    </form>
                    <p className='text-center'> <span className='text-black'> Already has a user?</span> <Link href={'/login'} className='text-blue-900'> Log in </Link> </p>
                </div>

            </div>
        </div>
    </>
    )
}