import AddSlideComponent from '@/components/admin/slides/AddSlideComponent'

export default function AddSlide() {

    return(
        <>
            <section className='pl-10 pr-10 pt-5 pb-5 bg-white'>
                <p className='mb-3 text-start text-slate-600 text-lg'> Add Slide </p>
                <hr />
                {/** Add Slide Component */}
                <AddSlideComponent />
            </section>
        </>
    )
}