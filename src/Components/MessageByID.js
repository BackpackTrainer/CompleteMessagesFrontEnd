import React, { useEffect, useState } from 'react'
import GetMessageByIDComponent from './GetMessageByIDComponent';

const MessageByID = () => {

    const [messageId, setMessageId] = useState("");
    const [allIds, setAllIds] = useState();

    useEffect(() =>{
        fetch("http://localhost:8080/messages")
            .then((resp)=>resp.json())
            .then((json) => {
                let temp = json.map((m)=> 
                    <option key = {m.id} value={m.id}>{m.id}</option>
                )
                setAllIds(()=>temp);
            })
        },[] )


  return (
    <>


    <div>Select a Message ID:</div>
    <select onChange={(e)=>setMessageId(()=>e.target.value)}>
        <option key="default" value="">Choose and ID</option>
        {allIds}

    </select>

   { messageId ? <GetMessageByIDComponent key = {messageId} messageID = {messageId} /> : <></>  }
    
    </>  
  )
}

export default MessageByID