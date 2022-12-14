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
  }, [])
  return (
    <div className="user-history">
      <div className="userPage-header">
        {user.displayName !== undefined? (<>
        <h1>{`${user.displayName}'s Expiration History`}</h1>
        </>): (<><h1>Expiration History</h1></>)}
      </div>
      <div className="stored-history">
        {pastReceipts.map((receipt, idx) => (<>
          <div className="individual-hist">
            <h2>Receipt #{idx + 1}</h2>
            {receipt.products.map((item) => (<>
              <div key={item._id}>
                <h4>{item.name}</h4>
                <p>{item.name} {item.fridgeExp} in fridge</p>
                <p>{item.name} {item.freezerExp} in freezer</p>
              </div>
            </>))}
          </div></>)
        )}
      </div>
    </div>
  );
}

export default History;