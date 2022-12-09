import React, { useState } from 'react';

function Fridge() {
  const [items, setItems] = useState([
    { name: 'milk', expirationDate: '2022-12-25' },
    { name: 'eggs', expirationDate: '2022-12-20' },
    { name: 'bread', expirationDate: '2022-12-15' },
    { name: 'butter', expirationDate: '2022-12-18' },
    { name: 'cheese', expirationDate: '2022-12-30' },
    { name: 'chicken', expirationDate: '2022-12-10' },
    { name: 'pork', expirationDate: '2022-12-18' },
    { name: 'beef', expirationDate: '2022-12-20' },
    { name: 'yogurt', expirationDate: '2022-12-22' },
    { name: 'juice', expirationDate: '2022-12-26' },
    { name: 'chocolate', expirationDate: '2022-12-31' },
  ]);

  return (
    <div>
      <h1>Fridge</h1>
      {items.map((item, index) => (
        <p key={index}>
          {item.name}: {item.expirationDate}
        </p>
      ))}
    </div>
  );
}


export default Fridge



