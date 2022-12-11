import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectPast, findReceiptsbyUserId } from '../reducers/receiptsSlice';
import { currentUser } from '../reducers/userSlice';


const History = () => {
  const pastReceipts = useSelector(selectPast);
  const dispatch = useDispatch();
  const user = useSelector(currentUser)

  useEffect(() => {
    dispatch(findReceiptsbyUserId(user))
    console.log('past:', pastReceipts, user);
},[])
  return (
    <div>
      <h1>Expiration History</h1>
      {pastReceipts.map((item) => (<>
        <div key={item._id}>
          <h4>{item.name}</h4>
          <p>{item.fridgeExp}</p>
          <p>{item.freezerExp}</p>
        </div>
      </>))}
    </div>
  );
}

export default History