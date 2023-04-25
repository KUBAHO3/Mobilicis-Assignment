import MiniDrawer from '@/Components/Darshboard'
import React from 'react'
import DynamicTable from '@/Components/Table'
import Heading from '@/Components/Heading'

export const getServerSideProps = async () => {
  let data = [];
  try {
    const res = await fetch("https://monilicsassignment.onrender.com/users/male-phone-price");
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

function Male({ people }) {
//   console.log(people);
  return (
    <>
    <Heading title={"Male users"}/>
    <MiniDrawer>
      <h4>Male Users which have phone price greater than 10,000.</h4>
      <DynamicTable data={people} />
    </MiniDrawer>
    </>
  );
}

export default Male;
