import queries from '../../queries'
import { useQuery } from '@apollo/client'
import { useUser } from '@clerk/clerk-react'

export function FriendRequestPage () {
        const { user } = useUser()

     const { loading, error, data } =  useQuery(queries.GET_USER, {
    variables: { clerkId: user?.id },
  })

  if (loading) return <div>...Loading</div>;
  if (error) return <div>Erro: {error.message}</div>


console.log(data?.getUser)

    return (
        <div>Success</div>
    )
}