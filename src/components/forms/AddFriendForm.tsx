import { FC } from 'react'
import { useMutation } from '@apollo/client'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { useUser } from '@clerk/clerk-react'
import { Input } from '../Input'
import queries from '../../queries'

interface AddFriendInput {
    contactUserEmail: string
}

export const AddFriendForm: FC = () => {
    const { user } = useUser()

    const { handleSubmit, register } = useForm<AddFriendInput>({
        defaultValues: {
            contactUserEmail: '',
        },
    })

    const [sendFriendRequest, { error: friendRequestError }] = useMutation(queries.SEND_FRIEND_REQUEST, {
        onCompleted: (data) => {
            const receiverUsername = data?.sendFriendRequest?.receiver.username
            toast.success(`Friend Request Sent to ${receiverUsername}`)
        },
        onError: (e) => {
            if (e && friendRequestError) {
                toast.error(friendRequestError?.message)
            } else {
                toast.error('Failed to Send! Please Try Again Later')
            }
        },
    })

    const onSubmit = async (data: AddFriendInput) => {
        try {
            await sendFriendRequest({ variables: { clerkId: user?.id, contactUserEmail: data.contactUserEmail } })
        } catch (e) {
            toast.error(e.message)
        }
    }

    return (
        <div className="w-1/2">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input label="CaSe SeNsItIvE" name="addFriend" placeholder="Enter Email Address" register={register}>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2">
                        <button type="submit" className="rounded p-2 bg-highlight text-light text-xs">
                            Send Friend Request
                        </button>
                    </div>
                </Input>
            </form>
        </div>
    )
}
