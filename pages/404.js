export default function NotFound(props) {
  return (
    <span>404, not found. A random number: {props.randomNumber}</span>
  )
}

export async function getStaticProps(props) {
  const randomNumber = Math.random();

  return {
    props: {
      randomNumber
    },
    revalidate: 1
  }
}