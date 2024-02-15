'use client'
import Link from 'next/link'
import Image from 'next/image'
//import { useState } from 'react'
//import { signIn } from 'next-auth/react' 
//import { useRouter } from 'next/navigation'

import Logo from '@/components/assets/images/logo/Anansi-BeUnorthodox-logo.png'


export default function Home() {
    // const router = useRouter();
    // const [info, setInfo] = useState({email:"", password:""});
    // const [pending, setPending] = useState(false);
    // const [error, setError] = useState('');

    // const handleInput = (e) => {
    //     setInfo((prev) => ({...prev, [e.target.name]: e.target.value}));
    // }

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     if(!info.email || !info.password){
    //         setError("Must provide all credentials")
    //     }
        
    //     try{
    //         setPending(true);
    //         const res = signIn('credentials', {
    //             email: info.email,
    //             password: info.password,
    //             redirect: false
    //         })
    //         if(res.error){
    //             setError("Invalid Credentials");
    //             setPending(false)
    //             return;
    //         }
    //         router.replace("/")
    //     } catch(error){
    //         setPending(false)
    //         setError("Something went wrong.")
    //     }
    // }
    
    return(
    <>
        <div className='p-20 h-screen border-inherit border bg-gray-200 flex justify-center content-center'>
            
            <div className='border border-inherit bg-white md:w-5/12 flex flex-col justify-center content-center '>

                <div className=' flex flex-col justify-center items-center'> 
                    <div className='flex gap-2 justify-center items-center m-2 '>
                        <figure className={`w-1/12 mb-2 border border-red rounded-3xl bg-gray-900`}>
                            <Image 
                                src={Logo} 
                                alt='Anansi BeUnorthodox' 
                                className={`w-full`}
                            />
                        </figure>
                        <h1 className='md:text-xl sm:text-md text-center text-black font-bold mb-2'> Course and Past Questions </h1>
                    </div>
                    <h1 className='md:text-lg sm:text-md text-center text-blue-900 font-bold mb-2'> Log in </h1>
                </div>

                <div className='mt-5 flex flex-col items-center justify-items-center'>
            
                    <form>
                        <div className='mt-6 mb-3 flex flex-col gap-2 w-full'>
                            <label className='text-sm text-black'>Email Address </label>
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="Enter your email" 
                                // onChange={(e) => handleInput(e)}
                                className="border border-solid border-gray-300 rounded-md p-4 w-full h-10" 
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
                                // onChange={(e) => handleInput(e)}
                                className="border border-solid border-gray-300 rounded-md p-4 w-full h-10" 
                                required
                            />
                        </div>
                        <div className='m-5 w-full'>
                            <Link href='/dashboard'>
                                <button 
                                    type='button' 
                                    className={`w-96 h-10 border border-slate-300 bg-blue-900 text-center text-white rounded-md`}> 
                                    Login 
                                </button>
                            </Link>
                        </div>
                    </form>
                    {/* <p className='text-center mt-10'> <span className='text-black'>Not a user?</span> <Link href={'/signup'} className='text-blue-900'> Sign up </Link> </p> */}
                </div>

            </div>
        </div>
    </>
    )
}