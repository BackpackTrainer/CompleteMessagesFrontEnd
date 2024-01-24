import React, { useEffect, useState } from 'react'

const GetAllPersons = () => {

    const [personData, setPersonData] = useState(<></>);

    function updatePeople() {
        fetch("http://localhost:8080/persons")
            .then((resp) => resp.json())
            .then((json) => {
                setPersonData(() => json.map((p) => 
                    <div key={p.id} id={'id' + p.id}>
                        <h5>Name: {p.name}</h5>
                        <p>Email: {p.email}</p>
                        <br />
                    </div>
                ))
            })
    }


    return (
        <>
            <button onClick={updatePeople}>Fetch People</button>
            {personData}

        </>
    )
}

export default GetAllPersons