

export default function TimetableLayout({
    children,
}:{
    children: React.ReactNode,
}){
    return(
        <>
            <main className='p-14 pt-20 w-full flex flex-col'>
                {/** Timetable component - Hero section */}
                <div className={'timetable-hero w-full bg-blue-200 mb-6'}>
                    <div className={"timetable-overlay w-full bg-blue-900"}></div>
                    <div className={"elibray-hero-box flex justify-evenly items-evenly text-white"}>
                        <div className="bg-inherit w-6/12 z-10 mt-10 flex flex-col justify-center items-center">
                            <p>Join our premium platform now! and enjoy amazing offers</p>
                            <h1 className="text-3xl capitalize font-bold mt-5 mb-1">Subscribe to our services</h1>
                            {/* <p className="mb-10">Working collaboratively to ensure every students achieves academically, socially, and emotionally.</p> */}
                            <div className="elibrary-hero-searchbox p-1 mt-8 w-full border bg-white border-white flex justify-between items-between">
                                <input className='search-input w-8/12 p-2 border border-white text-slate-900' type={'email'} placeholder="Please enter your email address" />
                                <button className="search-button w-4/12 p-2 bg-blue-900 ">Subscribe</button>
                            </div>
                            <div className={"flex gap-5 mt-4 justify-evenly items-evenly text-sm capitalize"}>
                                <p>Digital School</p>
                                <p>Student Solutions</p> 
                                <p>Graduation</p>
                                <p>Online Education</p>
                                <p>Scholarships</p>
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
        </>
    )
}