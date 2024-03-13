import AllSlidesComponent from '@/components/admin/slides/AllSlidesComponent'

export default function AllSlides() {

    return(
        <>
            <section className='pl-10 pr-10 pt-5 pb-5 bg-white'>
                <p className='mb-3 text-start text-slate-600 text-lg'> All Current Slides </p>
                <hr />
                {/** All Slides Component */}
                <AllSlidesComponent />
            </section>
        </>
    )
}