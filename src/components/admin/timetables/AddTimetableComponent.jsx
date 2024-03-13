export default function AddUserComponent() {
    return(
        <>
            <form className='text-sm text-slate-500 bg-inherit'>
                    <div className='mt-6 mb-3 flex flex-col gap-2 w-full'>
                        <label className='font-bold'> Student ID </label>
                        <input 
                            type="text" 
                            name="student_id" 
                            placeholder="SB/MKN/20/0041"
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
                                placeholder="Student first name" 
                                className="border border-solid border-gray-300 rounded-md p-4 w-full h-8" 
                                required
                            />
                        </div>
                        <div className='flex flex-col gap-2 w-full'>
                            <label className='font-bold'>Other Name(s) </label>
                            <input 
                                type="text" 
                                name="othername" 
                                placeholder="Student other name(s)" 
                                className="border border-solid border-gray-300 rounded-md p-4 w-full h-8" 
                                required
                            />
                        </div>
                    </div>
                    <div className='mt-6 mb-3 flex flex-col gap-2 w-full'>
                        <label className='font-bold'> Last Name </label>
                        <input 
                            type="text" 
                            name="lastname" 
                            placeholder="Student last name"
                            className="border border-solid border-gray-300 rounded-md p-4 w-full h-8" 
                            required
                        />
                    </div>
                    <div className='mt-6 mb-3 flex flex-col gap-2 w-full'>
                        <label className='font-bold'>Email Address </label>
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Enter email address"
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
                                placeholder="Enter phone number" 
                                className="border border-solid border-gray-300 rounded-md p-4 w-full h-8" 
                                required
                            />
                        </div>
                        <div className='flex flex-col gap-2 w-full'>
                            <label className='font-bold'>Password </label>
                            <input 
                                type="password" 
                                name="password" 
                                placeholder="Enter password" 
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
                            placeholder="select programme" 
                            className="border border-solid border-gray-300 rounded-md p-4 w-full h-8" 
                            required
                        />
                    </div>
                    <div className='mt-6 mb-3 flex gap-5 w-full justify-left'>
                        <div className='flex flex-col gap-2 w-full'>
                            <label className='font-bold'> Level </label>
                            <input 
                                type="text" 
                                name="academic_level" 
                                placeholder="Select academic level" 
                                className="border border-solid border-gray-300 rounded-md p-4 w-full h-8" 
                                required
                            />
                        </div>
                        <div className='flex flex-col gap-2 w-full'>
                            <label className='font-bold'>Semester </label>
                            <input 
                                type="text" 
                                name="semester" 
                                placeholder="Select Semester" 
                                className="border border-solid border-gray-300 rounded-md p-4 w-full h-8" 
                            />
                        </div>
                    </div>
                    <div className='mt-6 mb-3 flex flex-col gap-2 w-full'>
                        <label className='font-bold'>Registered Courses </label>
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