
type User = {
  id: number
  clerkId: string
  createdAt: string 
  updatedAt: string 
  email: string 
  avatar: string 
  username: string 
  isOnline: boolean 
  chats: Chat[]
  messages: Message[]
  friends: User[]
  friendOf: User[]
  sentRequests: FriendRequest[]
  receivedRequests: FriendRequest[]
}

type Chat = {
  id: number
  name: string 
  members: User[]
  messages: Message[]
}

type Message = {
  id: number 
  text: string
  sender: User
  chat: Chat
  timestamp: string
}

type FriendRequest = {
  id: number 
  sender: User
  receiver: User
  status: FriendRequestStatus
}

type FriendRequestStatus =   'PENDING' | 'ACCEPTED' | 'REJECTED'

type CreateMessageInput = {
  text: string
}

 