import { Inter } from 'next/font/google'
import Robot from '@/Components/Robot'
import Heading from '@/Components/Heading'

const inter = Inter({ subsets: ['latin'] })

export const getServerSideProps = async () => {
  let data = [];
  try {
    const res = await fetch("https://monilicsassignment.onrender.com/cities/top-10");
    data = await res.json();
    // console.log("Our data", data);
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      people: data,
    },
  };
};

export default function Home({ people }) {
  return (
    <>
      <Heading title={"Assignment"}/>
      <Robot data = {people}/>
    </>
  )
}
