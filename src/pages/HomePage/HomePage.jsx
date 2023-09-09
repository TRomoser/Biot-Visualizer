import './HomePage.css'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import DataCard from '../../components/DataCard/DataCard'

export default function HomePage ({ data }) {
  return (
    <div className="HomePage">
      <h1>Home Page</h1>
      <div className='DataField'>
        {data ? 
        data.map((data, idx) => <DataCard key={idx} data={data} />)
        :
        <h2>Loading...</h2>
      }
      </div>
    </div>
  );
}