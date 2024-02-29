

export default function DocumentViewer(){
    return(
        <>
            <div className="w-full h-screen bg-slate-100 flex flex-col justify-center items-center">
                <p className="text-slate-500 font-bold text-md">Ooops!, Document Viewer not responding</p>
                <div className='error-icon'>
                    <p>X</p>
                </div>
            </div>
        </>
    )
}