import React from 'react'
import Button from 'react-bootstrap/Button';
import "./Pagination.css"
import { DataContext } from '../../Context/MovieContext';

const Pagination = () => {
    const {handlePrev,handleNext}=React.useContext(DataContext);
  return (
    <div className='btn-div'>
        <Button variant='primary' onClick={handlePrev}>Previous</Button>
        <Button variant='primary' onClick={handleNext}>Next</Button>
    </div>
  )
}

export default Pagination