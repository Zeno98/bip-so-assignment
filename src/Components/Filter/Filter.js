import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { DataContext } from '../../Context/MovieContext';

const Filter = () => {

    const{dateArr,handleSelectYear}=React.useContext(DataContext);

  return (
    <div>
        <FloatingLabel controlId="floatingSelect" label="Select Year">
      <Form.Select aria-label="Floating label select example" onChange={(e)=>{handleSelectYear(e.target.value)}}>
       {
        dateArr.map((ele)=>{
            return(
                <>
                <option value={ele}>{ele}</option>
                </>
            )
        })
       }
      </Form.Select>
    </FloatingLabel>
    </div>
  )
}

export default Filter
