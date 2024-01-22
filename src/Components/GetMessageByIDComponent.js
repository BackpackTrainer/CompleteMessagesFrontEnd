import { useEffect, useState } from "react";

const GetMessageByIDComponent = (props) => {
    const [messageData, setMessageData] = useState("");

    useEffect(() => {
        fetch("http://localhost:8080/messages/" + props.messageID)
            .then((resp) => resp.json())
            .then((json) => {
                console.log(json);
                setMessageData(()=> json);
            })
},[])

    if(messageData) {
    return (
        <div id = {'id' + messageData.id}>
            <h5>Message ID: {messageData.id}</h5>
            <p> Message Content: {messageData.content}</p>
           {messageData.sender && <h4>Sent By: {messageData.sender.name}</h4> }
        </div>
    )
}
    return (
        <div>Get Message By ID</div>
    )
} 

export default GetMessageByIDComponent