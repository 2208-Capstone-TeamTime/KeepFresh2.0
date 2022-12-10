import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectExp} from '../reducers/receiptsSlice';
import { fetchExpProducts } from "../reducers/receiptsSlice";

const Expirations = () => {
    const Items = useSelector(selectExp);

    const dispatch = useDispatch();

    return (
        <>
        <div className="expirations">
            <h2>Expirations</h2>
        {!Items? '': Items.map((item) => (
            //call return exp 
            <div key={item.name}>
                {`${item.name}- ${item.fridgeExp} & ${item.freezerExp}`}
            </div>
        ))}
        </div>
        </>
    )
}

export default Expirations