import { useState } from 'react'
import { ChatBubbleBottomCenterIcon, EllipsisVerticalIcon, UsersIcon } from '@heroicons/react/24/outline'
import { MesssageItem } from './MessageItem'
import { List } from './List'
import { Avatar } from './Avartar'
import {messages} from './dummyData'
import { SideBarHeader } from './SideBarHeader'

type MenuKey = 'profile' | 'contacts' | 'chats'


const SideBar = (): JSX.Element => {

     const [menuState, setMenuState] = useState({
        profile: false,
        contacts: false,
        chats: false,
    })

    const toggleMenu = (key: MenuKey) => {
        setMenuState((prevState) => {
            const newState = {
                profile: false,
                contacts: false,
                chats: false,
            }
            newState[key] = !prevState[key]
            return newState
        })
    }

    const options = [
        {
            key: 'profile',
            display: <Avatar width={16} height={16} alt="avatar" avatarUrl={""} />,
            onClick: () => toggleMenu('profile'),
        },
        {
            key: 'chats',
            display: <ChatBubbleBottomCenterIcon className="w-5 h-5" />,
            onClick: () => toggleMenu('chats'),
        },
        {
            key: 'contacts',
            display: <UsersIcon className="w-5 h-5" />,
            onClick: () => toggleMenu('contacts'),
        },
    ]

    return (
       <div className="hidden md:flex flex-col h-screen w-4/12 overflow-hidden border-r border-x-slate-900 divide-y">
        <SideBarHeader options={options} />
        {menuState.chats && (
                <List>
                    <div>
                        {messages.map((message) => {
                            return <MesssageItem key={message.id} title={message.sender} text={message.text} date={message.timestamp} />
                        })}
                    </div>
                </List>
            )}
       </div>
    )
}

export default SideBar