import React from 'react'
import InventorySummary from './_component/InventorySummary'
import SalesOverview from './_component/SalesOverview'
import PurchaseOverview from './_component/PurchaseOverview'
import TopSelling from './_component/TopSelling'
import Sidebar from './_component/Sidebar'
import Navbar from './_component/Navbar'

const page = () => {
    return (
        <>
            <div className='flex md:flex-row'>
                <div className=' min-h-screen w-2/12'>
                    <Sidebar />
                </div>
                <div className=" flex flex-col w-full bg-green-500">
                    <div className='bg-blue-500 h-16'>
                        <Navbar />
                    </div>
                    <div>
                        <TopSelling />
                        <PurchaseOverview />
                        <SalesOverview />
                        <InventorySummary />
                    </div>
                </div>
            </div>
        </>
    )
}

export default page