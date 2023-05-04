import { FC } from "react"
import { Outlet } from "react-router-dom";
import { Navbar } from '../components/NavBar';
import { Tooltip } from '../components/ToolTip';
import { NavConfig } from '../config/MainNavConfig';
import { UserButton } from '@clerk/clerk-react';
import { InboxIcon } from '@heroicons/react/24/outline'

export const RootLayout: FC = () => {

    return (
        <>
        <div className="flex h-16 justify-between items-center border-b border-b-slate-900 px-4">
            <Navbar items={NavConfig.mainNav} />
             <nav className="flex gap-6 items-center">
              <Tooltip content="Inbox">
                                <InboxIcon className="w-5 h-5 text-headline-text" />
                        </Tooltip>
                 <UserButton/>      
           </nav>
         </div>
         <Outlet/>
        </>
        
    )
}