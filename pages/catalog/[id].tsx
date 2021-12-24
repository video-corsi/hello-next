import axios from 'axios';
import { Gadget, Gadgets } from '../../model/gadget';
import { GetServerSideProps, GetServerSidePropsContext, GetStaticPropsContext } from 'next';
import Image from 'next/image';

const API = 'https://api.airtable.com/v0/appZFj1H7Cb1IiG4G/gadgets';

export async function getServerSideProps(context: GetServerSidePropsContext<{ id: string }>) {
  const id = context.params?.id

  try {
    const res = await axios.get<Gadgets>(`${API}/${id}`, {
      headers: {
        Authorization: 'Bearer ' + process.env.AIRTABLE_API_KEY
      }
    })
    return {
      props: { gadget: res.data},
    }
  }
  catch(err: any) {
    return {
      notFound: true,
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
