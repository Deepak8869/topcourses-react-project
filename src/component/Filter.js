import React from 'react'
import { filterData } from '../data';
import "../styles/Filter.css";

const Filter = () => {
  return (
    <div className='filter'>
        {filterData.map((data) => {
            return <button key={data.id}>
                {data.title}
            </button>
        })}
    </div>
  )
}

export default Filter;