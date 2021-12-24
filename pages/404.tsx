import Link from "next/link";

export default function Custom404(props: any) {
  console.log(props)
  return (
    <div>
      <h1>404!!! - Page Not Found</h1>
      <Link href="/">back to home</Link>
    </div>
  )
}
