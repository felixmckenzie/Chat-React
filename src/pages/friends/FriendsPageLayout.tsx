import { Outlet } from 'react-router-dom'
import SideBar from '../../components/SideBar'
import { SideBarConfig } from '../../config/sideBarConfig'

export const FriendsPageLayout = () => {

    return(
        <div className='flex w-full h-full'>
            <SideBar items={SideBarConfig.friendPageNav} type='friends' heading='Friends' />
            <Outlet/>
        </div>
    )
}