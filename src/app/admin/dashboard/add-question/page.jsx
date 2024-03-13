import AddQuestionComponent from '@/components/admin/questions/AddQuestionComponent'

export default function AddQuestion() {

    return(
        <>
            <section className='pl-10 pr-10 pt-5 pb-5 bg-white'>
                <p className='mb-3 text-start text-slate-600 text-lg'> Add Past Question </p>
                <hr />
                {/** Add Question Component */}
                <AddQuestionComponent />
            </section>
        </>
    )
}