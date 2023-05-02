import { Link } from "react-router-dom"

const ChatCard = ({title, text, user}): JSX.Element => {

    return (
        <div className="flex flex-col w-full cursor-pointer  border-t-2 border-primary" >
        <Link to={user}>
         <h3>{title}</h3>
        <div>{text}</div>
        </Link>
        </div>
       
    )
}

export default ChatCard