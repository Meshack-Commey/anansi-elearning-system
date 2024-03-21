import Image from 'next/image'
//import MeshackCommeyImg from '@/components/assets/images/png/meshofficial.jpg'
import KelvinImg from '@/components/assets/images/png/kelvin.jpg'
import FeliciaImg from '@/components/assets/images/png/felicia.jpg'
import AugustineImg from '@/components/assets/images/png/augustine.jpg'
import UserImg from '@/components/assets/images/icons/user (3).png'
import Link from 'next/link'


const professionals = [
    {
        "id": 1,
        "name": "kelvin yeboah",
        "position": "specialist in design thinking and innovation",
        "description": "Glad to assist you",
        "profilePicture": KelvinImg,
        "linkedin": "",
        "portfolioUrl": "",
    },
    {
        "id": 2,
        "name": "Felicia Adjei",
        "position": "expert in Logistics Management",
        "description": "Felicia Adjei is an expert in Logistics management, looking forward to get in touch with you.",
        "profilePicture": FeliciaImg,
        "linkedin": "",
        "portfolioUrl": "",
    },
    {
        "id": 3,
        "name": "Augustine Agyapong",
        "position": "Data Analytics Specialist",
        "description": "Glad to assist you",
        "profilePicture": AugustineImg,
        "linkedin": "",
        "portfolioUrl": "",
    },
    {
        "id": 4,
        "name": "Lerry Kojo Bruce",
        "position": "",
        "description": "",
        "profilePicture": UserImg,
        "linkedin": "",
        "portfolioUrl": "",
    },
    {
        "id": 5,
        "name": "Christiana Martina Afum",
        "position": "",
        "description": "",
        "profilePicture": UserImg,
        "linkedin": "",
        "portfolioUrl": "",
    },
    {
        "id": 6,
        "name": "Andoh Kofi Quansah",
        "position": "",
        "description": "",
        "profilePicture": UserImg,
        "linkedin": "",
        "portfolioUrl": "",
    },
    // {
    //     "id": 7,
    //     "name": "Meshack Commey",
    //     "position": "Software Developer",
    //     "description": "Meshack Commey is an expert software engineer with extensive experience in software architecture, design, and development.",
    //     "profilePicture": MeshackCommeyImg,
    //     "linkedin": "",
    //     "portfolioUrl": "",
    // },
]


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
                    professionals.map(({id, name, position, description, profilePicture, linkedin, portfolioUrl}) => {
                        return(
                            <>
                                <div key={id} className={'w-full bg-inherit h-auto pt-6 pb-6'}>
                                    <div className={"flex flex-row-reverse justify-evenly items-evenly"}>
                                        <div className="bg-inherit h-60 w-5/12 mt-20 flex flex-col justify-left items-left">
                                            <h1 className="text-3xl font-bold text-blue-900 capitalize mt-5 mb-2">{ name }</h1>
                                            <p className="mb-5"> { position } </p>
                                            <Link href={linkedin}>
                                                <div className=" bg-inherit border-inherit flex justify-between items-between">
                                                    <button className="linkedin-button border border-gray-900 p-1 bg-blue-100 text-slate-900 "> In </button>
                                                </div>
                                            </Link>
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