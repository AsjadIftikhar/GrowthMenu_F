import React,{useState} from "react"
import Image from "next/image"
const DropDown=()=>{
    const [open,setOpen]=useState(false)

    return <div className="relative inline-block text-left w-full">
        <div className="text-DarkBlue font-semibold pb-1">Service</div>
    <form class="flex items-center">           
        <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg focus:ring-blue-500 focus:border-blue-500 block w-full  p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="All"/>
        <button onClick={()=>setOpen(!open)} type="submit" class=" p-2 w-10 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <Image src={"/images/dropdown.svg"} alt="" height={"15px"} width={"18px"}/>
        </button>

</form>
  

    <div className={`origin-top-right absolute right-0  w-56 ${open?'block':'hidden'} rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1`}>
      <div className="py-1" role="none">
        <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>
        <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Support</a>
        <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">License</a>
        <form method="POST" action="#" role="none">
          <button type="submit" className="text-gray-700 block w-full text-left px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Sign out</button>
        </form>
      </div>
    </div>
  </div>
}

export default DropDown