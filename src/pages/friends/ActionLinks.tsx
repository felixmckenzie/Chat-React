import { Outlet } from 'react-router-dom'
import SideBar from '../../components/SideBar'
import { SideBarConfig } from '../../config/sideBarConfig'

export const ActionLinksLayout = () => {

    return(
        <div className='flex w-full h-full'>
            <SideBar items={SideBarConfig.friendPageNav} type='links' heading='Friends' />
            <Outlet/>
        </div>
    )
}