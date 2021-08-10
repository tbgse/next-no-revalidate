export default function Revalidate(props) {
  return (
    <span>Your number is {props.randomNumber}</span>
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