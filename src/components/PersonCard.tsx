import React from "react";
import { Interface } from "readline";
import './PersonCard.css'

export default function PersonCard(props:PersonCardProps) {
    const {name, age } = props
    return (
    <>
    <div className="person-card-container">
        <div className="person-card">
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        </div>
    </div>
    </>
    )
}

interface PersonCardProps {
    name: string,
    age: number,
    id: number
}
