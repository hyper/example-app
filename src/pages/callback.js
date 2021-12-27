import { updateAccount } from '../services/hyper.service';
const particlesConfig = require('../constants/particles_config');

export default function Callback() {
  return (
    <div>
      <main>
        Success
      </main>
    </div>
  )
}

export async function getServerSideProps({ query }) {
  if (!query.account) return {
    redirect: {
      destination: '/',
      permanent: false,
    }
  }

  let account = null;
  let error = null;

  try {
    account = await updateAccount(query.account, {
      'metadata.snow': JSON.stringify(particlesConfig),
    });
  } catch (e) {
    error = e;
  }

  return {
    props: {
      account,
      error,
    },
  }
}