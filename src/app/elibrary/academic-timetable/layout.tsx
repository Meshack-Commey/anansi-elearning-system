

export default function TimetableLayout({
    children,
}:{
    children: React.ReactNode,
}){
    return(
        <>
            <main className='p-14 pt-20 w-full'>
                { children }
            </main>
        </>
    )
}