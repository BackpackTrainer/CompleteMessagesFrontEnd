import React, { useEffect, useState } from 'react'

const GetAllPersons = () => {
    const [personData, setPersonData] = useState("");

    useEffect(() => {
        fetch("http://localhost:8080/persons")
            .then((resp) => resp.json())
            .then((json) => {
                setPersonData(() => json);
            })
    },[])


    function loadData() {
        return personData.map((p) => 
            <div key={p.id} id={'id' + p.id}>
                <h5>Name: {p.name}</h5>
                <p>Email: {p.email}</p>
                <br />
            </div>
        )
    }

    if(personData) {
        return (
            loadData()
        )
    } else {
        return (
            <div>Loading ...</div>
        )
    }
}

export default GetAllPersons