import { useState } from 'react';
import Prices from './Prices';

const defaults = {
  currency: 'EUR',
  period: '12'
};

const Plans = ({ items }) => {

  const [currency, setCurrency] = useState(defaults.currency);
  const [period, setPeriod] = useState(defaults.period);

  const [plusPlan] = items[currency].filter(item => { return item.Name === 'plus' });
  const [professionalPlan] = items[currency].filter(item => { return item.Name === 'professional' });
  const [visionaryPlan] = items[currency].filter(item => { return item.Name === 'visionary' });

  return <div className="plans">

    <h2>Plans &amp; Prices</h2>

    <select defaultValue={period} onChange={e => setPeriod(e.target.value)}>
      <option>Monthly</option>
      <option selected>Annually</option>
      <option>2 years</option>
    </select>
    <select defaultValue={currency} onChange={e => setCurrency(e.target.value)}>
      <option>CHF</option>
      <option selected>€ Euro</option>
      <option>$ USD</option>
    </select>

    <div className="grid">

      <Prices item={items.freePlan} currency={currency} period={period}></Prices>

      { plusPlan && <Prices item={plusPlan} currency={currency} period={period}></Prices> }

      { professionalPlan && <Prices item={professionalPlan} currency={currency} period={period}></Prices> }

      { visionaryPlan && <Prices item={visionaryPlan} item={professionalPlan} currency={currency} period={period}></Prices>}

    </div>

    <style jsx>{`
      .plans {
        max-width: 800px;
        width: 100%;
      }
      .text {
        font-size: 14px;
        margin: 0 6px 0 6px;
        color: #aquablue;
        text-align: left;
      }
      .grid {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-top: 10px;
      }
      @media (max-width: 600px) {
        .grid {
          width: 100%;
          flex-direction: column;
        }
      }
    `}
    </style>

  </div>

};

export default Plans; 