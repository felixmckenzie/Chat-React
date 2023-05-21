import { useQuery } from "@apollo/client";
import { Outlet } from 'react-router-dom'
import { useState } from "react";
import { useUser } from "@clerk/clerk-react";
import queries from '../../queries'
import SideBar from '../../components/SideBar'

export const ContactLinksLayout = () => {
const { user } = useUser();
const [friends, setFriends] = useState([])

const { loading, error, data } = useQuery(queries.GET_USER_FRIENDS, {
    variables: { clerkId: user?.id },
    onCompleted: (data) => {
    setFriends(data.getUser.friends)
    },
  });

      return(
        <div className='flex w-full h-full'>
                <SideBar items={friends} type='friends' heading='Friends' />
            <Outlet/>
        </div>
    )
}