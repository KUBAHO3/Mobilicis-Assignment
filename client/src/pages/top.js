import MiniDrawer from '@/Components/Darshboard'
import React from 'react'
import DynamicTable from '@/Components/Table'
import Heading from '@/Components/Heading'

export const getServerSideProps = async () => {
  let data = [];
  try {
    const res = await fetch("https://monilicsassignment.onrender.com/cities/top-10");
    data = await res.json();
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      people: data,
    },
  };
};

function Top({ people }) {
  return (
    <>
    <Heading title={"Top cities"}/>
    <MiniDrawer>
      <h4>Data of top 10 cities which have the highest number of users and their average income.</h4>
      <DynamicTable data={people} />
    </MiniDrawer>
    </>
  );
}

export default Top;
