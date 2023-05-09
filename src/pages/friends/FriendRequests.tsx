import { useState } from "react";
import queries from "../../queries";
import { useQuery, useMutation } from "@apollo/client";
import { toast } from "react-hot-toast";
import { useUser } from "@clerk/clerk-react";
import { PageHeader } from "../../components/PageHeader";
import { List } from "../../components/List";
import { RequestItem } from "../../components/RequestItem";

export function FriendRequestPage() {
  const { user } = useUser();
  const [friendRequests, setFriendRequests] = useState([]);

  const { loading, error, data } = useQuery(queries.GET_USER, {
    variables: { clerkId: user?.id },
    onCompleted: (data) => {
      console.log(data.getUser)
      const requestsReceived = data?.getUser?.receivedRequests;
      setFriendRequests(requestsReceived);
    },
  });

  const [respondToFriendRequest, { error: requestError }] = useMutation(
    queries.RESPOND_TO_REQUEST,
    {
      onCompleted: (data) => {
        console.log(data);
      },
      onError: (e) => {
        if (requestError) {
          toast.error(requestError?.message);
        } else {
          toast.error("Failed to Send! Please Try Again Later");
        }
      },
    }
  );

  const requestCount = data?.getUser?.receivedRequests.length;

  const handleRequestAction = async (requestId: number, action: string) => {
    await respondToFriendRequest({ variables: { requestId: requestId, status: action } });

    const processedRequests = friendRequests.filter(
      (request) => request.id !== requestId
    );
    setFriendRequests(processedRequests);
  };

  if (loading) return <div>...Loading</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="flex-1 flex-col h-full">
      <PageHeader
        heading="Friends Requests"
        text={`You have ${requestCount} pending ${
          requestCount > 1 ? "requests" : "request"
        }`}
      />
      <List>
        <div className="ml-4 mt-4">
          {friendRequests.map((req) => {
            return (
              <RequestItem
                requestId={req.id}
                handleRequestAction={handleRequestAction}
                username={req.sender?.username}
                avatar={req.sender?.avatar}
              />
            );
          })}
        </div>
      </List>
    </div>
  );
}
