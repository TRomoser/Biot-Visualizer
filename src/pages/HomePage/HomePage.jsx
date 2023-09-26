import './HomePage.css'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import DataCard from '../../components/DataCard/DataCard'
import CollapsibleTree from '../../components/CollapsibleTree/CollapsibleTree'

export default function HomePage ({ data }) {
  return (
    <div className='HomePage'>
      <CollapsibleTree data={data} />
    </div>
  );
}