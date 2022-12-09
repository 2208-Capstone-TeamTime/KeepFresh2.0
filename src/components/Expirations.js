import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectReceipt, selectExp} from '../reducers/receiptsSlice';
import { fetchExpProducts } from "../reducers/receiptsSlice";

const Expirations = () => {
    const Items = useSelector(selectExp);

    const dispatch = useDispatch() 

     function fetchExp  (item) {
        const expInfo = 
             dispatch( fetchExpProducts(item.name))
             .then((data) => data);
        console.log('Exp Info', expInfo);
        return expInfo;
        
    }

    return (
        <>
        <div className="expirations">
            <h2>Expirations</h2>
        {!Items? '': Items.map((item) => (
            //call return exp 
            <div key={item.food}>
                {/* <h2>Expirations Test{item.name}</h2> */}
                {/* return string from api */}
                {`${item.food}- ${item.fridge} & ${item.freezer}`}
            </div>
        ))}
        </div>
        </>
    )
}

export default Expirations