'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react' 
import { useRouter } from 'next/navigation'

import BackWardNavigator from '@/components/elibrary/BackWardNavigator'

// importing states 
import Logo from '@/components/assets/images/logo/Anansi-BeUnorthodox-logo.png'

// importing APIs
import { users } from '@/app/api/users/data'


export default function Home() {
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
        
        try {

            // Level400 B.Com. Marketing user login
            if(info.email === users[1].email && info.password === users[1].password) {
                router.replace("/dashboard/fourth/bcom-marketing")
            }
            // Level400 B.Com Procurement user login
            else if(info.email === users[2].email && info.password === users[2].password) {
                router.replace("/dashboard/fourth/bcom-procurement")
            }
            // Level300 B.Com. Procurement user login
            else if(info.email === users[3].email && info.password === users[3].password) {
                router.replace("/dashboard/third/bcom-procurement")
            }
            // Level200 B.Com. Procurement user login
            else if(info.email === users[4].email && info.password === users[4].password) {
                router.replace("/dashboard/second/bcom-procurement")
            }
            // Level100 B.Com. Procurement user login
            else if(info.email === users[5].email && info.password === users[5].password) {
                router.replace("/dashboard/first/bcom-procurement")
            } else {
                setError("Invalid email or password");
                router.replace("/login")
            }

        } catch(error) {
            setError(error);
        }
    }
    
    return(
    <>
        <div className='p-20 h-screen border-inherit border bg-gray-200 flex justify-center content-center'>
            <BackWardNavigator />
            <div className='border border-inherit bg-white md:w-5/12 flex flex-col justify-center content-center '>
                {error && <span className='text-red-800 font-bold text-center'> {error} </span> }
                <div className=' flex flex-col justify-center items-center'> 
                    <div className='flex gap-5 justify-evenly items-evenly m-2 '>
                        <figure className={`image-radius w-16 h-16 mb-2 border border-red rounded-3xl bg-gray-900`}>
                            <Image 
                                src={Logo} 
                                alt='Anansi BeUnorthodox' 
                                className={`w-full`}
                            />
                        </figure>
                        <div>
                            <h1 className='md:text-xl sm:text-md text-center text-black font-bold mb-2'> Anansi BeUnorthodox </h1>
                            <h1 className='md:text-xl sm:text-md text-center text-black font-bold mb-2'> Premium </h1>
                        </div>
                    </div>
                    <h1 className='md:text-lg sm:text-md text-center text-blue-900  mt-5'> Login with your premium credentials </h1>
                </div>

                <div className='mt-5 flex flex-col items-center justify-items-center'>
            
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
                            
                                <button 
                                    type='submit' 
                                    className={`w-96 h-10 border border-slate-300 bg-blue-900 text-center text-white rounded-md`}> 
                                    Log in 
                                </button>
                            
                        </div>
                    </form>
                    <p className='text-center mt-4 mb-4'> <span className='text-black'>Not a premium user?</span> <Link href={'/contact-us'} className='text-blue-900'> Subscribe </Link> to our services. </p>
                </div>

            </div>
        </div>
    </>
    )
}