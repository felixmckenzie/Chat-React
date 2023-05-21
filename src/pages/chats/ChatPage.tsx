import { useState, useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import { useLocation } from "react-router-dom";
import { useQuery, useMutation } from '@apollo/client';
import { useForm } from 'react-hook-form'
import { DialoguePane } from "../../components/DialoguePane";
import { Input } from "../../components/Input";
import queries from '../../queries'

 
export function NewChatPage () {

      const [messages, setMessages] = useState([])
      const [currentChatId, setCurrentChatId] = useState(null);
      const {user} = useUser()
      const {state} = useLocation()
      const {contactId, username} = state


      const {loading, error, data: chatData, subscribeToMore} = useQuery(queries.GET_CHAT, {
        variables: {userIds: [user?.id, contactId]},
        onCompleted: (data) => {
            if(data?.getChatBetweenUsers){
                setCurrentChatId(data.getChatBetweenUsers?.id)
                setMessages(data.getChatBetweenUsers.messages)
            }
        },
      })

      const [createChat] = useMutation(queries.CREATE_CHAT)

      const [createMessage] = useMutation(queries.CREATE_MESSAGE)

      
       const { handleSubmit, register, reset } = useForm({
        defaultValues: {
            message: '',
        },
    })

      const sendMessage = async (data) => {
        let chatId = currentChatId
        if(!chatId){
            const {data: chatData} = await createChat({variables:{ input: {name: username, userIds: [user.id, contactId]}}})
            chatId = chatData?.createChat?.id
            setCurrentChatId(chatData?.createChat?.id)
        }
       const{data: messageData} = await createMessage({variables: {text: data.message, senderId: user.id, chatId: chatId}})
       if(messageData){
        reset()
       }
      }

      const subscribeToNewMessages = () => {
       
        if(currentChatId) {
        subscribeToMore({
            document: queries.MESSAGE_SENT, 
            variables: {chatId: currentChatId},
            updateQuery: (prev, {subscriptionData}) => {
                console.log(subscriptionData)
                if(!subscriptionData) return prev
                const newMessage = subscriptionData?.data?.messageSent
                
               const updatedData = {
                    ...prev,
                    getChatBetweenUsers: {
                        ...prev.getChatBetweenUsers,
                        messages: [...prev.getChatBetweenUsers.messages, newMessage]
                    }
                }
                setMessages((prev) => [...prev, newMessage])
                return updatedData
            }
        })
    }
      }

      useEffect(()=>{
        subscribeToNewMessages()
    },[currentChatId])


    return (
        <div className="flex flex-col h-full w-full">
            <div className=" flex-grow overflow-auto p-2">
                <DialoguePane messages={messages} user={user}/>
            </div>
             <form className="sticky bottom-0 bg-slate-200 w-full p-4" onSubmit={handleSubmit(sendMessage)}>
                <Input label="Send Message" name="message" placeholder="message" register={register}>
                  <div className="absolute inset-y-0 right-0 flex items-center p-4">
                        <button type="submit" className="rounded p-2 bg-highlight text-light text-xs">
                            Send
                        </button>
                    </div>
                </Input>
            </form>
            </div>
    )
}