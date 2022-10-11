import React from 'react'

export const DataContext=React.createContext();

const MovieContext = ({children}) => {
    const [data,setData]=React.useState([]);
    const [pageNo,setPageNo]=React.useState(1);
    const [loading,setLoading]=React.useState(false);
    const [modalId,setModalId]=React.useState();
    const [modalData,setModalData]=React.useState();
    const [selectYear,setSelectYear]=React.useState("");

    let dateArr=[];
    for(let i=2023;i>1990;i--){
     dateArr.push(i-1);
    }

    const handlePrev=()=>{
      if(pageNo===1){
        setPageNo(1);
      }
      else{
        setPageNo(pageNo-1);
      }
    }

    const handleNext=()=>{
      if(pageNo===10){
        setPageNo(10);
      }
      else{
        setPageNo(pageNo+1);
      }
    }

    const handleModalId=(id)=>{
      setModalId(id)
    }

    const handleSelectYear=(year)=>{
      setSelectYear(year)
    }
  return (
    <div>
        <DataContext.Provider value={{data,setData,pageNo,setPageNo,handlePrev,handleNext,handleModalId,loading,setLoading,modalData,setModalData,modalId,selectYear,setSelectYear,handleSelectYear,dateArr}}>
            {children}
        </DataContext.Provider>
    </div>
  )
}

export default MovieContext