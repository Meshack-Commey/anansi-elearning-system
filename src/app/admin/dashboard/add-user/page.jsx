import AddUserComponent from '@/components/admin/users/AddUserComponent'

export default function AddUser() {

    return(
        <>
            <section className='pl-10 pr-10 pt-5 pb-5 bg-white'>
                <p className='mb-3 text-start text-slate-600 text-lg'> Add User </p>
                <hr />
                {/** Add Users Component */}
                <AddUserComponent />
            </section>
        </>
    )
}