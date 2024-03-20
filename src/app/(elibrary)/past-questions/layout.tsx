import Link from 'next/link'


export default function PascoLayout({
    children,
}:{
    children: React.ReactNode,
}){
    return(
        <div className='p-14 pt-20 flex w-full gap-5'>
            <header className='w-2/12 flex flex-col gap-5'>

                <h1 className='w-full bg-blue-900 text-white p-5'>Past Questions</h1>

                <nav className="w-full flex flex-col justify-center items-center gap-8 bg-white text-blue-900 font-bold pt-4 pb-4">
                    <Link href={"/past-questions/100"}>
                        <h1>Level 100</h1>
                    </Link>
                    <Link href={"/past-questions/200"}>
                        <h1>Level 200</h1>
                    </Link>
                    <Link href={"/past-questions/300"}>
                        <h1>Level 300</h1>
                    </Link>
                    <Link href={"/past-questions/400"}>
                        <h1>Level 400</h1>
                    </Link>
                    {/* <Link href={"/elibrary/past-questions/others"}>
                        <h1>Others</h1>
                    </Link> */}
                </nav>

            </header>
            <main className='w-10/12 bg-inherit flex flex-col'>
                {/** Pasco component - Hero section */}
                <div className={'pasco-hero w-full bg-blue-200 mb-6'}>
                    <div className={"pasco-overlay w-full bg-blue-900"}></div>
                    <div className={"elibray-hero-box flex justify-evenly items-evenly text-white"}>
                        <div className="bg-inherit w-6/12 z-10 mt-10 flex flex-col justify-center items-center">
                            <p>Anywhere Access Easy Learning</p>
                            <h1 className="text-3xl capitalize font-bold mt-5 mb-5">Practice 1 million+ past questions & answers</h1>
                            {/* <p className="mb-10">Working collaboratively to ensure every students achieves academically, socially, and emotionally.</p> */}
                            <div className="elibrary-hero-searchbox p-1 mt-5 w-full border bg-white border-white flex justify-between items-between">
                                <input className='search-input w-8/12 p-2 border border-white text-slate-900' type={'text'} placeholder="e.g Business Management" />
                                <button className="search-button w-4/12 p-2 bg-blue-900 ">Search Course</button>
                            </div>
                            <div className={"flex gap-5 mt-4 justify-evenly items-evenly text-sm"}>
                                <p>Past Questions</p>
                                <p>Learn Anywhere</p> 
                                <p>Lifetime Access</p>
                            </div>
                        </div>
                        {/* <div className="bg-inherit w-4/12 p-5 z-10">
                            <Image 
                                src={HeroImage} 
                                alt="elibrary" 
                                className="w-full"
                            />
                        </div> */}
                    </div>
                </div>
                <div>

                    { children }

                </div>
            </main>
        </div>
    )
}