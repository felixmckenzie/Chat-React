import { useState } from 'react'
import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'
import { cn } from '../utils'
import { MobileNav } from './MobileNav'

export const Navbar = ({ items, children, className }: NavProps) => {
    const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false)

    return (
        <nav className="flex gap-6 md:gap-10">
            <div className='font-bold bg-highlight p-1 rounded'>Dev Chat</div>
            {items?.length && (
                <div className="hidden gap-6 md:flex">
                    {items?.map((item, index) => (
                        <li className={cn(
                                'flex items-center text-lg font-semibold  sm:text-sm text-headline-text',
                                item.disabled && 'cursor-not-allowed opacity-80',

                            )}>
                            <Link key={index} to={item.disabled ? '#' : item.href}>
                            {item.title}
                        </Link>
                        </li>
                       
                    ))}
                </div>
            )}
            <button className="flex items-center space-x-2 md:hidden" onClick={() => setShowMobileMenu(!showMobileMenu)}>
                {showMobileMenu ? <XMarkIcon className="h-4 w-4" /> : <Bars3Icon className="h-4 w-4" />}
                <span className="font-bold">Menu</span>
            </button>
            {showMobileMenu && items && <MobileNav items={items}>{children}</MobileNav>}
        </nav>
    )
}
