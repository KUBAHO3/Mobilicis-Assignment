import MiniDrawer from '@/Components/Darshboard'
import React from 'react'
import DynamicTable from '@/Components/Table'
import Heading from '@/Components/Heading'

export const getServerSideProps = async () => {
  let data = [];
  try {
    const res = await fetch("https://monilicsassignment.onrender.com/users/income-bmw-mercedes");
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
    <>
    <Heading title={"Users with Income"}/>
    <MiniDrawer>
      <h4>Users whith income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.</h4>
      <DynamicTable data={people} />
    </MiniDrawer>
    </>
  );
}

export default Income;
