export default function AddFileComponent() {
    return(
        <>
            <form className='text-sm text-slate-500 bg-inherit'>
                    <div className='mt-6 mb-3 flex flex-col gap-2 w-full'>
                        <label className='font-bold'> File Name </label>
                        <input 
                            type="text" 
                            name="student_id" 
                            placeholder="file name or title"
                            className="border border-solid border-gray-300 rounded-md p-4 w-full h-8" 
                            required
                        />
                    </div>
                    <div className='mt-6 mb-3 flex sm:flex-col md:flex-row gap-5 w-full justify-left'>
                        <div className='flex flex-col gap-2 w-full'>
                            <label className='font-bold'>File Type </label>
                            <input 
                                type="text" 
                                name="firstname" 
                                placeholder="select file type" 
                                className="border border-solid border-gray-300 rounded-md p-4 w-full h-8" 
                                required
                            />
                        </div>
                        <div className='flex flex-col gap-2 w-full'>
                            <label className='font-bold'> File Category </label>
                            <input 
                                type="text" 
                                name="othername" 
                                placeholder="select category" 
                                className="border border-solid border-gray-300 rounded-md p-4 w-full h-8" 
                                required
                            />
                        </div>
                    </div>
                    {/* <div className='mt-6 mb-3 flex flex-col gap-2 w-full'>
                        <label className='font-bold'> Course </label>
                        <input 
                            type="text" 
                            name="programme" 
                            placeholder="select course"
                            className="border border-solid border-gray-300 rounded-md p-4 w-full h-8" 
                            required
                        />
                    </div> */}
                    {/* <div className='mt-6 mb-3 flex sm:flex-col md:flex-row gap-5 w-full justify-left'>
                        <div className='flex flex-col gap-2 w-full'>
                            <label className='font-bold'> Level </label>
                            <input 
                                type="text" 
                                name="level" 
                                placeholder="select level" 
                                className="border border-solid border-gray-300 rounded-md p-4 w-full h-8" 
                                required
                            />
                        </div>
                        <div className='flex flex-col gap-2 w-full'>
                            <label className='font-bold'>Semester </label>
                            <input 
                                type="text" 
                                name="semester" 
                                placeholder="select semester" 
                                className="border border-solid border-gray-300 rounded-md p-4 w-full h-8" 
                                required
                            />
                        </div>
                    </div> */}
                    <div className='mt-6 mb-3 flex flex-col gap-2 w-full'>
                        <label className='font-bold'> Author </label>
                        <input 
                            type="text" 
                            name="authorname" 
                            placeholder="File uploaded by author's name" 
                            className="border border-solid border-gray-300 rounded-md p-4 w-full h-8" 
                        />
                    </div>
                    <div className='mt-6 mb-3 flex sm:flex-col md:flex-row gap-5 w-full justify-left'>
                        <div className='flex flex-col gap-2 w-full'>
                            <label className='font-bold'> Upload File </label>
                            <input 
                                type="file" 
                                name="fileName" 
                                accept="application/pdf" 
                                className="border border-solid border-gray-300 rounded-md p-1 w-full h-9" 
                                required
                            />
                        </div>
                        <div className='flex flex-col gap-2 w-full'>
                            <label className='font-bold'> Upload file image/logo </label>
                            <input 
                                type="file" 
                                name="fileImage" 
                                accept="images/*" 
                                className="border border-solid border-gray-300 rounded-md p-1 w-full h-9" 
                            />
                        </div>
                    </div>
                    <div className='mt-6 mb-3 flex flex-col gap-2 w-full'>
                        <label className='font-bold'> File Description </label>
                        <div 
                            className="border border-solid border-gray-300 rounded-md p-4 w-full h-32" 
                        >
                        </div>
                    </div>
                    <div className='flex gap-3 w-full justify-end items-end'>
                        <button type="submit" className='mt-6 mb-3 w-1/6 h-10 bg-blue-500 text-white font-bold border rounded-md'> Add </button>
                        <button type="reset" className='mt-6 mb-3 w-1/6 h-10 bg-red-500 text-white font-bold border rounded-md'> Cancel </button>
                    </div>
            </form>
        </>
    )
}