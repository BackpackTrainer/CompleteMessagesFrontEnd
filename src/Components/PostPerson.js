import React, { useState } from 'react'

const PostPerson = () => {

    const [personName, setPersonName] = useState();
    const [personEmail, setPersonEmail] = useState();

    function submit() {
        if(personName && personEmail) {    
            let url = "http://localhost:8080/addPerson";

            let options = {
                method: 'POST',
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({
                    name: personName,
                    email: personEmail,
                }),
            };

            console.log("submitted");
            console.log(options);
            
            fetch(url, options);
        } else {
            alert("Enter Name and Email");
        }

    }

  return (
    <>
    <span>name: </span>
    <input type='text' id='personName' onChange={event => setPersonName(event.target.value)}></input>
    <br />

    <span>email: </span>
    <input type='text' id='personEmail' onChange={event => setPersonEmail(event.target.value)}></input>
    <br/>

    <button onClick={submit}> Submit </button>
    </>
  )
}

export default PostPerson