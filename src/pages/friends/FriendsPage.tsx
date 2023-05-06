import SideBar from '../../components/SideBar'
import { SideBarConfig } from '../../config/sideBarConfig'

export const FriendsPage = () => {

    return(
        <div>
            <SideBar items={SideBarConfig.friendPageNav} type='friends' heading='Friends' />
        </div>
    )
}