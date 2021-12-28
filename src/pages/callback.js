import { updateAccount } from '../services/hyper.service';
const particlesConfig = require('../constants/particles_config');

export default function Callback({ account }) {
  return (
    <main>
      Success! We&apos;ve added snow to {account.name}. Take a look at
      your <a href={`https://${account.domain}`}>wintery site</a>, or
      click <a href="https://hyper.co/dashboard">here</a> to return to Hyper.
    </main>
  )
}

export async function getServerSideProps({ query }) {
  if (!query.account) return {
    redirect: {
      destination: '/',
      permanent: false,
    }
  }

  try {
    const account = await updateAccount(query.account, {
      metadata: {
        particles: JSON.stringify(particlesConfig),
      },
    });

    return {
      props: {
        account: {
          name: account.name,
          domain: account.domain,
        },
      },
    }
  } catch (e) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }
}