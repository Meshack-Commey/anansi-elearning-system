'use client'
import {useState} from 'react'
import Image from "next/image";
import Link from 'next/link'
import { FullSideNav, ShortSideNav } from '@/components/L1BComProcurementSideBar'

//importing API
import { users } from '../../../api/users/data'

//importing states
import User_Pic from "@/components/assets/images/icons/user (2).png"
import LogoWithName from '@/components/assets/images/logo/Anansi-BeUnorthodox-logo-with-name.png'
import onlyLogo from '@/components/assets/images/logo/Anansi-BeUnorthodox-logo.png'



export default function UserDashboardLayout({
    children,
}:{
    children: React.ReactNode,
}) {

    const [isOpen, setIsOpen] = useState(true);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return(
    <>
        {/** Navbar Section */}
        <header className='w-full h-16 bg-blue-900 flex justify-between fixed z-50'> 
                <section className="m-2 flex justify-left text-white">
                    <figure className={`w-32 mr-3 rounded-6xl ${isOpen ? 'hidden' : ''} `}> {/** hide this section to open side bar */}
                        <Image 
                            src={LogoWithName} 
                            alt="Anansi BeUnorthordox" 
                            className='w-full'
                        /> 
                    </figure>
                    <div className={`flex gap-5 bg-inherit mr-5 w-52 ${isOpen ? '' : 'hidden'} `}> {/** opened side bar */}
                        <figure className='w-1/4 ml-3 rounded-6xl'>
                            <Image 
                                src={onlyLogo} 
                                alt="Anansi" 
                                className='w-full'
                            /> 
                        </figure>
                        <p className="text-white font-bold"> Anansi <br /> BeUnorthordox </p>
                    </div>
                    <span onClick={toggle} className="font-bold text-xl flex justify-center m-2 hover:cursor-pointer"> &#9776; </span>
                </section>
                <section className='w-3/12 h-16 mr-8 p-2 bg-white text-blue-900 flex gap-2 justify-center'>
                    <figure className='w-1/6 rounded-3xl'>
                        <Image 
                            src={User_Pic} 
                            alt="user pic" 
                            className='w-full'
                        />
                    </figure>
                    <p className="text-base"> 
                        <span className='font-bold'> {users[5].first_name} {users[5].last_name} </span>
                        <br /> 
                        <Link href={'/'}><span className='text-md'>Logout</span></Link> 
                    </p>
                </section>
            </header>
        {/** Endblock of Navbar Section */}

        <section className='flex '>

          {/** SideBar */}
          <div> 
            {/** short side nav */}
            <div className={`${isOpen ? 'hidden' : ''} w-16 bg-inherit relative top-10 z-40`}>
                  <ShortSideNav />
              </div> {/** short side bar */}
            {/** Full side bar */}
            <div className={` ${isOpen ? '' : 'hidden'} ${isOpen ? 'w-56' : ''}  bg-inherit text-white relative top-10 z-40`}>
                <FullSideNav />
            </div> {/** Full side bar */}
          </div>
          {/** Endblock of SideBar Navigation */}

          <main className={` w-full bg-inherit h-screen max-h-screen flex flex-col`}> 

            <div className='mt-16 p-9 w-full h-16 bg-inherit flex justify-between'>
              <h1 className='text-2xl'> Premium User Dashboard </h1>
              {/* <p className='text-base'> Admin | Dashboard </p> */}
            </div>

            <section className='p-2 text-white'>
              <div className='w-full p-5 h-auto  text-black'>
                {children}
              </div>
            </section>
        
          </main>

        </section>
    </>
    )
}