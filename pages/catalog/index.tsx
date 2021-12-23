import axios from 'axios';
import { NextPageContext } from 'next';
import Link from 'next/link';
import { Gadget, Gadgets } from '../../model/gadget';
import Image from 'next/image'

const API = 'https://api.airtable.com/v0/appZFj1H7Cb1IiG4G/gadgets';

export async function getStaticProps(context: NextPageContext) {
  try {
    const res = await axios.get<Gadgets>(API, {
      headers: {
        Authorization: 'Bearer ' + process.env.AIRTABLE_API_KEY
      }
    })
    // console.log(res.data)
    return {
      props: { data: res.data.records},
    }
  }
  catch(err) {
    return {
      notFound: true,
      // revalidate: 60 // Incremental Static Regeneration
      // props: { data: null, error: err.status}
    }
  }
}

interface IndexProps {
  data: Gadget[]
}

function Index(props: IndexProps) {
  return (
    <>
      <h1>Catalog</h1>
      <ul>
        {
          props.data?.map(item => {
            return (
              <div key={item.id}>
                <Link href={`/catalog/${item.id}`}>
                  <>
                    <h1>{item.fields.Name}</h1>
                  </>
                </Link>
              </div>
            )
          })
        }
      </ul>
    </>
  )
}

export default Index;
