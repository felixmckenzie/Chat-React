import friendRequest from "./friendRequest";
import user from "./user";
import chat from "./chat";
import message from "./message";

export default {
  ...user,
  ...friendRequest,
  ...chat,
  ...message,
};
