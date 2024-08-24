"use client";
import React, { useState } from "react";
import { BsArrowLeftShort, BsSearch } from "react-icons/bs";
import { AiFillEnvironment } from "react-icons/ai";
import { BiSolidDashboard } from "react-icons/bi";
import { MdInventory } from "react-icons/md";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { MdOutlineSell } from "react-icons/md";
import { PiUserFocusThin } from "react-icons/pi";
import { MdKeyboardArrowDown } from "react-icons/md";


const Sidebar2 = () => {
  const [active, setActive] = useState(true);
  const [open, setOpen] = useState(false);
  const menu = [
    { name: "Dashboard", link: "/dashboard", icon: <BiSolidDashboard /> },
    { name: "Inventory", link: "/dashboard/inventory", icon: <MdInventory /> },
    { name: "Top Selling", link: "/dashboard/top-selling", icon: <MdOutlineSell /> },
    {
      name: "Report",
      link: "/dashboard/report",
      icon: <HiOutlineDocumentReport />,
      submenu: true,
      submenuItems: [
        { name: "Product Summary", link: "/dashboard/report/product-summary" },
        { name: "Purchase", link: "/dashboard/report/purchase" },
        { name: "Sales", link: "/dashboard/report/sales" },
      ]
    },
    { name: "Customers", link: "/dashboard/customers", spacing: true, icon: <PiUserFocusThin /> },
    { name: "Settings", link: "/dashboard/settings", icon: <IoSettingsOutline /> },
    { name: "Logout", link: "/dashboard/logout", icon: <IoIosLogOut /> },
  ];

  return (
    <aside className="flex ">
      <div className={`bg-slate-500 h-screen p-5 pt-8 ${active ? "w-72" : "w-20"} duration-300 relative`} >
        <BsArrowLeftShort className={`bg-white text-green-800 rounded-full border border-cyan-800 text-3xl absolute -right-3 top-9 cursor-pointer ${!active && "rotate-180"}`} onClick={() => setActive(!active)} />
        <div className="inline-flex items-center">
          <AiFillEnvironment className={`bg-yellow-400 text-black text-4xl rounded-md cursor-pointer block float-left mr-2 duration-500 ${!active && "rotate-[360deg]"}`} />
          <h2 className={`text-white origin-left font-medium text-2xl duration-300 ${!active && "scale-0"}`}>
            Tailwind
          </h2>
        </div>
        <div className={`flex items-center rounded-md mt-6 bg-lime-300 ${!active ? "px-2.5" : "px-4"} py-2`} >
          <BsSearch className={`text-slate-600 block text-lg cursor-pointer float-left mr-1 ${!active && "mr-2"}`} />
          <input type="text" placeholder="Search" className={`text-black text-base bg-transparent focus:outline-none w-full ${!active && "hidden"}`} />
        </div>
        <ul className="pt-6">
          {menu.map((menu, index) => (
            <>
              <li key={index} className={`text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 duration-200 hover:bg-zinc-600 rounded-md ${menu.spacing ? 'mt-9' : 'mt-2'}`} >
                <span className="text-2xl block float-left">
                  {menu.icon}
                </span>
                <span href={menu.link} className={`text-white text-base font-medium flex-1 duration-300 ${!active && "hidden"}`} >
                  {menu.name}
                </span>
                {menu.submenu && active && (<MdKeyboardArrowDown className={`${open && 'rotate-180'}`} onClick={() => setOpen(!open)} />)}
              </li>
              {menu.submenu && open && active && (
                <ul className={`text-white text-sm cursor-pointer p-2 rounded-md ml-5 bg-slate-600`} >
                  {menu.submenuItems.map((Items, index) => (
                    <li key={index} className={`text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 rounded-md hover:bg-slate-400`} >
                      {Items.name}
                    </li>
                  ))}
                </ul>
              )}
            </>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar2;
