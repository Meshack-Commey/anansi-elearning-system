import Image from 'next/image'
import Link from 'next/link'

import { professionals } from '@/app/api/users/contactus'


export default function Contact(){
    return(
        <>
            <section>
                <div className="flex flex-col justify-center items-center mt-10">
                    <h1 className="text-xl mt-5 mb-1">Tap Into the Expertise of Highly-Skilled Business Professionals</h1>
                    <hr className="w-1/12 p-1 bg-blue-900" />
                    <p className="text-slate-900 text-md mt-3 ">Engage business professionals who are experienced subject matter experts across a range of business opportunities and scholarships.</p>
                </div>
                {/** Contact component - About Us section */}
                {
                    professionals.map(({id, name, position, description, profilePicture, contact, linkedin, portfolioUrl, reverse}) => {
                        return(
                            <>
                                <div key={id} className={'w-full bg-inherit h-auto pt-6 pb-6'}>
                                    <div className={`flex ${reverse ? "flex-row-reverse": "flex-row"} justify-evenly items-evenly`}>
                                        <div className="bg-inherit h-60 w-5/12 mt-20 flex flex-col justify-left items-left">
                                            <h1 className="text-3xl font-bold text-blue-900 capitalize mt-5 mb-2">{ name }</h1>
                                            <p className="mb-5"> { position } </p>
                                                <div className=" bg-inherit border-inherit flex justify-left items-left gap-5">
                                                    <Link href={linkedin}>
                                                        <button className="linkedin-button border border-gray-900 p-1 bg-blue-100 text-slate-900 "> In </button>
                                                    </Link>
                                                    <p className='mt-2 hover:pl-2 hover:cursor:pointer'> { contact } </p>
                                                </div>
                                            <p className="mt-4 mb-5"> { description} </p>
                                            <Link href={portfolioUrl}>
                                                <div className=" p-1 w-9/12 bg-inherit border-inherit flex justify-between items-between">
                                                    <button className="rounded border border-inherit  p-2 bg-inherit text-blue-900 font-bold "> Read More [...] </button>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="rounded bg-yellow w-4/12 p-10 ">
                                            <Image 
                                                src={profilePicture} 
                                                alt="elibrary" 
                                                className="w-full rounded"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }

            </section>
        </>
    )
}