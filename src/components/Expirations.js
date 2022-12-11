import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createReceipt, findReceiptsbyUserId, selectExp} from '../reducers/receiptsSlice';
import { currentUser } from "../reducers/userSlice";


const Expirations = () => {
    const Items = useSelector(selectExp);
    const user = useSelector(currentUser);

    const dispatch = useDispatch();

    const storeExp = (Items) => {
        dispatch(createReceipt({id:user._id, exp: Items}));
        dispatch(findReceiptsbyUserId({user}));
        console.log('Stored Successfully!');
    };

    return (
        <>
        <div className="expirations">
            <h2>Expirations</h2>
        {!Items? (<>
            <div>No expirations to display</div>
            <Link to='/history'><button>View History</button>
            </Link>
        </>
        )
        : Items.map((item) => (
            //call return exp 
            <div key={item.name}>
                {`${item.name}- ${item.fridgeExp} & ${item.freezerExp}`}
            </div>
        ))}
        <button onClick={() => {storeExp(Items)}} >Store Expirations</button>
        </div>
        </>
    )
}

export default Expirations