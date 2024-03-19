'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Back from "@/components/assets/images/icons/back.png"

export default function BackWardNavigator(){
    const router = useRouter();

    return(
        <>

            <button 
                onClick={ () => router.back() } 
                className="flex gap-2 mr-5"
            > 
                <Image src={ Back } alt='back icon' className={"w-5 mt-1"} /> 
                <p>Back</p> 
            </button>

        </>
    )
}