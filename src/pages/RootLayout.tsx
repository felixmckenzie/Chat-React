import { FC } from "react"
import { Outlet } from "react-router-dom";
import { Navbar } from '../components/NavBar';
import { Tooltip } from '../components/ToolTip';
import { NavConfig } from '../config/MainNavConfig';
import { UserButton } from '@clerk/clerk-react';
import { InboxIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline'
import { useTheme } from "../providers/themeProvider";

export const RootLayout: FC = () => {
const {theme, toggleTheme} = useTheme()

    return (
        <>
        <div className="flex h-16 justify-between items-center border-b border-b-slate-900 px-4">
            <Navbar items={NavConfig.mainNav} />
             <nav className="flex gap-6 items-center">
              <Tooltip content="Inbox">
                                <InboxIcon className="w-5 h-5 text-headline-text" />
                        </Tooltip>
                <button onClick={toggleTheme}>{
                    theme === 'light' ? <SunIcon className="w-5 h-5"/> : <MoonIcon className="w-5 h-5"/>}
                </button>
                 <UserButton/>      
           </nav>
         </div>
         <Outlet/>
        </>
        
    )
}