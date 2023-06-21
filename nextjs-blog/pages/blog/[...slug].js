import { useRouter } from 'next/router'
 

export async function getStaticPaths() {
  return {
      paths: [],
      fallback: false,
  };
}

export async function getStaticProps({params, ...rest}) {
  // Add the "await" keyword like this:
  console.log(rest);
  return {
      props: {
          params: params,
          a: 123
      },
  };
}

export default function Page({params, a}) {
  console.log('router', params, a);
  return (
    <>
    <p>postData: {12312}</p>
    </>
  )
}