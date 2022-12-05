import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectReceipt } from '../reducers/receiptsSlice';
import { fetchExpProducts } from "../reducers/receiptsSlice";

const Expirations = () => {
    const receiptItems = useSelector(selectReceipt);

    const dispatch = useDispatch() 

     function fetchExp  (item) {
        const expInfo = 
             dispatch( fetchExpProducts(item.name))
        console.log('Exp Info', expInfo);
        console.log('desrtructure',{expInfo})
        return expInfo;
        
    }

    return (
        <>
        <div className="expirations">
        {!receiptItems? '': receiptItems.map((item) => (
            //call return exp 
            <div key={item.name}>
                {/* <h2>Expirations Test{item.name}</h2> */}
                {/* return string from api */}
                {`${item.name}- ${fetchExp(item)}`}
            </div>
        ))}
        </div>
        </>
    )
}

export default Expirations