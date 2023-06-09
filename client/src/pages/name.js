import MiniDrawer from '@/Components/Darshboard'
import React from 'react'
import DynamicTable from '@/Components/Table'
import Heading from '@/Components/Heading'

export const getServerSideProps = async () => {
  let data = [];
  try {
    const res = await fetch("https://monilicsassignment.onrender.com/users/last-name-quote-email");
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

function Name({ people }) {
  return (
    <>
    <Heading title={"M for second Name"}/>
    <MiniDrawer>
      <h4>Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name.</h4>
      <DynamicTable data={people} />
    </MiniDrawer>
    </>
  );
}

export default Name;
