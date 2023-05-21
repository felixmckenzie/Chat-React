import { gql } from "@apollo/client";

export default {
  CREATE_MESSAGE: gql`
    mutation CreateMessage($text: String!, $senderId: String!, $chatId: Int!) {
      createMessage(text: $text, senderId: $senderId, chatId: $chatId) {
        id
        text
        sender {
          id
          clerkId
          username
          avatar
          email
        }
      }
    }
  `,
  MESSAGE_SENT: gql`
    subscription MessageSent($chatId: Int!) {
      messageSent(chatId: $chatId) {
        id
        text
        sender {
          id
          clerkId
          username
          avatar
          email
        }
      }
    }
  `,
};
