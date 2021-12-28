export default function Home({ app }) {
  return (
    <main>
      <a href={`https://hyper.co/apps/${app}`} target="_blank" rel="noreferrer">Open app in Hyper</a>
    </main>
  )
}

export async function getStaticProps() {
  return {
    props: {
      app: process.env.HYPER_CLIENT_ID,
    },
  }
}