import Link from 'next/link'
import DeleteButton from '@/components/admin/slides/DeleteButton'

const getSlides = async () => {
    try{
        const res = await fetch("http://localhost:3000/api/slides", {
            cache: "no-store"
        });

        if(!res.ok){
            throw new Error("Failed to fetch Slides");
        }

        return res.json();

    } catch(error){
        console.log("Error loading Slides", error);
    }
}

export default async function AllSlidesComponent() {

    const { slides } = await getSlides();

    return(
        <>
            <div className='flex justify-between items-bteween mb-2 text-md text-slate-600'>
                <div className='flex gap-2'> 
                    Show   
                    <select>
                        <optgroup>
                            <option value={10}>10</option>
                            <option value={25}>25</option>
                            <option value={50}>50</option>
                            <option value={100}>100</option>
                        </optgroup>
                    </select> 
                    entries 
                </div>
                <div className=''> Search: <input type='text' /> </div>
            </div>

            <table className='w-full mb-20 border border-slate-200 text-md text-slate-600' cellSpacing={0}>
                <thead>
                    <tr className='border border-slate-200 text-md text-slate-600'>
    
                        <th className='border border-slate-200'>title</th>
                        <th className='border border-slate-200'>course</th>
                        <th className='border border-slate-200'>file</th>
                        <th className='border border-slate-200'>author</th>
                        
                        <th className='border border-slate-200'>Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                        slides.map((slide) => {
                            return( 
                            <>
                                <tr key={slide._id} className='border border-slate-200'>
                                
                                    <td className='border border-slate-200 p-2'>{ slide.title }</td>
                                    <td className='border border-slate-200 p-2'>{ slide.course }</td>
                                    <td className='border border-slate-200 p-2'>{ slide.filepath }</td>
                                    <td className='border border-slate-200 p-2'>{ slide.author }</td>
                                    
                                    <td className='flex gap-2 p-2'>
                                        <Link href={`/admin/dashboard/update-slide/${slide._id}`}> 
                                            <span className='text-white text-xs bg-blue-500 border border-blue rounded-md p-1 mb-5'>Update</span>
                                        </Link> <br />
                                        <DeleteButton id={slide._id} />
                                    </td>
                                </tr>
                            </>)
                        })
                    } 
                    
                </tbody>
            </table>

            <div className='flex justify-between items-between text-slate-600'>
                <p>Showing 1 to 1 of 1 entries</p>
                <div className='flex justify-center items-center'> 
                    <button className='bg-blue-100 border rounded-sm border-slate-300 p-1 text-sm'>Previous</button>
                    <span className='border rounded-sm border-slate-300 text-sm pl-4 p-1 pr-4'>1</span>
                    <button className='bg-blue-100 border rounded-sm border-slate-300 pl-4 p-1 pr-4 text-sm'>Next</button>
                </div>
            </div>
        </>
    )
}