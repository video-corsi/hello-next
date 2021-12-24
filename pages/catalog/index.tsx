import axios from 'axios';
import { GetServerSideProps } from 'next';

import Link from 'next/link';
import { Gadget, Gadgets } from '../../model/gadget';

const API = 'https://api.airtable.com/v0/appZFj1H7Cb1IiG4G/gadgets';

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const res = await axios.get<Gadgets>(API, {
      headers: {
        Authorization: 'Bearer ' + process.env.AIRTABLE_API_KEY
      }
    })
    return {
      props: { data: res.data.records},
    }
  }
  catch(err: any) {
    return {
      notFound: true,
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
                  <h1>{item.fields.Name}</h1>
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
