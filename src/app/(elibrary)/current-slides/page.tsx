import Link from "next/link";


export default function Slides(){
    const availableSlides = [
        {
            "id": 1,
            "title": "Level 100",
            "url": "/current-slides/100",
        },
        {
            "id": 2,
            "title": "Level 200",
            "url": "/current-slides/200",
        },
        {
            "id": 3,
            "title": "Level 300",
            "url": "/current-slides/300",
        },
        {
            "id": 4,
            "title": "Level 400",
            "url": "/current-slides/400",
        },
    ]

    return(
        <>
            <section className='bg-inherit flex flex-col'>
                {/** Slides component - Hero section */}
                <div className={'slides-hero w-full bg-blue-200 mb-6'}>
                    <div className={"slides-overlay w-full bg-blue-900"}></div>
                    <div className={"elibray-hero-box flex justify-evenly items-evenly text-white"}>
                        <div className="bg-inherit w-6/12 z-10 mt-10 flex flex-col justify-center items-center">
                            <p>Anywhere Access Easy Learning</p>
                            <h1 className="text-3xl capitalize font-bold mt-1 mb-5">Get your course slides for easy learning</h1>
                            {/* <p className="mb-10">Working collaboratively to ensure every students achieves academically, socially, and emotionally.</p> */}
                            <div className="elibrary-hero-searchbox p-1 mt-5 w-full border bg-white border-white flex justify-between items-between">
                                <input className='search-input w-8/12 p-2 border border-white text-slate-900' type={'text'} placeholder="e.g Project Management" />
                                <button className="search-button w-4/12 p-2 bg-blue-900 ">Search Course</button>
                            </div>
                            <div className={"flex gap-5 mt-4 justify-evenly items-evenly text-sm"}>
                                <p>Current Slides</p>
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
                

                <div className="flex flex-col">
                    <h1 className='text-xl text-slate-900 mb-5'> Available Slides </h1>
                    <div className="flex gap-5">
                        {
                            availableSlides.map(({id, title, url })=> {
                                return(
                                    <Link key={id} href={url} className="bg-white p-14 rounded-xl text-xl text-slate-900">
                                        <p>{title}</p>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>

            </section>
        </>
    )
}