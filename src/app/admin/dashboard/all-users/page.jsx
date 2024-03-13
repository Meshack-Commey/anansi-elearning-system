import AllUsersComponent from '@/components/admin/users/AllUsersComponent'


export default function AllUsers() {
    return (
    <>
        <section className='pl-10 pr-10 pt-5 pb-5 bg-white'>

            <p className='mb-10 text-lg text-start text-slate-500 font-bold'> All Registered Students </p>
            {/** All Registered Users Component */}
            <AllUsersComponent />

        </section>
    </>
    )
}
