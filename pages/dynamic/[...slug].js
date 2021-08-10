export default function Revalidate(props) {
  return (
    <span>Your number is {props.randomNumber}</span>
  )
}

export function getStaticPaths() {
  return {
    fallback: true,
    paths: []
  };
}

export async function getStaticProps(props) {
  const randomNumber = Math.random();

  if (randomNumber < 0.5) {
    return {
      revalidate: 1,
      notFound: true
    }
  }

  return {
    props: {
      randomNumber
    },
    revalidate: 1
  }
}