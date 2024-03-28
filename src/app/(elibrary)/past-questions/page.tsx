import Link from 'next/link'
// import Image from 'next/image'
// import HeroImage from '@/components/assets/images/elibrary-hero.jpg'


export default function Pasco(){
    const availablePasco = [
        {
            "id": 1,
            "title": "Level 100",
            "url": "/past-questions/100",
        },
        {
            "id": 2,
            "title": "Level 200",
            "url": "/past-questions/200",
        },
        {
            "id": 3,
            "title": "Level 300",
            "url": "/past-questions/300",
        },
        {
            "id": 4,
            "title": "Level 400",
            "url": "/past-questions/400",
        },
    ]

    return(
        <>
            <section className='bg-inherit flex flex-col'>
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
                
                <div className="flex flex-col">
                    <h1 className='text-xl text-slate-900 mb-5'> Available Past Questions </h1>
                    <div className="flex gap-5">
                        {
                            availablePasco.map(({id, title, url })=> {
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