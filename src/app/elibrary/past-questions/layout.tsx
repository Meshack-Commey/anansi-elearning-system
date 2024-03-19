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
                    <Link href={"/elibrary/past-questions/100"}>
                        <h1>Level 100</h1>
                    </Link>
                    <Link href={"/elibrary/past-questions/200"}>
                        <h1>Level 200</h1>
                    </Link>
                    <Link href={"/elibrary/past-questions/300"}>
                        <h1>Level 300</h1>
                    </Link>
                    <Link href={"/elibrary/past-questions/400"}>
                        <h1>Level 400</h1>
                    </Link>
                    {/* <Link href={"/elibrary/past-questions/others"}>
                        <h1>Others</h1>
                    </Link> */}
                </nav>

            </header>
            <main className='w-10/12 bg-inherit'>
                { children }
            </main>
        </div>
    )
}