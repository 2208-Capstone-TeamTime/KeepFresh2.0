import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { selectReceipt, fetchExpProducts, fetchReceipts } from "../reducers/receiptsSlice";
import changeProperty,{ addReceipt} from "../reducers/receiptsSlice";



const Receipt = () => {
    const receipt = useSelector(selectReceipt);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchReceipts())
    }, []);

    const fetchExp = (item) => {
        dispatch(fetchExpProducts(item.name))
        navigate('/exp')
    }

    // const changePropertyValueFridge = (name) => {
    //     // document.getElementById(`${item.name}Fridge`).checked = true
    //     // document.getElementById(`${item.name}Freezer`).checked = false
    //     // item.fridge = !(item.fridge);
    //     const dispatch(changeProperty(name));
    //     console.log(item.fridge)
    //     return item
    // }

    const changePropertyValue= (name) => {
        // document.getElementById(item.name+'Fridge').checked = false
        // document.getElementById(item.name+'Freezer').checked = true
        // item.fridge = false
        const change = dispatch(changeProperty(name));

        console.log(change)
        return change;
    }

    console.log(receipt);
    return (
        <>
            <div className="receipt">
                <div className="receipt-header">
                    <h2>Receipt</h2>
                </div>
                <div className="receipt-items">
                    {receipt? receipt.map((item) => (
                        <div key={item.name}>
                            {item.name}

                            {/* <label>
                            <input type="checkbox" id= {item.name}
                                 
                                onChange={(evt) => {
                                    // evt.target.checked = true
                                    changePropertyValue(evt.target.id)
                                    console.log("update", receipt)
                                    }
                                }
                                />{item.fridge? 'Fridge':'Freezer'}
                            </label>
                            
                            <label>Freezer
                            <input type="checkbox" id={item.name}
                               
                                onChange={(evt) => {
                                    evt.target.checked = true
                                    console.log(evt.target.id);
                                    changePropertyValue(evt.target.id)
                                    console.log("update", receipt)
                                    }
                                }
                                />
                            </label> */}
                             
                        </div>)
                    ): ''}</div>

                {/* <button>Get All Calendar Notifications</button> */}
                <button onClick={() => receipt.map((item) => fetchExp(item)
                // createReceipt()
                )}>Calculate Expirations</button>
                <button onClick={addReceipt()}>Add Receipt</button>
            </div>
        </>
    )
}

export default Receipt;