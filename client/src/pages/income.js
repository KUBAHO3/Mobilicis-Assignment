import MiniDrawer from '@/Components/Darshboard'
import React from 'react'
import DynamicTable from '@/Components/Table'

export const getServerSideProps = async () => {
  let data = [];
  try {
    const res = await fetch("http://localhost:5000/users/income-bmw-mercedes");
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

function Income({ people }) {
//   console.log(people);
  return (
    <MiniDrawer>
      <DynamicTable data={people} />
    </MiniDrawer>
  );
}

export default Income;
