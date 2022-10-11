import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import SinglePage from './Components/SinglePage/SinglePage';
import {DataContext} from "./Context/MovieContext"
import axios from "axios"
import Pagination from './Components/Pagination/Pagination';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Modal from './Components/Modal/Modal';
import Filter from './Components/Filter/Filter';

function App() {

  const {data,setData,pageNo,setLoading}=React.useContext(DataContext)


  const apiCall=async()=>{
    const {data}=await axios.get(`https://movie-task.vercel.app/api/popular?page=${pageNo}`)
    setData(data.data.results)
    setLoading(true);
  }

  React.useEffect(()=>{
    apiCall();
  },[pageNo])

  
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<SinglePage data={data}/>}/>
       
        <Route path="/movie-info" element={<Modal/>}/>
       
      </Routes>
      </BrowserRouter>
     
    
      
    </div>
  );
}

export default App;
