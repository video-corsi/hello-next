import axios from 'axios';
import { NextPageContext } from 'next';
import Link from 'next/link';
import { Gadget } from '../../model/gadget';
import Image from 'next/image'
// const API = 'https://my-json-server.typicode.com/training-api/next-course-gadgets/gadgets';
const API = 'http://localhost:8000/gadgets';

export async function getStaticProps(context: NextPageContext) {
  try {
    const res = await axios.get<Gadget[]>(API)
    return {
      props: { data: res.data },
      revalidate: 6
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
                    <h1>{item.title}</h1>
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
