import AllAdminsComponent from '@/components/admin/admins/AllAdminsComponent'


export default function AllAdmins() {
    return (
    <>
        <section className='pl-10 pr-10 pt-5 pb-5 bg-white'>

            <p className='mb-10 text-lg text-start text-slate-500 font-bold'> All Administrators </p>
            {/** All Registered Users Component */}
            <AllAdminsComponent />

        </section>
    </>
    )
}
