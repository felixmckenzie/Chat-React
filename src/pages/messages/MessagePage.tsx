import React, { useState, FC } from 'react'
import SideBar from '../../components/SideBar'
import {messages} from '../../components/dummyData'
export const MessagePage: FC = () => {

    return (
        <div>
            <SideBar items={messages} type='messages' heading='All Chats'/>
        </div>
    )
}