import Image from 'next/image'
import HeroImage from '@/components/assets/images/png/elibrary-hero.png'
import InstructorsImage from '@/components/assets/images/students_8.jpg'

export default function Home(){
    return(
        <>
            <section className="p-0 pt-12 w-full bg-yellow-100 ">
                {/** Home component - Hero section */}
                <div className={'elibrary-hero w-full bg-blue-200'}>
                    <div className={"elibrary-overlay w-full bg-blue-900"}></div>
                    <div className={"elibray-hero-box flex justify-evenly items-evenly text-white"}>
                        <div className="bg-inherit relative top-5 bottom-0 left-16 right-0 w-6/12 z-10 mt-16 flex flex-col justify-left items-left">
                            <p>Anywhere Access Easy Learning</p>
                            <h1 className="text-5xl capitalize font-bold mt-5 mb-5">the best <span>platform</span> for  enhancing learning in the school of business</h1>
                            <p className="mb-10">Working collaboratively to ensure every students achieves academically, socially, and emotionally.</p>
                            <div className="elibrary-hero-searchbox p-1 w-9/12 border bg-white border-white flex justify-between items-between">
                                <input className='search-input w-8/12 p-2 bg-white border border-white text-slate-900' type={'text'} placeholder="e.g Business Law" />
                                <button className="search-button w-4/12 p-2 bg-blue-900 ">Search courses</button>
                            </div>
                            <div className={"flex gap-6 mt-8 justify-left items-left pl-2 text-sm"}>
                                <p>Learn Anywhere</p>   
                                <p>Lifetime Access</p>
                                <p>Current Slides</p>
                                <p>Past Questions</p>
                                <p>Timetables</p>
                            </div>
                        </div>
                        <div className="bg-inherit relative top-8 bottom-0 left-5 right-0 w-7/12 p-4 z-10 ">
                            <Image 
                                src={HeroImage} 
                                alt="elibrary" 
                                className="w-full"
                            />
                        </div>
                    </div>
                </div>
                {/** Home component - About Us section */}
                <div className={'w-full bg-blue-100 h-auto pt-16 pb-16'}>
                    <div className={"flex flex-row-reverse justify-evenly items-evenly"}>
                        <div className="bg-inherit h-60 w-5/12 mt-20 flex flex-col justify-left items-left">
                            <p className='font-bold'>About Us</p>
                            <h1 className="text-3xl capitalize mt-5 mb-5">the qualified and highly equipped platform</h1>
                            <p className="mb-10">
                                Anansi BeUnorthodox is a free education & learning platform, for the school of business students and working professionals, where they can practice <span>1 million+ past questions & answers</span>, get access to current slides & academic timetables.
                            </p>
                            <div className=" p-1 w-9/12 bg-inherit border-inherit flex justify-between items-between">
                                <button className="rounded border border-blue-900  p-2 bg-blue-900 text-white "> More Instructors </button>
                            </div>
                        </div>
                        <div className="image-radius bg-inherit w-5/12 p-5 ">
                            <Image 
                                src={InstructorsImage} 
                                alt="elibrary" 
                                className="w-full image-radius"
                            />
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}