import React from "react";
import { Interface } from "readline";
import './PersonCard.css'
import { fetchPeopleList } from "../api/functions";

export default function PeopleList() {
    const people = fetchPeopleList();
    
    return (
    <>
    <div className="people-list-container">
        <div className="people-list">
            People:
            
        </div>
    </div>
    </>
    )
}
