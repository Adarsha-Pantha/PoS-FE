import React from 'react'
import InventorySummary from './_component/InventorySummary'
import SalesOverview from './_component/SalesOverview'
import PurchaseOverview from './_component/PurchaseOverview'
import TopSelling from './_component/TopSelling'
import Sidebar2 from './_component/Sidebar2'
import Navbar from './_component/Navbar'

const page = () => {
    return (
        <>
            <div className='flex md:flex-row'>
                <div>
                    <Sidebar2 />
                </div>
                <div className=" flex flex-col w-full h-full">
                    <div>
                        <Navbar />
                    </div>
                    <div className='p-5'>
                        <PurchaseOverview />
                        <SalesOverview />
                        <InventorySummary />
                        <TopSelling />
                    </div>
                </div>
            </div>
        </>
    )
}

export default page