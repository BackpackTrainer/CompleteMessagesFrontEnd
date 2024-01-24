import React, { useEffect, useState} from 'react'

const GetAllMessages = () => {
    const [messageData, setMessageData] = useState(<></>);

    function updateMessages() {
            fetch("http://localhost:8080/messages")
            .then((resp) => resp.json())
            .then((json) => {
                setMessageData(() => json.map((m) =>
                <div key={m.id} id={'id' + m.id}>
                    <h5 key = {m.id}>Message ID: {m.id}</h5>
                    <p key = {m.content}>Message: {m.content}</p>
                    <h4 key = {m.sender.name}>Sent By: {m.sender.name}</h4>
                    <br />
                </div>
            ));
            })
    }

    
    return (
        <>
            <button onClick={updateMessages}>Fetch Messages</button>
            {messageData}
        </>
    )
}

export default GetAllMessages