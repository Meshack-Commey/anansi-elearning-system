import AddAdminComponent from '@/components/admin/admins/AddAdminComponent'

export default function AddAdmin() {

    return(
        <>
            <section className='pl-10 pr-10 pt-5 pb-5 bg-white'>
                <p className='mb-3 text-start text-slate-600 text-lg'> Add Admin </p>
                <hr />
                {/** Add Admins Component */}
                <AddAdminComponent />
            </section>
        </>
    )
}