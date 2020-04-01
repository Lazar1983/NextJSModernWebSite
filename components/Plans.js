import Prices from './Prices.js';

const text = {
  free: 'The basics for private and secure communications',
  plus: 'Full-featured mailbox with advanced protection',
  professional: 'ProtonMail for professionals and businesses',
  visionary: 'ProtonMail for families and small businesses',
};

const currency = 'EUR';

const renderPlan = (plan) => {

};

const Plans = ({ items }) => {

  const [plusPlan] = items[currency].filter(plan => { return plan.Name === 'plus' });
  const [professionalPlan] = items[currency].filter(plan => { return plan.Name === 'professional' });
  const [visionaryPlan] = items[currency].filter(plan => { return plan.Name === 'visionary' });

  return <div className="plans">
    <h2>Plans &amp; Prices</h2>

    <select>
      <option>Monthly</option>
      <option selected>Annually</option>
      <option>2 years</option>
    </select>
    <select>
      <option>CHF</option>
      <option selected>€ Euro</option>
      <option>$ USD</option>
    </select>

    <div className="grid">
      {<Prices item={items.freePlan} text={text['free']}></Prices>}
      {plusPlan && <Prices item={plusPlan} text={text[plusPlan.Name]}></Prices>}
      {professionalPlan && <Prices item={professionalPlan} text={text[professionalPlan.Name]}></Prices>}
      {visionaryPlan && <Prices item={visionaryPlan} text={text[visionaryPlan.Name]}></Prices>}
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