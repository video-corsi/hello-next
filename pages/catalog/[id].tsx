import axios from 'axios';
import { Gadget, Gadgets } from '../../model/gadget';
import { GetStaticPropsContext } from 'next';
import Image from 'next/image';

const API = 'https://api.airtable.com/v0/appZFj1H7Cb1IiG4G/gadgets';

export async function getStaticPaths() {
  try {
    const res = await axios.get<Gadgets>(API, {
      headers: {
        Authorization: 'Bearer ' + process.env.AIRTABLE_API_KEY
      }
    })
    // console.log(res.data)
    const paths = res.data.records.map(g => ({ params: {id: g.id } }))
    console.log(paths)
    return {
      paths,
      fallback: false
    }
  }
  catch(err: any) {
    return {
      notFound: true,
    }
  }
  /*
  // Manual Output
  return {
    paths: [
      { params: { id: 'recm4TS985qbIdDvd' } },
      { params: { id: 'recugbr9ifn0W0QTi' } },
      { params: { id: 'recyGyOoWoKe8FbVo' } }
    ],
    fallback: true, /!* false, or 'blocking'*!/
  };*/
}


export async function getStaticProps(context: GetStaticPropsContext<{ id: string}>) {

  const id = context.params?.id;

  try {
    const res = await axios.get<Gadget>(`https://api.airtable.com/v0/appZFj1H7Cb1IiG4G/gadgets/${id}`, {
      headers: {
          Authorization: 'Bearer ' + process.env.AIRTABLE_API_KEY
        }
      }
    );
    return {
      props: { gadget: res.data },
    }
  }
  catch(err) {
    return {
      notFound: true, // NOTE: not needed for fallback: false
      revalidate: 60 // Incremental Static Regeneration
    }
  }

}

interface CatalogPageProps {
  gadget: Gadget;
}

function CatalogPage(props: CatalogPageProps) {
  return (
    <>
      <h1>Item Details { props.gadget.fields.Name }</h1>
      <p>{props.gadget.fields.Description}</p>
      <Image
        src={props.gadget.fields.Image[0].thumbnails.large.url}
        width={props.gadget.fields.Image[0].thumbnails.large.width/2}
        height={props.gadget.fields.Image[0].thumbnails.large.height/2}
        className="img-thumbnail"
      />
    </>
  )
}

export default CatalogPage;
