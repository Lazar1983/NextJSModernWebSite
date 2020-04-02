const text = {
  free: 'The basics for private and secure communications',
  plus: 'Full-featured mailbox with advanced protection',
  professional: 'ProtonMail for professionals and businesses',
  visionary: 'ProtonMail for families and small businesses',
};

const symbols = {
  EUR: '€',
  CHF: 'CHF',
  USD: '$'
}

const gigabyte = 1073741824;
const megabyte = gigabyte / 1024;

const periods = {
  1: 'mo',
  12: 'year',
  24: '2 years'
}

const byUser = 'per user';


function returnAsteriks(plan) {
  if (plan === 'plus' || plan === 'professional') {
    return ' *'
  }
  return ''
}

const Prices = ({ item, period, currency }) => {
  const plan = item.Name;
  const price = item.Pricing[period] / 100;
  const monthly = item.Pricing['1'] / 100;
  const isProfessional = plan === 'professional';
  const storageGB = item.MaxSpace / gigabyte;
  const storageMB = item.MaxSpace / megabyte;
  const isInGigabytes = storageMB >= 1023;
  const storage = isInGigabytes ? `${storageGB} GB` : `${storageMB} MB`
  const domainSupport = item.MaxDomains === 0 ? 'No domain support' : `Supports ${item.MaxDomains} domain${item.MaxDomains !== 1 ? 's' : ''}`;

  return <>
    <div className="prices">

      <header>
        {plan === 'plus' && <span>MOST POPULAR</span>}
        <h3>{plan}</h3>
        <p>{symbols[currency]} <span>{monthly}</span>/mo</p>
        {period !== '1' && plan !== 'free' &&
          <p>Billed as {symbols[currency]}{price} per {periods[period]}</p>}
      </header>

      <div>
        <p>{text[plan]}</p>
        <ul>
          <li>{item.MaxMembers}{isProfessional && ' - 5000'} user{isProfessional && ' *'}</li>
          <li>{storage} storage {isProfessional && byUser}{returnAsteriks(plan)}</li>
          <li>{item.MaxAddresses} address{item.MaxAddresses !== 1 ? 'es' : ''} {isProfessional && byUser}{returnAsteriks(plan)}</li>
          <li>{domainSupport}{returnAsteriks(plan)}</li>
          {plan === 'visionary' && <li>Includes all features</li>}
          {plan === 'visionary' && <li>Priority Support</li>}
          {plan === 'plus' && <li>Supports folders, labels, filters, auto-reply, IMAP/SMTP and more</li>}
          {plan === 'professional' && <li>Catch all email, multi user management, priority support and more</li>}
          <li>{item.MaxVPN === 0 ? 'ProtonVPN (optional) *' : 'Includes ProtonVPN'}</li>
        </ul>
      </div>

      <footer>
        <button>Select</button>
      </footer>

    </div>
    <style jsx>{`
      .prices {
        border: 1px solid #eaeaea;
        border-radius: 2px;
        text-align: center;
        width: 100%;
        display: flex;
        flex-direction: column;
      }
    `}</style>
  </>
};

export default Prices;