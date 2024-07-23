import React, { useState, useEffect } from "react"

function GetPeople() {
    const [loading, setLoading] = useState(null);
    useEffect(()=>{
        function handleStatusChange(status) {
            setLoading(status.loading);
        }
    })
    fetchPeopleList();
}

async function fetchPeopleList() {
    try {
        const response = await fetch(`http://127.0.0.1:8000/getPeople/`, {
        method: "GET",
        mode: "no-cors",
        headers: { 'Content-Type': 'application/json'}
        })
        setTimeout(()=> {
            console.log("Request pending...");
            const jsonData = response.json();
            console.log("received json: ", jsonData)
        })
        
    } catch (error) {
        console.log(error)
    }
}

export { GetPeople, fetchPeopleList }
