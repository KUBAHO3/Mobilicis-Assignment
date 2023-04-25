
import MiniDrawer from '@/Components/Darshboard'
import React from 'react'
import DynamicTable from '@/Components/Table'
import Heading from '@/Components/Heading'

export const getServerSideProps = async () => {
  let data = [];
  try {
    const res = await fetch("https://monilicsassignment.onrender.com/users/car-email");
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

function Car({ people }) {
  return (
    <>
    <Heading title={"Users with cars"}/>
    <MiniDrawer>
      <h4>Users whith car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit.</h4>
      <DynamicTable data={people} />
    </MiniDrawer>
    </>
  );
}

export default Car;
