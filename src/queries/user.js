import { gql } from "@apollo/client";

export default {
  GET_USER: gql`
    query GetUser($clerkId: String!) {
      getUser(clerkId: $clerkId) {
        clerkId
        username
        email
        avatar
        friends {
          clerkId
          username
          email
          avatar
        }
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
};
