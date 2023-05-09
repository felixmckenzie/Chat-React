import { FormatDate } from '../utils'
import { Avatar } from './Avartar'
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline'

interface RequestItemProps {
    requestId: number
    username: string
    avatar: string
    handleRequestAction: (requestId: number, action: string) => void 
}

export const RequestItem = ({ requestId ,username, avatar, handleRequestAction }: RequestItemProps) => {
    return (
        <div className="flex w-8/12 p-2 border-y border-slate-300">
            <div className="flex flex-shrink items-center">
                <Avatar width={20} height={20} alt="avatar" avatarUrl={avatar} />
            </div>
            <div className="flex flex-grow justify-center overflow-y-hidden flex-col ml-4">
                <div className="flex justify-between items-center">
                    <h1><span className='font-bold'>{username}</span> would like to chat with you</h1>
                    <div className='gap-2'>
                    <button className='px-6' onClick={()=>handleRequestAction(requestId, 'ACCEPTED')}><CheckIcon className='w-5 h-5' /></button>
                    <button onClick={() => handleRequestAction(requestId, 'REJECTED')}><XMarkIcon className='w-5 h-5'/></button>
                    </div>
                </div>
                {/* <p className="truncate ...">{text}</p> */}
            </div>
        </div>
    )
}