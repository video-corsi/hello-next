import { useRouter } from 'next/router';

function CatalogPage() {
  const router = useRouter();
  console.log(router.query.id)
  return (
    <>
      <h1>Item Details { router.query.id }</h1>
    </>
  )
}

export default CatalogPage;
