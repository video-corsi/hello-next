import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="centered-page">

      <Head>
        <title>FrontEnd Gadgets</title>
        <meta name="description" content="Front-end Gadgets is a demo site built in Next" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="title">FrontEnd Gadgets</h1>
    </div>
  )
}

export default Home



