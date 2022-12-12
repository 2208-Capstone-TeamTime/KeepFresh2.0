import React from "react";
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
        dispatch(createReceipt({ id: user._id, exp: Items }));
        dispatch(findReceiptsbyUserId({ user }));
        console.log('Stored Successfully!');
    };

    const viewHistory = () => {
        navigate('/history');
    }

    return (
        <>
            <div className="expirations">
                    <h2>Expirations</h2>
                    </div>
                <div>
                {!Items ? (<>
                    <div>No expirations to display</div>
                </>
                )
                    : Items.map((item) => (
                        //call return exp 
                        <div key={item.name}>
                            <h3>{item.name}</h3>
                            <div>
                                <h4>Fridge:</h4>
                                <p>{item.fridgeExp}</p></div>
                            <div>
                                <h4>Freezer:</h4>
                                <p>{item.freezerExp}</p></div>
                        </div>
                    ))}

                    <div>
                {Items.length >0 ? (<>

                    <button onClick={() => viewHistory()}>View History</button>

                    <button onClick={() => storeExp(Items)} >Store Expirations</button>
                </>) :
                    <button onClick={() => viewHistory()}>View History</button>
                }
                    </div>
            </div>
        </>
    )
}

export default Expirations
