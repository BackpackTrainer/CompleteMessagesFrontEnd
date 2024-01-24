import React, { useState } from 'react'

const PostMessage = () => {
    const [messageContent, setMessageContent] = useState();
    const [messageSender, setMessageSender] = useState();

    function submit() {

        if (messageContent && messageSender) {
            let url = "http://localhost:8080/addMessage";

            let options = {
                method: 'POST',
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({
                    content: messageContent,
                    sender: {
                        name: messageSender
                    }
                }),
            };

            console.log("submitted");
            fetch(url, options);
        } else {
            alert("Enter Content and Sender");
        }
    }

  return (
    <>
        <span>Type your message:</span>
        <input type='text' id='messageContent' onChange={event => setMessageContent(event.target.value)} />
        <br />

        <span>Enter your Name: </span>
        <input type='text' id='messageSender' onChange={event => setMessageSender(event.target.value)} />
        <br />

        <button onClick={submit}> Submit </button>
    </>
  )
}

export default PostMessage