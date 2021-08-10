export default function Revalidate(props) {
  return (
    <span>Your number is {props.randomNumber}</span>
  )
}

export async function getStaticProps(props) {
  const randomNumber = Math.random();

  try {
    if (randomNumber < 0.5) {
      throw new Error('Not Found');
    }
    return {
      props: {
        randomNumber
      },
      revalidate: 1
    }
  } catch {
    return {
      revalidate: 1,
      notFound: true
    }
  }
}