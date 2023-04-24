import MiniDrawer from '@/Components/Darshboard'
import React from 'react'
import DynamicTable from '@/Components/Table'

export const getServerSideProps = async () => {
  let data = [];
  try {
    const res = await fetch("http://localhost:5000/cities/top-10");
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

function Top({ people }) {
//   console.log(people);
  return (
    <MiniDrawer>
      <h4>Data of top 10 cities which have the highest number of users and their average income.</h4>
      <DynamicTable data={people} />
    </MiniDrawer>
  );
}

export default Top;
