import { Link } from "react-router-dom"
import { ArrowRightIcon } from "@heroicons/react/24/outline"

export const SideBarLink = ({href, title}) => {
return(
<li className='flex w-full items-center rounded-md px-4 py-2 hover:underline hover:bg-slate-200'>
    <Link className='flex w-full items-center justify-between' to={href}>
        <span>{title}</span>
        <ArrowRightIcon className='w-5 h-5'/>
    </Link>
</li>
)
}