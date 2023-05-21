import { gql } from "@apollo/client";

export default {
  GET_CHAT: gql`
    query GetChatBetweenUsers($userIds: [String!]!) {
      getChatBetweenUsers(userIds: $userIds) {
        id
        name
        messages {
          text
          sender {
            clerkId
            email
            username
            avatar
          }
        }
      }
    }
  `,
  CREATE_CHAT: gql`
    mutation CreatChat($input: CreateChatInput!) {
      createChat(input: $input) {
        id
        members {
          clerkId
          username
        }
      }
    }
  `,
};
