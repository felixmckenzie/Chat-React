import { FormatDate } from '../utils'
import { Avatar } from './Avartar'

interface DetailCardProps {
    title: string
    text: string
    avatar?: string
    date?: string
}


export const DetailCard = ({ title, text, date, avatar }: DetailCardProps) => {
    return (
        <div className="flex w-full p-2 border-b">
            <div className="flex flex-shrink items-center">
                <Avatar width={20} height={20} alt="avatar" avatarUrl={avatar} />
            </div>
            <div className="flex flex-grow overflow-y-hidden flex-col ml-4">
                <div className="flex justify-between items-center">
                    <h1>{title}</h1>
                    {date && <span className="text-right text-xs truncate ...">{FormatDate(date)}</span>}
                </div>
                <p className="text-xs truncate ...">{text}</p>
            </div>
        </div>
    )
}