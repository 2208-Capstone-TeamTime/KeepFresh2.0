import React, { useState } from 'react';

function Freezer() {
  const [items, setItems] = useState([
    { name: 'ice cream', expirationDate: '2022-12-31' },
    { name: 'frozen pizza', expirationDate: '2022-12-30' },
    { name: 'frozen vegetables', expirationDate: '2022-12-28' },
    { name: 'popsicles ', expirationDate: '2023-1-31' },
    { name: 'frozen fish', expirationDate: '2022-12-30' },
    { name: 'frozen carrots', expirationDate: '2023-12-08' },
  ]);

  return (
    <div>
      <h1>Freezer</h1>
      {items.map((item, index) => (
        <p key={index}>
          {item.name}: {item.expirationDate}
        </p>
      ))}
    </div>
  );
}

export default Freezer;