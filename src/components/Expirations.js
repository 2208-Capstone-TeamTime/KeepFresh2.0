import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { createReceipt, findReceiptsbyUserId, selectExp } from '../reducers/receiptsSlice';
import { currentUser } from "../reducers/userSlice";


const Expirations = () => {
    const Items = useSelector(selectExp);
    const user = useSelector(currentUser);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const storeExp = (Items) => {
        if (user._id !== undefined) {
            dispatch(createReceipt({ id: user._id, exp: Items }));
            dispatch(findReceiptsbyUserId(user));
            console.log('Stored Successfully!');
        }
    };

    const viewHistory = () => {
        navigate('/history');
    }

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
            <div className="exp">
                <div><h2>Expirations</h2></div>
                <div className="exp-items">
                    {!Items.length ? (<><div>No expirations to display</div></>)
                        : Items.map((item) => (
                            <>
                                <div className="exp-item" key={item.name}>
                                    <h3>{item.name}</h3>
                                    <h2 id={item.name} ></h2>
                                </div>
                                <div >
                                    <button onClick={() => { addFridge(item) }}>Fridge</button>
                                    <button onClick={() => { addFreezer(item) }}>Freezer</button>
                                </div>
                            </>
                        ))}
                    <div className="store-btn">
                        {Items.length > 0 ? (<>
                            <button onClick={() => storeExp(Items)} >Store Expirations</button>
                        </>) :
                            <button onClick={() => viewHistory()}>View History</button>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Expirations;
