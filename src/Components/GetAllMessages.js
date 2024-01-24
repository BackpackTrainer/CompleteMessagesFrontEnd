import React, { useEffect, useState} from 'react'

const GetAllMessages = () => {
    const [messageData, setMessageData] = useState("");

    useEffect(() => {
        fetch("http://localhost:8080/messages")
            .then((resp) => resp.json())
            .then((json) => {
                setMessageData(() => json);
            })
    },[])



    function loadData() {
        return messageData.map((m) =>
            <div key={m.id} id={'id' + m.id}>
                <h5 key = {m.id}>Message ID: {m.id}</h5>
                <p key = {m.content}>Message: {m.content}</p>
                <h4 key = {m.sender.name}>Sent By: {m.sender.name}</h4>
                <br />
            </div>
        )
    }
    if(messageData) {
        return (
            loadData()
        )
    } else {
        return (
            <div>Loading ...</div>
        )
    }
}

export default GetAllMessages