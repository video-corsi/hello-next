import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import image from '/public/images/photo2.png';

const Home: NextPage = () => {
  return (
    <div>
      <style jsx>{`
        h1 {
          color: orange;
        }
        @media (max-width: 600px) {
          h1 {
            color: purple;
          }
        }
      `}</style>

      {/*Solo per prova - da rimuovere*/}
{/*      <style global jsx>{`
        body {
          background: black;
        }
      `}</style>*/}

      <Head>
        <title>FrontEnd Gadgets</title>
        <meta name="description" content="Front-end Gadgets is a demo site built in Next" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="animate__animated animate__tada animate__repeat-2 animate__delay-2s">FrontEnd Gadgets</h1>

      <div style={{ width: '100%', maxWidth: '600px', background: 'grey', padding: 20, position: 'relative'}}>
        {/*<img src="/images/photo1.jpg" />*/}
        {/*<Image src="/images/photo1.jpg" width={400} height={300} />*/}
        {/*with blur*/}
        {/*<Image src={image} width={400} height={300} placeholder="blur"/>*/}
        {/*responsive*/}
        {/*<Image src={image}  placeholder="blur" layout="fixed"/>
        <Image src={image}  placeholder="blur" layout="responsive"/>*/}
        {/*<Image src={image}  placeholder="blur" layout="intrinsic"/>*/}
        {/*<h4>Image Fill</h4>
        <Image src={image}   placeholder="blur" layout="fill"/>*/}
      </div>

    </div>
  )
}

export default Home
