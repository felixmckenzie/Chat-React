import { gql } from "@apollo/client";

export default {
  GET_USER_REQUESTS: gql`
    query GetUser($clerkId: String!) {
      getUser(clerkId: $clerkId) {
        clerkId
        email
        receivedRequests {
          id
          status
          sender {
            clerkId
            username
            email
            avatar
          }
        }
      }
    }
  `,
  GET_USER_FRIENDS: gql`
    query GetUser($clerkId: String!) {
      getUser(clerkId: $clerkId) {
        clerkId
        email
        friends {
          clerkId
          username
          email
          avatar
        }
      }
    }
  `,
};
