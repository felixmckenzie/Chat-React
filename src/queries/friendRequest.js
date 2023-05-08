import { gql } from "@apollo/client";

export default {
  SEND_FRIEND_REQUEST: gql`
    mutation SendFriendRequest($clerkId: String!, $contactUserEmail: String!) {
      sendFriendRequest(
        clerkId: $clerkId
        contactUserEmail: $contactUserEmail
      ) {
        id
        receiver {
          id
          clerkId
          username
          email
        }
        status
      }
    }
  `,
  FRIEND_REQUESTS_RECEIVED: gql`
    query FriendRequestsReceivedByUser($clerkId: String!) {
      friendRequestsReceivedByUser(clerkId: $clerkId) {
        id
        sender {
          clerkId
          username
          email
        }
        receiver {
          clerkId
          username
          email
        }
        status
      }
    }
  `,
  FRIEND_REQUESTS_SENT: gql`
    query FriendRequestsSentByUser($clerkId: String!) {
      friendRequestsSentByUser(clerkId: $clerkId) {
        id
        sender {
          clerkId
          username
          email
        }

        receiver {
          clerkId
          username
          email
        }
        status
      }
    }
  `,
};
