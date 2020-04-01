import React from 'react';

const Prices = ({ item, text }) => (
  <div>
    <a href="https://protonmail.com/pricing" className="prices" >
      <h3>{item.Name}&nbsp;&rarr;</h3>
      <p>{text}</p>
    </a>
  </div>
)

export default Prices;