import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectExp } from '../reducers/receiptsSlice';
import { fetchExpProducts } from "../reducers/receiptsSlice";

const Expirations = () => {
    const Items = useSelector(selectExp)
    const dispatch = useDispatch();

    const addFridge = ((item) => {
        const fridgeStr = item.fridgeExp
        console.log('fridgeStr', fridgeStr)

        const textElement = document.getElementById(`${item.name}`)

        textElement.innerHTML = fridgeStr
    })

    const addFreezer = ((item) => {
        const freezerStr = item.freezerExp
        console.log('freezerStr', freezerStr)

        const textElement = document.getElementById(`${item.name}`)

        textElement.innerHTML = freezerStr
    })

    return (
        <>
            <div className="expirations">
                <h2>Expirations</h2>
                {!Items ? '' : Items.map((item) => (
                    //call return exp 
                    <>
                        <div key={item.name}>
                        {item.name}
                        <h2 id={item.name} >Fridge Exp</h2>
                        </div>
                        <button onClick={() => {addFridge(item)}}>Fridge</button>
                        <button onClick={() => {addFreezer(item)}}>Freezer</button>
                    </>
                ))}
            </div>
        </>
    )
}

export default Expirations