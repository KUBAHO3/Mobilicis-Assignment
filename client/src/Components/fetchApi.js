import React from 'react'

let baseUrl = "https://monilicsassignment.onrender.com"

export const getServerSideProps = async (endpoint) => {
    let data = [];
    try {
      const res = await fetch(baseUrl+endpoint);
      data = await res.json();
      console.log("Our data", data);
    } catch (error) {
      console.log(error);
    }
  
    return {
      props: {
        people: data,
      },
    };
  };