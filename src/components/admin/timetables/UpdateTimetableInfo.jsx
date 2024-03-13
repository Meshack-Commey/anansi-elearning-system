export default function UpdateUserInfo() {
    return(
        <>
            <form className='text-sm text-slate-500 bg-inherit'>
                    <div className='mt-6 mb-3 flex flex-col gap-2 w-full'>
                        <label className='font-bold'> Student ID </label>
                        <input 
                            type="text" 
                            name="student_id" 
                            value={"SB/MKN/20/0041"}
                            className="border border-solid border-gray-300 rounded-md p-4 w-full h-8" 
                            required
                        />
                    </div>
                    <div className='mt-6 mb-3 flex gap-5 w-full justify-left'>
                        <div className='flex flex-col gap-2 w-full'>
                            <label className='font-bold'>First Name </label>
                            <input 
                                type="text" 
                                name="firstname" 
                                value={"Kelvin"} 
                                className="border border-solid border-gray-300 rounded-md p-4 w-full h-8" 
                                required
                            />
                        </div>
                        <div className='flex flex-col gap-2 w-full'>
                            <label className='font-bold'>Other Name(s) </label>
                            <input 
                                type="text" 
                                name="othername" 
                                value={""} 
                                className="border border-solid border-gray-300 rounded-md p-4 w-full h-8" 
                            />
                        </div>
                    </div>
                    <div className='mt-6 mb-3 flex flex-col gap-2 w-full'>
                        <label className='font-bold'> Last Name </label>
                        <input 
                            type="text" 
                            name="lastname" 
                            value={"Yeboah"}
                            className="border border-solid border-gray-300 rounded-md p-4 w-full h-8" 
                            required
                        />
                    </div>
                    <div className='mt-6 mb-3 flex flex-col gap-2 w-full'>
                        <label className='font-bold'>Email Address </label>
                        <input 
                            type="email" 
                            name="email" 
                            value={"kelly@gmail.com"}
                            className="border border-solid border-gray-300 rounded-md p-4 w-full h-8" 
                            required
                        />
                    </div>
                    <div className='mt-6 mb-3 flex gap-5 w-full justify-left'>
                        <div className='flex flex-col gap-2 w-full'>
                            <label className='font-bold'> Phone number </label>
                            <input 
                                type="tel" 
                                name="phone_number" 
                                value={"0544345836"} 
                                className="border border-solid border-gray-300 rounded-md p-4 w-full h-8" 
                            />
                        </div>
                        <div className='flex flex-col gap-2 w-full'>
                            <label className='font-bold'>Password </label>
                            <input 
                                type="password" 
                                name="password" 
                                value={"djijiejijifef"} 
                                className="border border-solid border-gray-300 rounded-md p-4 w-full h-8" 
                                required
                            />
                        </div>
                    </div>
                    <div className='mt-6 mb-3 flex flex-col gap-2 w-full'>
                        <label className='font-bold'>Programme of Study </label>
                        <input 
                            type="text" 
                            name="program_of_study" 
                            value={"B.Com. Marketing"} 
                            className="border border-solid border-gray-300 rounded-md p-4 w-full h-8" 
                            required
                        />
                    </div>
                    <div className='mt-6 mb-3 flex gap-5 w-full justify-left'>
                        <div className='flex flex-col gap-2 w-full'>
                            <label className='font-bold'> Level </label>
                            <input 
                                type="number" 
                                name="academic_level" 
                                value={400} 
                                className="border border-solid border-gray-300 rounded-md p-4 w-full h-8" 
                                required
                            />
                        </div>
                        <div className='flex flex-col gap-2 w-full'>
                            <label className='font-bold'>Semester </label>
                            <input 
                                type="text" 
                                name="semester" 
                                value="1st Semester" 
                                className="border border-solid border-gray-300 rounded-md p-4 w-full h-8" 
                            />
                        </div>
                    </div>
                    <div className='mt-6 mb-3 flex flex-col gap-2 w-full'>
                        <label className='font-bold'>Registered Courses </label>
                        <div 
                            className="border border-solid border-gray-300 rounded-md p-4 w-full h-32" 
                        >
                            <ul>
                                <li>Enterpreneurship</li>
                                <li>Project Management</li>
                                <li>etc.</li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex gap-3 w-full justify-end items-end'>
                        <button type="submit" className='mt-6 mb-3 w-1/6 h-10 bg-blue-500 text-white font-bold border rounded-md'> Update </button>
                        <button type="reset" className='mt-6 mb-3 w-1/6 h-10 bg-red-500 text-white font-bold border rounded-md'> Cancel </button>
                    </div>
            </form>
        </>
    )
}