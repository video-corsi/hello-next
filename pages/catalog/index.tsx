import axios from 'axios';
import { NextPageContext } from 'next';
import Link from 'next/link';
import { Gadget } from '../../model/gadget';
import Image from 'next/image'
// const API = 'https://my-json-server.typicode.com/training-api/next-course-gadgets/gadgets';
// AIR TABLE
const API = 'https://api.airtable.com/v0/appZFj1H7Cb1IiG4G/gadget';

const APIKEY = 'keyKHjTkRRNuCSRng'
export async function getStaticProps(context: NextPageContext) {
  try {
    const res = await axios.get<any>(API, {
      headers: {
        Authorization: 'Bearer ' + process.env.AIRTABLE_API_KEY
      }
    })
    console.log(res.data)
    return {
      props: { data: res.data.records},
      revalidate: 10
    }
  } catch(err) {
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
  console.log(props)
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
                    {/*<Image width={50} height={50} src={item.url} />*/}
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
