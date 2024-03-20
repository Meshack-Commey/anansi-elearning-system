
import Image from "next/image";
import Link from 'next/link'

//importing states
import User_Pic from "@/components/assets/images/icons/user (2).png"
import LogoWithName from '@/components/assets/images/logo/Anansi-BeUnorthodox-logo-with-name.png'
import onlyLogo from '@/components/assets/images/logo/Anansi-BeUnorthodox-logo.png'


export default function ElibraryLayout({
    children,
}:{
    children: React.ReactNode,
}){
    return(
        <>
            {/** Navbar Section */}
            <header className='w-full h-14 pl-5 pr-10 bg-blue-900 flex justify-between fixed z-50'> 
                <section className="m-2 flex justify-left text-white">
                    <figure className={`w-32 mr-3 rounded-6xl `}>
                        <Image 
                            src={LogoWithName} 
                            alt="Anansi BeUnorthordox" 
                            className='w-full'
                        /> 
                    </figure> 
                </section>
                <nav className="flex gap-8 text-white pt-4">
                    <Link href={"/"}>
                        <h1>Home</h1>
                    </Link>
                    <Link href={"/past-questions"}>
                        <h1>Past Questions</h1>
                    </Link>
                    <Link href={"/current-slides"}>
                        <h1>Current Slides</h1>
                    </Link>
                    <Link href={"/academic-timetable"}>
                        <h1>Academic Timetable</h1>
                    </Link>
                    <Link href={"/contact-us"}>
                        <h1>Contact us</h1>
                    </Link>
                </nav>
                <Link href={"/login"}>
                    <button className="w-18 p-2 mt-2 bg-white text-blue-900 font-bold border rounded">Premium Users</button>
                </Link>
            </header>
            {/** Endblock of Navbar Section */}
            <main className="w-full bg-inherit h-screen">
                { children }
            </main>
            {/* <footer className='w-full p-10 bg-blue-900 flex flex-col gap-5 text-white'>
                <nav className="flex justify-center items-center gap-8 text-white pt-4">
                    <Link href={"/elibrary"}>
                        <h1>Home</h1>
                    </Link>
                    <Link href={"/past-questions"}>
                        <h1>Pasco</h1>
                    </Link>
                    <Link href={"/current-slides"}>
                        <h1>Slides</h1>
                    </Link>
                    <Link href={"/academic-timetable"}>
                        <h1>Timetable</h1>
                    </Link>
                    <Link href={"/contact-us"}>
                        <h1>Contact</h1>
                    </Link>
                </nav>
                <hr />
                <div className="flex justify-center items-center gap-5">
                    <p>&copy; 2024 Anansi BeUnorthodox. All Rights Reserved. </p> 
                </div>
            </footer> */}
        </>
    )
}