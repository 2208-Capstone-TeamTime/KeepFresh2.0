import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectPast, findReceiptsbyUserId } from '../reducers/receiptsSlice';
import { currentUser } from '../reducers/userSlice';


const History = () => {
  const pastReceipts = useSelector(selectPast);
  const user = useSelector(currentUser)
  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(findReceiptsbyUserId(user))
    
    // console.log('past:', pastReceipts, user);
},[])
  return (
    <div>

      <h1>{`${user.displayName}'s Expiration History`}</h1>
      {pastReceipts.map((receipt,idx) => (<>
      <div>
        
          <h2>Receipt #{idx +1}</h2>
        {receipt.products.map((item) => (<>
          <div key={item._id}>
            <h4>{item.name}</h4>
            <p>{item.fridgeExp}</p>
            <p>{item.freezerExp}</p>
          </div>
        </>))}
        </div></>)
      )}

    </div>
  );
}

export default History;
