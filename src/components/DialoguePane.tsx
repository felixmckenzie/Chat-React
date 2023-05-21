

export function DialoguePane ({messages, user}) {

    
    return (

        <div className='flex flex-col space-y-3 p-3 px-4 overflow-y-auto h-full'>
                {messages && messages.map((msg)=> (
                    <div key={msg.id} className={`max-w-2/3 break-words ${
                        msg.sender.clerkId === user.id
                            ? 'self-end bg-blue-500 text-white rounded-l-lg rounded-t-lg'
                            : 'self-start bg-gray-300 text-black rounded-r-lg rounded-t-lg'
                    } p-2`}>
                        {msg.text}
                    </div>
                ))}
        </div>
    )
}