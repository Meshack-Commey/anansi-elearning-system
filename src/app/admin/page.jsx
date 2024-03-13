
// import Link from 'next/link'
import Image from 'next/image'
import Form from './Form'
// import { redirect } from 'next/navigation'
// import {getServerSession} from 'next-auth'
// importing states 
import Logo from '@/components/assets/images/logo/Anansi-BeUnorthodox-logo.png'


export default async function AdminLoginPage() {
    // const session = await getServerSession();

    // if(session){
    //     redirect("/admin/dashboard")
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
                        <h1 className='md:text-xl sm:text-md text-center text-black font-bold mb-2'> Anansi BeUnorthodox </h1>
                    </div>
                    <h1 className='md:text-lg sm:text-md text-center text-blue-900 font-bold mb-2'> Admin Log in </h1>
                </div>

                <div className='mt-5 flex flex-col items-center justify-items-center'>
            
                    <Form />

                    {/* <p className='text-center mt-10'> <span className='text-black'>Not a user?</span> <Link href={'/signup'} className='text-blue-900'> Sign up </Link> </p> */}
                </div>

            </div>
        </div>
    </>
    )
}