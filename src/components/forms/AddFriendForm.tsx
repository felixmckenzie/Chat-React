import { FC } from 'react'
import { useMutation } from '@apollo/client'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { Input } from '../Input'

interface AddFriendInput {
    contactUserEmail: string
}

export const AddFriendForm: FC = () => {
    

    const { handleSubmit, register } = useForm<AddFriendInput>({
        defaultValues: {
            contactUserEmail: '',
        },
    })

    // const [sendFriendRequest, { error: friendRequestError }] = useMutation(queries.SEND_FRIEND_REQUEST, {
    //     client,
    //     onCompleted: (data) => {
    //         const receiverUsername = data?.sendFriendRequest?.receiver.username
    //         toast.success(`Friend Request Sent to ${receiverUsername}`)
    //     },
    //     onError: (e) => {
    //         if (e && friendRequestError) {
    //             toast.error(friendRequestError?.message)
    //         } else {
    //             toast.error('Failed to Send! Please Try Again Later')
    //         }
    //     },
    // })

    // const onSubmit = async (data: AddFriendInput) => {
    //     try {
    //         await sendFriendRequest({ variables: { clerkId: user?.id, contactUserEmail: data.contactUserEmail } })
    //     } catch (e) {
    //         toast.error(e.message)
    //     }
    // }

    return (
        <div className="w-1/2">
            <form>
                <Input label="CaSe SeNsItIvE" name="addFriend" placeholder="Enter Email Address" register={register}>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2">
                        <button type="submit" className=" bg-tertiary rounded p-2 text-headline-text text-xs">
                            Send Friend Request
                        </button>
                    </div>
                </Input>
            </form>
        </div>
    )
}
