import Head from 'next/head';
import Plans from '../components/Plans';
import currencyPlans from '../fetch/currencyPlans';

const currency = {
  EUR: 'EUR',
  CHF: 'CHF',
  USD: 'USD'
};

const freePlan = {
  Name: 'free',
  MaxMembers: 1,
  MaxSpace: 500000000,
  MaxAddresses: 1,
  MaxDomains: 0,
  MaxVPN: 0,
  Pricing: {
    1: 0,
    12: 0,
    24: 0,
  },
  Amount: 0

};

export async function getStaticProps() {
  return {
    props: {
      plans: {
        [currency.EUR]: await currencyPlans(currency.EUR),
        [currency.CHF]: await currencyPlans(currency.CHF),
        [currency.USD]: await currencyPlans(currency.USD),
        freePlan
      }
    }
  }
};

const Index = ({ plans }) => (

  <div className="container">
    <Head>
      <title>Proton FE Test: Modern Website</title>
    </Head>

    <main>
      <h1 className="title">Community Supported.</h1>

      <p className="text">
        ProtonMail is community software, 
        funded by the community, and open source. 
        We do not show ads or make money by abusing your privacy. 
        Instead, we depend on your support to keep the service running. 
        Revenue from paid accounts is used to further develop ProtonMail 
        and support free users such as democracy activists and dissidents 
        who need privacy but can't necessarily afford it.
      </p>

      <h2 className="description">Plans &amp; Prices</h2>
    
    <Plans items={plans} />
  
    </main>

    <style jsx>{`
      .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .title,
      .description,
      .text {
        text-align: center;
      }
      @media (max-width: 600px) {
        .grid {
          width: 100%;
          flex-direction: column;
        }
      }
    `}
    </style>

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: Droid Sans, sans-serif;
      }
      * {
        box-sizing: border-box;
      }
    `}
    </style>
  </div>
)

export default Index;